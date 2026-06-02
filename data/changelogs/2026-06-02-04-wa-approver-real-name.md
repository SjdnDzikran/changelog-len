---
date: "2026-06-02"
title: "Show approver real name in WhatsApp approval notifications"
repo: len-approval-api
product:
  - backend
---

WhatsApp approval notifications for both BL Inbound and BL Outbound now display the recipient's actual full name instead of the generic word "Approver", making messages more personal and easier to identify.

- **Personalized greetings:** The {ApproverName} placeholder in notification templates now resolves to the approver's full name (falling back to username if no full name is set), so each person receiving a notification sees their own name in the message
