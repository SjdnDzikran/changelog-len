---
date: "2026-06-28"
title: "Fix REQ auto-number generation on form creation"
repo: len-approval-api
product:
  - backend
additions: 29
deletions: 5
---

New approval forms can now generate sequential REQ numbers correctly, fixing a server error that was blocking both the number preview and form submission.

- **Sequence generation fixed:** The auto-numbering system now calls the database sequence directly instead of through a query wrapper that was causing SQL Server to return a 500 error, so the preview number loads and the final number assigns without failures
