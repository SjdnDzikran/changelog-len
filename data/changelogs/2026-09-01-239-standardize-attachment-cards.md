---
date: "2026-09-01"
title: "Replace inline attachment lists with standardized card previews"
repo: erp-len-ui
product:
  - web
additions: 501
deletions: 324
---

All three petty cash forms (income, expense, and edit) now share one attachment component instead of each maintaining its own duplicated file upload and display code. The result is a consistent, card-based experience across the entire petty cash workflow.

- **Card-based previews:** Uploaded files appear as thumbnail cards showing image previews for photos and recognizable icons for PDFs, with file name and size displayed underneath
- **Edit-page preview dialog:** Clicking an existing attachment on the edit page opens a full-screen viewer with a file sidebar, so receipts and proofs can be inspected without downloading
- **Smart delete protection:** On expense records, the last remaining proof attachment cannot be deleted, preventing incomplete expense records
- **Consistent upload limits:** The same 5-file maximum and format validation (PDF, PNG, JPG, JPEG) applies everywhere, with clear counter and helper text
