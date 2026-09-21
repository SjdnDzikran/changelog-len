---
date: "2026-09-21"
title: "Smoother loading experience on the App Updates page"
repo: erp-len-ui
product:
  - web
additions: 79
deletions: 6
---

The App Updates page now shows a cleaner loading state while the release list is being fetched:

- **Skeleton placeholder instead of a spinner:** While releases load, the page now shows a greyed-out preview of the actual table (matching the real columns and row shapes) with a subtle shimmer animation, instead of a generic spinning circle
- **Less layout jumping:** Because the placeholder mirrors the real table's column layout, rows settle into place without the page shifting once the data arrives
- **Screen-reader friendly:** The loading announcement is preserved for visually impaired users, while the decorative placeholder stays hidden from assistive technology
