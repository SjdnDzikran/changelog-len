---
date: "2026-09-30"
title: "Upload large AWB files without duplicates or timeouts"
repo: erp-len-api
product:
  - backend
additions: 991
deletions: 81
---

Overhauled the bulk AWB Excel upload on the server side, so staff can send much bigger files and never create the same shipment twice after an interrupted upload.

- **Files up to five times larger:** one Excel file can now hold up to 1,000 AWB rows instead of 200. The server reviews the whole file up front, then saves it in small batches so no single batch runs into a time limit.
- **Duplicate protection:** if an upload is interrupted and the same file is sent again, rows already saved are recognized and skipped rather than being created twice. Rows without their own AWB number are matched against identical shipments the same user made in the last 24 hours.
- **Honest reporting:** rows skipped as already saved are counted separately from errors, and each one shows which AWB number it was saved as and when.
- **Fix-and-resend:** a new download produces an Excel file containing only the rows that failed, each with its error explanation in an extra column, ready to correct and upload again.
