---
date: "2026-10-18"
title: "Record agreed CJ prices through a Nego Harga approval step"
repo: len-approval-api
product:
  - backend
additions: 8190
deletions: 31
---

BL Outbound approvals now include a dedicated "Nego Harga" step, so the price agreed with CJ by phone or WhatsApp is written down and visible to the final approver instead of living only in chat.

- **Price as a workflow step:** Forms can stop at a Nego Harga step where a designated negotiator records the agreed total with an optional note, or accepts the CJ reference price when every route has a tariff
- **Reference price on submit:** Each form saves the CJ price-list quote for its routes at submission, so the agreed price is always compared against the reference it was negotiated from
- **Approve over WhatsApp, no login:** Negotiators with a phone number receive a personal, secure link that opens a simple page to record the price; links stop working once the form moves on or the person is deactivated
- **Final approver sees the deal:** Approval notifications and history now show the agreed price, the CJ reference, the difference, and who agreed it
- **Approval-only record:** The agreed price stays in the approval system and is not pushed into ERP or TMS
