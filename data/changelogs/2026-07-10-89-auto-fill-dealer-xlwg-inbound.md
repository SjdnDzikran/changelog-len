---
date: "2026-07-10"
title: "Auto-fill dealer field on XLWG inbound uploads, removing manual input requirement"
repo: api-wms
product:
  - backend
additions: 9
deletions: 26
---

**Auto-populate dealer from material group:** When uploading XLWG inbound data from Excel, the system now automatically fills the Dealer column using the material group name. Staff no longer need to manually enter or verify a dealer value for each row.

**Fewer required columns in the template:** The Dealer column is no longer mandatory in the upload template, reducing the number of fields that must be prepared before submitting an inbound file.

**No more dealer validation errors:** Since the field is populated by the system, misspelled or unrecognized dealer names can no longer cause upload rejections or delays.
