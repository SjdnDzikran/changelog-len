---
date: "2026-05-12"
title: "Add loading spinners and smooth transitions to image previews"
repo: len-react
product:
  - web
deletions: 3
additions: 55
---

Image preview dialogs now show a loading spinner while photos load and fade in smoothly once ready, replacing the previous behavior where images would abruptly appear.

- **Loading spinner in image dialogs:** A spinning indicator appears while activity photos and tracking images are loading, so users know content is on its way instead of staring at a blank space
- **Smooth fade-in animation:** Images transition from transparent to fully visible over 300ms, giving a polished feel when opening or switching between photos
- **Adjacent image preloading:** The next and previous activity images are silently loaded in the background while viewing one, so navigating between photos feels instant with no waiting
