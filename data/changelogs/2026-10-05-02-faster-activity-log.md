---
date: "2026-10-05"
title: "Open the activity log fast, even with a long change history"
repo: erp-len-api
product:
  - backend
additions: 101
deletions: 15
---

The activity log page now loads in two steps so browsing history is quick and the full record is still one tap away.

- **Fast list, detail on demand:** The list loads each entry's summary only, without the heavy before-and-after value records, so the first page appears quickly even for accounts with a long history
- **Full change record on tap:** Opening an entry's detail fetches its complete record with old and new values on demand, so nothing is lost compared to before
- **Lighter database work:** History queries skip re-reading unchanged data and fetch only the display name they need, keeping the page responsive as records accumulate
