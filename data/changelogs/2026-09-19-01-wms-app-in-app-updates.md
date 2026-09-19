---
date: "2026-09-19"
title: "Let the WMS mobile app update itself in-app"
repo: api-wms
product:
  - backend
additions: 449
deletions: 2
---

The WMS Android app can now check for and receive app updates on its own. Previously, updating the app required manually downloading and installing a new APK file; now the app can offer the update directly to its users.

- **In-app update check:** The mobile app can now ask for the latest published release (version, title, release notes, download link, and file size) so staff see a prompt to update right inside the app instead of hunting for install files
- **Simplified access:** Warehouse devices no longer need ERP credentials or special permissions to check for updates; the WMS system fetches the release information on their behalf, so any logged-in app user can update
- **Graceful handling:** If no update has been published yet, or the update service is briefly unreachable, the app shows a clean message with a retry option rather than a technical error
