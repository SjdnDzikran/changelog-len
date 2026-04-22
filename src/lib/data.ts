import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { ChangelogDay, ChangelogEntry, ChangelogProduct, ChangelogRepo } from "./types";

const CHANGELOGS_DIR = path.join(process.cwd(), "data", "changelogs");

export interface RawFrontmatter {
  repo: ChangelogRepo;
  product: ChangelogProduct[];
  title: string;
  image?: string;
}

export interface RawEntry {
  repo: ChangelogRepo;
  product: ChangelogProduct[];
  title: string;
  description: string;
  image?: string;
}

export function getAllPublishedDays(): ChangelogDay[] {
  return readAllDays();
}

export function getPendingEntries(_date?: string): ChangelogEntry[] {
  return [];
}

export function addEntry(_entry: Omit<ChangelogEntry, "id" | "published">): ChangelogEntry {
  throw new Error("Use writeDayFile() or writeMarkdownFile() instead.");
}

export function publishEntries(_ids: string[]): ChangelogEntry[] {
  throw new Error("Not applicable - all entries in data/changelogs/ are published by default.");
}

export function publishAllPending(): ChangelogEntry[] {
  return [];
}

export function addImageToEntry(_id: string, _imageUrl: string): ChangelogEntry | null {
  return null;
}

export function removeEntry(_id: string): boolean {
  return false;
}

/** Write a full day's entries as a JSON file. Used by cronjob (legacy). */
export function writeDayFile(date: string, entries: RawEntry[]): void {
  if (!fs.existsSync(CHANGELOGS_DIR)) {
    fs.mkdirSync(CHANGELOGS_DIR, { recursive: true });
  }
  const filePath = path.join(CHANGELOGS_DIR, `${date}.json`);
  fs.writeFileSync(filePath, JSON.stringify(entries, null, 2));
}

function readAllDays(): ChangelogDay[] {
  if (!fs.existsSync(CHANGELOGS_DIR)) return [];

  // Collect all entries from .md files (grouped by date in frontmatter or filename)
  const mdFiles = fs.readdirSync(CHANGELOGS_DIR).filter((f) => f.endsWith(".md"));

  const entryMap = new Map<string, ChangelogEntry[]>();

  for (const file of mdFiles) {
    const raw = fs.readFileSync(path.join(CHANGELOGS_DIR, file), "utf-8");
    const { data, content } = matter(raw);

    const date = (data.date as string) || file.replace(/-\d+\.md$/, "");
    const entry: ChangelogEntry = {
      id: file.replace(".md", ""),
      repo: (data.repo as ChangelogRepo) ?? "erp-len-api",
      product: (data.product as ChangelogProduct[]) ?? ["backend"],
      title: (data.title as string) ?? "",
      description: content.trim(),
      date,
      imageUrl: data.image as string | undefined,
      published: true,
    };

    if (!entryMap.has(date)) {
      entryMap.set(date, []);
    }
    entryMap.get(date)!.push(entry);
  }

  return Array.from(entryMap.entries())
    .map(([date, entries]) => ({ date, entries }))
    .sort((a, b) => b.date.localeCompare(a.date));
}
