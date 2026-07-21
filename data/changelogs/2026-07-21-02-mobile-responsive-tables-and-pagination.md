---
date: "2026-07-21"
title: "Make all tables mobile-friendly with card layout and page size selector"
repo: ui-wms
product:
  - web
additions: 707
deletions: 198
---

All data tables across the WMS system have been overhauled for phone users and now include a page size control for faster navigation on desktop.

- **Card layout on mobile:** Every data table (inbound, outbound, delivery, tested inventory, user management, and more) now stacks into clean, easy-to-read cards on phone screens instead of displaying as cramped horizontal rows that require scrolling
- **Page size selector:** Every table footer now includes a "Tampilkan" dropdown with options from 10 up to 500 rows, so users can view more data without clicking through multiple pages
- **Smart column hiding:** Secondary columns like Material Document and Remark are automatically hidden on small screens to keep the card view focused on what matters
- **Better pagination on mobile:** The page navigation and page size controls rearrange vertically on phones with properly sized buttons, preventing overflow and wrapping issues
- **Photo zoom fix:** The full-screen photo viewer now calculates drag boundaries based on the actual screen size, so users can pan all the way to the edges of highly zoomed images