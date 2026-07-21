---
date: "2026-07-21"
title: "Automatically expire unprocessed approval requests after 7 days"
repo: len-approval-api
product:
  - backend
additions: 5471
deletions: 7
---

Pending approval forms that sit unprocessed for too long are now automatically moved to an "Expired" status, keeping the approval queue clean and preventing stale decisions.

- **Configurable expiration window:** Forms default to expiring after 7 days (168 hours), with the ability to set different durations per form type (BL Inbound, BL Outbound, Pickup Domestic) through configuration
- **Background sweep every 5 minutes:** A background job continuously checks for forms past their expiration time and transitions them to "Expired" status, recording the change in the status history
- **Automatic notification:** When a form expires, the submitter receives both an email and a WhatsApp message in Bahasa Indonesia informing them that their request can no longer be processed
- **Blocked approval actions:** Approvers are prevented from approving or rejecting an expired form, with a clear message explaining that the form has already expired
- **Clean dashboard counts:** Expired forms no longer appear in the pending approval queue or dashboard statistics, so the "Pending" count only reflects actionable items