---
date: "2026-09-29"
title: "Bulk POD status upload now runs in the background with stop, resume, and a failed-rows file"
repo: erp-len-ui
product:
  - web
additions: 2145
deletions: 244
---

Uploading hundreds of POD statuses from Excel used to time out and fail as one big request. The whole flow was rebuilt:

- **Guided three-step dialog:** Pick the file, review the check results, then save. The file is validated up front and split into three counts: rows ready to save, rows already saved (skipped, not errors), and rows that need fixing, with the first 20 problems listed on screen.
- **Background progress:** Saving happens 25 rows at a time so no request can time out. The dialog can be closed and staff can move to another page while an "Upload data" panel in the bottom corner keeps counting, shows estimated time left, and announces completion anywhere in the app.
- **Stop and resume:** An upload can be paused after the current batch and resumed from where it stopped, including after a connection drop. If the browser tab closes mid-upload, re-uploading the same file simply skips rows already saved, so nothing is ever duplicated.
- **Download just the failed rows:** One button produces the same Excel template containing only the failing rows, each with its reason in a new red "Keterangan Error" column, ready to fix and re-upload as-is.
- **Protects against accidental loss:** The browser asks for confirmation before closing or reloading the tab while an upload is running.
