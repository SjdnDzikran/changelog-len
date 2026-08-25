---
date: "2026-08-25"
title: "Show exact notification recipients in every submit and approval dialog"
repo: len-approval-ui
product:
  - web
additions: 820
deletions: 22
---

Every form submission and approval dialog now displays a live preview of who will receive automatic notifications, so users always know exactly who gets informed before they confirm an action.

- **Recipient preview banner:** A new info panel appears inside submit, approve, reject, and revision dialogs showing each recipient's name, email address or WhatsApp number, and approval group, split by delivery channel
- **Covers all form types:** The preview is integrated into BL Form, BL Outbound (create and edit), MRF Inbound, MRN Request, Pickup Delivery, and Pickup Domestic submission flows, as well as all approval actions on the Need Approval page
- **Actions wait for the preview:** Submit and approval buttons stay disabled until the recipient list has finished loading, preventing accidental submissions without visibility into who gets notified
- **Channel-specific display:** Only the delivery channels that actually apply to the selected form and action are shown, so users see email recipients for email-only forms and WhatsApp recipients for WhatsApp-only forms
