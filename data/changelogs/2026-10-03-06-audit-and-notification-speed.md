---
date: "2026-10-03"
title: "Keep the activity log and notification history fast as data grows"
repo: erp-len-api
product:
  - backend
additions: 147
deletions: 193
---

Behind-the-scenes speed work so two frequently used features stay quick as history accumulates.

- **Faster activity log:** The "My Logs" page now reads from a purpose-built index instead of scanning the entire audit table, so the first open is no longer slow, and the index is built in a way that never blocks anyone from saving work while it is created
- **Faster notification lookups:** The unread count and "mark all read" now query only the notifications that belong to the user, rather than reading the whole ever-growing notification table on every bell click
