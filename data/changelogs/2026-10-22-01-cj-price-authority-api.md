---
date: "2026-10-22"
title: "CJ price authority tiers and negotiated totals in BL Outbound approval"
repo: len-approval-api
product:
  - backend
additions: 845
deletions: 47
---

Approval forms for BL Outbound now enforce who may negotiate and approve CJ prices, based on how much money is at stake.

- **Authority tiers by amount:** Price agreements are routed by value: default bands are under Rp10 juta, Rp10-50 juta, and above Rp50 juta. Each band has its own negotiation group and final approval group, so a supervisor can settle small prices while large amounts require manager or director sign-off.
- **Automatic escalation:** If a negotiator proposes a price above their band's limit, the proposal is not accepted. The form stays at the negotiation step and is forwarded to the higher authority level, which must negotiate and agree afresh.
- **Four-eyes protection:** The person who recorded the agreed price can never also give the final approval for it. Final approval requires a different, eligible member of the approval group.
- **Reviewed estimates for incomplete quotes:** When the CJ reference price doesn't cover every route, a designated estimate-review group must review a total (with a mandatory reason) before the form can move, instead of the form silently stalling.
- **Agreed totals flow to ERP:** After final approval, the agreed freight-plus-packing total is allocated exactly across all AWBs sent to ERP, while any price edits made by ERP operators are preserved and reported as conflicts.
- **Tamper protection:** Old approval and WhatsApp links stop working once shipment details change or the form is resubmitted, and price-affecting edits restart the negotiation automatically.
