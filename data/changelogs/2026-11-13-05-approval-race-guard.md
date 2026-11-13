---
date: "2026-11-13"
title: "Block edit-and-approve races on requests"
repo: len-attendance
product:
  - backend
additions: 120
deletions: 90
---

Leave, permit, visit, work report and overtime decisions now verify inside the approval action itself that the request is still pending.

- **No approving stale requests:** If an employee edits a request while an approver is clicking, the approval is rejected instead of silently approving a version the approver never saw
- **No editing after decision:** Approved or rejected requests can no longer be modified through a timing gap; once decided, the record is final
