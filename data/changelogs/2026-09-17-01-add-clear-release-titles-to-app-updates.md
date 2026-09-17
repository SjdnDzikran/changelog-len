---
date: "2026-09-17"
title: "Add clear release titles to app updates"
repo: erp-len-ui
product:
  - web
  - backend
additions: 167
deletions: 11
---

App releases used to squeeze everything into a single notes field, so the ERP release list showed cut-off text and the mobile update prompt displayed a raw commit message. Every release now carries a proper headline, kept separate from the full notes:

- **Headline for every release:** The ERP app-updates table now shows a short, one-line title for each release instead of truncated notes; older releases automatically fall back to the first line of their notes so nothing looks broken
- **Title field when uploading:** Publishing a new app version from the ERP panel includes a dedicated "Judul Rilis" field, with a hint on the notes field clarifying that it's what appears in the update prompt on the mobile app
- **Search by title:** Finding a past release no longer requires knowing its exact version number; search now matches titles as well as versions
- **Readable update prompts on phones:** Automated app builds now attach a proper headline and full description to each release, so the TMS app's update sheet explains what's new in plain language instead of showing a raw commit message
