---
date: "2026-07-15"
title: "Send notification emails in the background for faster responses"
repo: erp-len-api
product:
  - backend
additions: 31
deletions: 7
---

Dispatch confirmations, delivery status updates, and inventory document emails are now sent asynchronously, so users no longer wait for the email server before getting a response.

- **Background email delivery:** Emails triggered by manifest dispatch, shipment delivery status changes, and inventory document actions are placed in a background queue instead of blocking the user's request while the SMTP server responds
- **Snappier operations:** Users submitting a dispatch or updating a delivery status get an immediate confirmation, making these frequent operations feel noticeably faster during peak hours
