---
date: "2026-05-26"
title: "Send WhatsApp notifications for BL approval workflows"
repo: len-approval-api
product:
  - backend
---

**Approvers now receive WhatsApp messages whenever a BL form needs their action.** Both BL Inbound and BL Outbound forms automatically notify the right person via WhatsApp at every approval step, including the AWB data-entry step.

- **WhatsApp on every step:** When a BL Inbound or BL Outbound form is submitted or moves to the next approval stage, each assigned approver receives a WhatsApp message with the form number and a direct link to review it
- **Customizable message templates:** Teams can configure WhatsApp message text per form type and notification stage (approval request, approved, rejected, revision needed) using database templates, with Indonesian-language fallback text built in
- **Outcome broadcasts:** When a BL form is finally approved, rejected, or sent back for revision, the result is broadcast to the full email and WhatsApp recipient lists chosen by the approver, not just to the original requester
- **Duplicate notification prevention:** On the final approval step, the system skips sending a separate "needs approval" broadcast to the WhatsApp recipient list, since approving that step immediately completes the form and triggers the outcome notification instead
