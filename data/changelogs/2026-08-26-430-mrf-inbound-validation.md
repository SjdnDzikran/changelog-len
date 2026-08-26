---
date: "2026-08-26"
title: "Validate MRF Inbound uploads against live WMS reference data"
repo: len-approval-api
product:
  - backend
additions: 265
deletions: 46
---

- **Warehouse-scoped validation:** All reference values in the Excel upload (material codes, plant, storage location, type product, vendor, and product category) are now checked against the WMS database at upload time, scoped to the correct warehouse
- **Immediate row-level errors:** Each invalid value is reported with its exact row number and the offending value, so the uploader can fix the file and re-upload without guessing what went wrong
- **Prevents downstream failures:** Previously, invalid values would pass the upload and only fail later during MRF approval synchronization, forcing the entire form to be rejected after approvers had already reviewed it
