---
date: "2026-09-13"
title: "App Updates page reorganized with separate tabs for TMS and WMS"
repo: erp-len-ui
product:
  - web
additions: 386
deletions: 334
---

The App Updates page in the admin panel now mirrors the multi-app support on the server, giving each mobile app its own dedicated view.

- **Separate tabs per app:** Releases are split into an "Aplikasi TMS" tab and an "Aplikasi WMS" tab, each with its own latest version card, upload form, search, and release history.
- **Latest version up front:** Each tab opens with a highlight card showing the newest version, its release notes, file size, publish time, and a direct download button.
- **Uploads scoped to the tab:** Uploading from a tab automatically files the release under that app, so there is no risk of sending a TMS build to WMS users.
