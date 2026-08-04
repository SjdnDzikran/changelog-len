---
date: "2026-08-04"
title: "Relabel REKAP summary column for clarity"
repo: ui-wms
product:
  - web
additions: 8
deletions: 3
---

- **Belum Ditest label:** The Recorded column in the REKAP summary has been renamed to "Belum Ditest" (Not Yet Tested), making the formula read Belum Ditest + Tested = Total instead of the previous Recorded + Tested, which could be confusing when Tested exceeded Recorded past 50% completion.
