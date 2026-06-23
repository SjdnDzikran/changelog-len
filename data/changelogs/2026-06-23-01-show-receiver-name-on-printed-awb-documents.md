---
date: "2026-06-23"
title: "Show receiver name on printed AWB documents"
repo: erp-len-api
product:
  - backend
additions: 38
deletions: 2
---

Printed AWB documents now display the name of the person who received the package, drawn from the latest accepted proof-of-delivery record.

- **"Diterima oleh" section:** When a shipment has been confirmed as received (accepted POD), the receiver's name appears in the right portion of the document's signature area, making it clear who accepted the delivery
- **Automatic lookup:** The system checks POD records for all AWBs being printed in a single batch, so the receiver info is populated without any extra steps from the user
- **Clean fallback:** If no accepted POD exists for a given AWB, the section is simply left blank, keeping the document layout tidy
