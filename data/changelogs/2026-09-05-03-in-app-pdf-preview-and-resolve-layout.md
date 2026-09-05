---
date: "2026-09-05"
title: "Preview test-result PDFs without leaving the page"
repo: ui-wms
product:
  - web
additions: 807
deletions: 20
---

Test-result PDFs now open in a full-screen preview inside Tested Inventory instead of pulling staff out to a new browser tab, and the resolve dialog finally keeps its columns in line.

- **In-app PDF preview:** Clicking a test-result document opens it in a full-screen overlay, so staff reviewing a long table keep their scroll position and filters instead of losing them to a new tab
- **Familiar viewer:** The preview mirrors the existing photo viewer (same backdrop, round controls, Escape and click-outside to close), shows the file name and size, and badges PDFs reused from a previous test
- **Balanced resolve dialog:** The approval table now budgets every column explicitly, so an uploaded PDF can no longer squeeze serial number, condition, completeness, or Power On Test down to a sliver; wide tables scroll sideways instead of clipping fields
- **Safe and resilient:** Only verified secure storage links can open in the preview, the access link is cleared the moment it closes, and an "open in new tab" fallback is always on screen for browsers that block inline PDF rendering
