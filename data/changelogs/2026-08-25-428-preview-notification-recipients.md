---
date: "2026-08-25"
title: "Preview notification recipients before submitting or approving forms"
repo: len-approval-api
product:
  - backend
additions: 628
deletions: 2
---

The approval system can now show exactly who will receive automatic email and WhatsApp notifications before a form action is confirmed.

- **Recipient details on demand:** When someone is about to submit, approve, reject, or request revision on a form, the system resolves the full list of recipients including their names, approval groups, email addresses, and WhatsApp numbers
- **Channel-aware routing:** Different form types use different notification channels. For example, Pickup Domestic outcome notifications go through WhatsApp only, while most other forms use email. The preview reflects these rules accurately
- **Workflow context:** The preview shows which approval step comes next, who the remaining approvers are in all-member-approval steps, and whether the requester will receive a status update after the action
