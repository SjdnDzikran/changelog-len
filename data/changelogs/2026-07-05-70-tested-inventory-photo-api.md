---
date: "2026-07-05"
title: "Add photo attachments to Tested Inventory serial numbers"
repo: api-wms
product:
  - backend
additions: 666
deletions: 3
---

- **Photo upload** per serial number, with server-side compression that automatically resizes and optimizes images before storage
- **Per-S/N cap of 5 photos** and a 10 MB per-file limit keep storage controlled and predictable
- **Photo count** is returned with each serial number row, so the frontend can show how many photos are attached
- Photos are stored securely in Azure Blob Storage and served via time-limited signed URLs that expire after 15 minutes
