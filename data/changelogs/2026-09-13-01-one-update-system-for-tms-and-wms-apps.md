---
date: "2026-09-13"
title: "One update system now serves both the TMS and WMS mobile apps"
repo: erp-len-api
product:
  - backend
additions: 161
deletions: 18
---

The release system that powers in-app updates has been expanded from a single-app list to a multi-app platform, so the growing WMS app can be distributed through the same channel as TMS.

- **Both apps, one place:** Every release is now tagged with the app it belongs to, so TMS and WMS updates live side by side in the same system without getting mixed up.
- **Per-app latest version:** Each app has its own "latest version" lookup, so TMS users are only ever offered TMS updates and WMS users only WMS updates.
- **History preserved:** All releases published before this change are automatically recognized as TMS releases, so the existing update history stays intact.
- **Wrong-app protection:** Publishing a release now requires naming its target app, preventing a build from going out to the wrong audience.
