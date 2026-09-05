---
date: "2026-09-05"
title: "Pick the real test date when resolving and see aging on screen"
repo: ui-wms
product:
  - web
additions: 409
deletions: 21
---

The Tested Inventory screens now let staff enter the actual test time when approving results, and the reports display how long each unit has gone since its last test.

- **Editable test date in every resolve dialog:** Per S/N, Per Material, and batch resolve now include a Jakarta-time date and time field, prefilled with the current moment and freely editable for backdated tests, past or future
- **Set once, adjust per row:** A bulk field applies one test date to every selected serial at once, while each row keeps its own editable value for selections that were tested at different times
- **Aging visible on screen:** Per S/N shows each unit's test date and days since its last test, Per Material shows the earliest and latest test dates plus maximum aging per group, and Rekap now separates the batch date from the real serial test span
- **Missing history stays honest:** Rows with unknown, never-tested, or unlinked history display a dash instead of "0", so "no record" is never confused with "tested today"
