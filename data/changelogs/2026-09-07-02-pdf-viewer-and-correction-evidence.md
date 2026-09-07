---
date: "2026-09-07"
title: "Read and manage PDF evidence without leaving the page"
repo: ui-wms
product:
  - web
additions: 1271
deletions: 198
---

The in-page PDF viewer used for test evidence was rebuilt into a full document reader, and the correction request flow now handles PDF evidence end to end.

- **Full viewer controls:** Zoom in and out, fit to page width or full page, jump straight to any page, and download a copy. Searching finds text across the whole document with every match highlighted (typed text only, not words inside scanned images).
- **PDF evidence in correction requests:** In "Pengajuan Perubahan", operators can attach a new PDF, propose a replacement, or mark the current one for removal alongside photos and field changes. The stored document stays untouched until the request is approved.
- **Preview before submitting:** Photos and PDFs in the request dialog open full-size on click, including files that were just attached but not yet sent, so what is being submitted is never a surprise. Approvers see the same previews on pending requests.
- **Mobile friendly:** The correction form now scrolls properly with its action buttons reachable on small screens, and closing a photo or PDF preview no longer closes the whole request window by accident.
