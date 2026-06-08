---
date: "2026-06-08"
title: "Fix and improve the delivery acknowledgment workflow"
repo: len-approval-api
product:
  - backend
  - web
additions: 139
deletions: 36
---

- **Reliable submissions:** Acknowledging deliveries no longer triggers concurrency errors. The system now waits for the save to complete before building the response, eliminating a race condition that could cause ACK submissions to fail
- **Loading feedback:** The Save button in the ACK dialog now shows a spinner and disables both Save and Cancel while the request is in progress, preventing accidental double-submission
- **WhatsApp clarity:** ACK notifications sent via WhatsApp now include a bold "Acknowledgement Pengiriman (ACK)" header, making it immediately clear the message is an acknowledgement rather than a generic delivery update
- **Dialog redesign:** The acknowledge delivery dialog has been refreshed with cleaner spacing, full-width form fields, and responsive sizing for smaller screens
