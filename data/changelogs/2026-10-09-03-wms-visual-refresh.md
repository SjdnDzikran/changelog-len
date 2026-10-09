---
date: "2026-10-09"
title: "Give the WMS a full visual refresh with dark mode and clearer screens"
repo: ui-wms
product:
  - web
additions: 6810
deletions: 4594
---

The whole WMS web application received a brand refresh in Light and Dark themes, covering the navigation, dashboards and data tables.

- **New LEN look:** Navy sidebar with the LEN logo, a cleaner header showing the active warehouse at a glance, a one-click light/dark toggle that remembers the user's choice, and softer "natural" status colors that are easier on the eyes during long warehouse sessions
- **Denser, more useful dashboards:** All dashboards (every business type) were rebuilt to keep every figure the old ones showed but in less space: a Today card, weekly inbound/outbound stage cards, compact breakdown tiles, and ranked lists that are easier to read than pie charts
- **Tables fit the screen:** On 61 list and report pages, related columns are now merged into stacked cells (e.g. part number, name and plan in one column), so wide tables no longer require sideways scrolling; every field, sort and permission is unchanged
- **Clearer inbound progress:** The allocation progress is now shown as a Stage column (Staged, Confirmed, Allocated) with a small step indicator, so a document is never displayed as "partly" confirmed when confirmation is all-or-nothing
- **Optional 14/30-day trend card:** A new inbound vs outbound trend chart appears on dashboards; it stays hidden without errors until the matching API update is deployed
