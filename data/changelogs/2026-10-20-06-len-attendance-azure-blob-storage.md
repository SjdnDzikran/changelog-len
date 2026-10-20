---
date: "2026-10-20"
title: "Move file storage to Azure Blob Storage"
repo: len-attendance
product:
  - backend
additions: 553
deletions: 473
---

Attendance selfie photos and profile pictures are now stored in Azure Blob Storage instead of Amazon S3:

- **Single cloud provider:** File uploads, downloads, and temporary access links all use Azure, matching the rest of the company's cloud setup and removing the separate AWS credentials to manage.
- **Same behavior, new backend:** Uploads from the mobile app, secure time-limited viewing links, and photo verification all work exactly as before; only the storage location changed.
- **Graceful degradation unchanged:** If storage is not configured, photo-required punches still fail safely with a clear reason rather than recording punches without evidence.
