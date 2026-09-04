---
date: "2026-09-04"
title: "Fix missing separators under the last mobile table record"
repo: erp-len-ui
product:
  - web
additions: 32
deletions: 3
---

On phones, tables display as stacked cards where every field sits on its own labeled line, but the very last record on any page was missing the separator lines under its fields, making it blur into the content below.

- **Consistent cards:** The last record in any table now keeps a separator line under each of its fields, matching every other record on the page
- **All pages at once:** The fix sits in the shared mobile styling, so every table in the web app benefits, including the Airway Bill list
- **Phones and tablets:** The correction covers all small-screen layouts where tables stack into labeled cards
