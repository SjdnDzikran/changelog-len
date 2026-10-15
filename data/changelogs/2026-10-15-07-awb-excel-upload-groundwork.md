---
date: "2026-10-15"
title: "Lay the groundwork for Excel-based AWB uploads"
repo: erp-len-api
product:
  - backend
additions: 1016
deletions: 30
---

The API gained a complete, fully tested channel for receiving AWB entry files as Excel uploads, delivered switched off so current uploads are untouched.

- **A dedicated upload channel, ready but hidden:** A new submission endpoint for AWB Excel files is built and covered by 257 passing tests, but it answers as if it does not exist until the feature is switched on, and it stays out of the API documentation so nothing can call it early
- **Safe by design:** Files are checked for type and exact size before anything is stored, each upload carries a unique key so a retry can never create a duplicate job, and a half-sent file is rejected with a clear message instead of being silently accepted
- **Protected against overload:** When the server is already processing another upload, new submissions receive a friendly "try again shortly" message rather than piling up
- **No change to current behavior:** Existing uploads, databases and storage are completely unaffected; enabling the channel later is a configuration decision
