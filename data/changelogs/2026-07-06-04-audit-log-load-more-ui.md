---
date: "2026-07-06"
title: "Replace audit log pagination with Load More to eliminate timeouts"
repo: erp-len-ui
product:
  - web
additions: 303
deletions: 226
---

The Audit Logs page now loads entries incrementally with a Load More button instead of traditional pagination, eliminating the timeout that occurred when the system tried to count total log entries.

- **Load More button:** Entries appear 10 at a time with a "Muat Lebih Banyak" button at the bottom, which hides automatically when all entries have been loaded
- **Instant filters:** Changing the search keyword, date range, or value toggles now clears the list and reloads from the beginning, giving immediate feedback instead of waiting for a total count
- **No more blank wait:** The page renders the first batch of results immediately, so users see their recent activity without any delay
