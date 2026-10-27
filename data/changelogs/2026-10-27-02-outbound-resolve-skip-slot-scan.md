---
date: "2026-10-27"
title: "Faster outbound serial number processing (WMS 2.51.4)"
repo: api-wms
product:
  - backend
additions: 367
deletions: 2
---

- **Noticeably faster document processing:** An internal check that scanned roughly two million serial number records per document is now skipped when no new serial numbers need to be registered. During the reported incident this lookup took over three minutes; it is now removed from that path entirely.
- **Same safety, less waiting:** All existing protections remain: item quantities are still validated, physical serial numbers are still checked and reserved, meter-based stock behaves exactly as before, and a failure midway still rolls everything back.
- **New release (2.51.4):** Eleven new automated tests run the actual service against a disposable database, including the reported seven-item, twelve-serial document, so this scenario cannot silently regress.
