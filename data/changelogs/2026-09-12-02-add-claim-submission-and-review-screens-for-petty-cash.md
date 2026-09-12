---
date: "2026-09-12"
title: "Add claim submission and review screens for petty cash"
repo: erp-len-ui
product:
  - web
additions: 855
deletions: 140
---

The petty cash page now supports the full claim and approval process right in the browser.

- **Dedicated claim form:** Drivers and couriers get their own submission page with a clear notice that the claim awaits approval. Their name is filled in from their account and locked, so vouchers can no longer be filed under someone else's name.
- **One-click review:** Approvers see a Review button on every pending claim. A dialog shows the amount and the submitter, then offers Approve or Reject with optional notes.
- **Status column and filter:** The transaction list now shows each claim's status (Waiting, Approved, Rejected) and who submitted it, with a status filter to quickly find pending items.
- **Read-only detail page:** A new detail view shows the complete voucher, the review outcome with notes, and proof attachments, without risking accidental edits.
- **Role-aware screens:** Buttons, balance cards, and the side menu adapt to each user's permissions, and approvers get a card showing how many claims are waiting for them.
