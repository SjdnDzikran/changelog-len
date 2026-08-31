---
date: "2026-08-31"
title: "Attach PDF test results to inventory serial numbers"
repo: api-wms
product:
  - backend
additions: 602
deletions: 53
---

- **PDF evidence per serial number:** Operators can now upload one PDF test-result document to each serial number in Tested Inventory, stored securely and served via short-lived read-only links
- **Strict PDF validation:** Uploaded files are checked by extension, MIME type, and binary signature to ensure only genuine PDFs are accepted, with a 10 MB size limit per document
- **Warehouse-scoped access:** All evidence reads and mutations are restricted to the operator's assigned warehouse, preventing cross-warehouse data exposure
- **Automatic cleanup:** If a database write fails mid-upload, the cloud-stored file is automatically removed so no orphaned documents accumulate
- **Operator Checker access:** The Operator Checker role can now upload and delete draft evidence without needing higher admin privileges, and read-only viewers can view uploaded documents
