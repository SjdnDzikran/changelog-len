---
date: "2026-11-24"
title: "Process inbound uploads in the background"
repo: api-wms
product:
  - backend
additions: 5994
deletions: 9
---

Uploading large inbound receiving files no longer locks up the browser. The file is accepted instantly, checked on the server in the background, and saved only when every check passes, so staff can keep working while the upload runs.

- **Instant acceptance:** The moment an upload file is sent, the server queues it and confirms receipt; the person uploading no longer has to keep the page open and wait for a long check to finish
- **Every problem at once:** Instead of stopping at the first bad cell, a rejected upload now reports all issues together: wrong materials, locations, vendors and quantities per row, plus per-item totals that do not balance
- **Nothing is half-saved:** Either the entire file passes and is stored in one step, or nothing is stored at all, so a rejected file can never leave partial receiving data behind
- **Guided corrections:** Rejected files come back with problem cells highlighted and a summary of each item group that needs fixing, so staff can correct and re-upload without guessing
