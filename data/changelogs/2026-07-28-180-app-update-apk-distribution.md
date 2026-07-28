---
date: "2026-07-28"
title: "Distribute Android app updates from the admin panel"
repo: erp-len-api
product:
  - backend
additions: 484
deletions: 0
---
- **New APK release management:** Admins can now upload, browse, and delete Android app releases directly from the system, with each release tagged by version number and optional release notes
- **Automated CI/CD uploads:** The build pipeline can push new APK versions automatically using a secure API key, so every build can be published without manual intervention
- **Cloud-hosted files:** Uploaded APKs are stored in Azure Blob Storage and served via direct download links, keeping the server lightweight
- **Role-based access:** Only users with Admin or Super Admin roles can manage app releases
