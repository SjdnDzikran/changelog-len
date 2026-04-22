export type ChangelogProduct = "mobile" | "web" | "backend";
export type ChangelogRepo = "api-wms" | "ui-wms" | "erp-len-api" | "erp-len-ui" | "len-app" | "len-react" | "len-approval-api" | "len-approval-ui";

export interface ChangelogEntry {
  id: string;
  repo: ChangelogRepo;
  product: ChangelogProduct[];
  title: string;
  description: string;
  date: string; // YYYY-MM-DD
  imageUrl?: string;
  published: boolean;
}

export interface ChangelogDay {
  date: string;
  entries: ChangelogEntry[];
}
