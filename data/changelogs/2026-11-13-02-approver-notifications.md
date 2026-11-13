---
date: "2026-11-13"
title: "Send approval requests to the right approvers, not to everyone"
repo: len-attendance
product:
  - backend
additions: 44
deletions: 18
---

Approval requests (leave, permits, visits, work reports) are now delivered directly to the inbox of every admin authorized to approve them, one personal notification per approver.

- **Correct recipients:** "Awaits approval" notifications go only to admins holding the approving permission, instead of being visible where they should not be
- **Private inboxes:** Employees no longer see other people's approval requests; each notification is addressed to exactly one recipient and each person tracks their own read status
- **Every request accounted for:** Each submitted request generates a notification per approver, so nothing slips through unnotified
