---
date: "2026-10-22"
title: "Configure CJ price authority levels in Form Configuration"
repo: len-approval-ui
product:
  - web
additions: 489
deletions: 24
---

Admins can now define and manage the CJ price authority matrix directly from the BL Outbound Form Configuration page.

- **Editable authority matrix:** Set up to 10 price tiers, each with a name, an upper amount limit, a negotiation group, and a final approval group. The last tier is unlimited by design, and a routing preview shows exactly which tier a given amount lands in (e.g. Rp25 juta lands in Manager).
- **Safe activation:** The policy starts disabled and cannot be switched on until real CJ groups are assigned to every tier and to the estimate-review group. Forms already in progress keep the policy version they were submitted under.
- **Authority visible in Nego Harga:** The price panel now shows the assigned authority level, the routing amount, the required groups, and any hold reason, so users always know who needs to act next.
- **Estimate review workflow:** Authorized reviewers can submit a reviewed estimate with a mandatory reason directly from the price panel when the CJ reference is incomplete.
- **Guided final approval:** The approval dialog confirms the reviewer is authorized for the price before enabling the button, and escalation notices ("Kewenangan dinaikkan") make it clear when a proposal moved to a higher tier.
