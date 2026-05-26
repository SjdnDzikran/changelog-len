---
date: "2026-05-26"
title: "Speed up AWB Excel upload processing"
repo: erp-len-api
product:
  - backend
---

**Faster bulk AWB registration via Excel upload.** The upload process previously evaluated all VLOOKUP formulas across the entire spreadsheet (over a million rows), causing 20-30 second delays every time a user submitted an AWB template. This has been reduced to near-instant processing.

- **Tighter formula ranges:** VLOOKUP formulas now reference only the actual reference data rows instead of the full column, eliminating unnecessary calculations
- **Smart row detection:** Empty template rows are skipped without evaluating their formulas, so the system only processes rows where the user actually entered data
- **Safety cap:** Uploads are limited to 200 data rows per submission, which is more than enough for daily operations while keeping processing times consistent
