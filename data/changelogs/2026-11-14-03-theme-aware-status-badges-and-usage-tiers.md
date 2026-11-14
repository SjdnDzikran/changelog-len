---
date: "2026-11-14"
title: "Theme-aware status badges and usage color tiers"
repo: erp-len-ui
product:
  - web
additions: 309
deletions: 16
---

Status and usage information across the customer address pages and the AWB edit-request review page now render as pill-style badges that adapt to light and dark themes, making lists easier to scan at a glance.

- **Colored usage tiers:** Address usage counts are now color-coded in three tiers: neutral for 0 uses, cyan for 1-9 uses, and green for 10+ uses. Busy addresses stand out immediately in the list and on the detail page.
- **Pill-style status badges:** Active/Inactive states on the address list and page header, plus AWB edit-request statuses (Menunggu, Disetujui, Ditolak), are now rounded pill badges with proper backgrounds instead of plain colored text.
- **Dark mode ready:** All badges follow the active theme, so they stay readable in both light and dark mode.
- Released as UI version 2.0.13.
