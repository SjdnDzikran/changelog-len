---
date: "2026-08-10"
title: "Make Tested Inventory tabs bookmarkable and shareable"
repo: ui-wms
product:
  - web
additions: 345
deletions: 34
---

Each tab on the Tested Inventory page (Rekap, Per Material, Per S/N, Persetujuan Perubahan) now has its own URL path, so the selected tab survives a page refresh or a shared link.

- **Stable URLs per tab:** Navigating to a tab updates the browser address bar, so the link can be copied, bookmarked, or sent to a colleague
- **Browser navigation works:** The back and forward buttons now restore the previously selected tab instead of leaving the page
- **Safe redirects:** Invalid or unauthorized tab links are automatically corrected to the Rekap tab, preventing errors from old bookmarks or mistyped URLs
