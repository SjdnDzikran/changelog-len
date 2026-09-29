---
date: "2026-09-29"
title: "Bulk POD upload in parts, failed-row workbook, and clearer AWB upload limits"
repo: erp-len-api
product:
  - backend
additions: 542
deletions: 30
---

Backend support that makes large POD status uploads reliable, and removes a silent data-loss trap in AWB uploads:

- **Uploads in parts:** Bulk POD files are now processed 200 rows per request, so even a 700-row file no longer hits the time limit that previously failed every remaining row. The full file is still validated as a whole, so duplicates across parts are caught exactly as before.
- **Failed rows as a ready-to-fix workbook:** A new download returns the operator's own uploaded template containing only the rows that failed, with a clearly visible "Keterangan Error" column explaining each problem. Sheets, dropdowns, and formatting are preserved, so it can be corrected and re-uploaded as-is.
- **Re-uploading is safe:** Rows whose shipment already has the same status are now reported as "skipped" instead of "failed". An interrupted upload can simply be sent again, and the summary distinguishes saved, skipped, and failed counts.
- **No more silent truncation in AWB uploads:** The AWB Excel upload previously processed only the first 200 rows and quietly ignored the rest. Files with data past row 200 are now rejected up front with a clear message telling the operator to split the file.
