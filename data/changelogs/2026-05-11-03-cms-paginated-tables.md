---
date: "2026-05-11"
title: "Switch CMS articles and activities to paginated tables"
repo: erp-len-ui
product:
  - web
deletions: 481
additions: 599
---

The **Articles** and **Activities** management pages now use paginated tables instead of card grids, making them faster and easier to navigate when content grows.

- **Server-side pagination** — Content loads page by page from the server instead of all at once, keeping the page responsive even with hundreds of entries.
- **Column sorting** — Sort by title, status, or last modified date with a single click on the column header.
- **Instant search** — Search results update as you type, with a short debounce to avoid unnecessary requests.
