---
date: "2026-09-12"
title: "Add approval workflow for petty cash expense claims"
repo: erp-len-api
product:
  - backend
additions: 1102
deletions: 49
---

Petty cash expenses now go through a proper approval process instead of being recorded directly by whoever fills in the form.

- **Submit for approval:** Drivers and couriers can submit expense claims with 1-5 proof attachments. Claims enter a pending queue and do not reduce the cash balance until they are approved.
- **Approve or reject:** Petty Cash Officers and Admins can approve or reject pending claims, optionally adding review notes. Approved claims count toward the balance; rejected ones stay on record for audit but are excluded from it.
- **Automatic notifications:** When a claim is submitted, all approvers receive a high-priority notification. The submitter is notified as soon as their claim is approved or rejected, including the reviewer's notes.
- **Cleaner balance reporting:** The cash balance now counts only approved transactions, and separately shows how much money is tied up in claims waiting for approval.
- **Privacy by role:** Drivers and couriers can only see the claims they submitted themselves; full visibility stays with the petty cash team and admins.
