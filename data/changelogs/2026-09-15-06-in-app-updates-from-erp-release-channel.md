---
date: "2026-09-15"
title: "Deliver app updates in-app from the company's release channel"
repo: len-app
product:
  - mobile
additions: 1294
deletions: 234
---

The LEN Logistics Android app now manages its own updates end to end: it checks the ERP app-updates module for new releases, downloads them with a progress bar, and walks the user through installation.

- **Updates from company servers:** New releases come from the ERP app-updates module instead of GitHub, so distribution no longer depends on an external platform
- **Update sheet on the home screen:** When a new version is available, an update icon appears in the header; the sheet shows the new version, current version, file size, and release notes, with download progress and a cancel button
- **Check for updates on demand:** A "Periksa Pembaruan" option in the account menu checks immediately and confirms when the app is already up to date
- **Safer installation:** Downloaded updates are size-checked before install, and the app guides users through the install permission
