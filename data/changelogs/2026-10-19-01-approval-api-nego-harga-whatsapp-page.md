---
date: "2026-10-19"
title: "Make the WhatsApp price negotiation page easier to use on phones"
repo: len-approval-api
product:
  - web
additions: 556
deletions: 55
---

The page that approvers open from WhatsApp to record the CJ price they negotiated has been redesigned for mobile use.

- **Mobile-first layout:** The page now reads as a clean card on a phone screen, with full-width buttons, larger price input, and clear section separation
- **Route tariff breakdown:** Each route row now shows how its price was built: charter rate or per-kg rate, any wooden packing surcharge, and a "min" badge when the route minimum was applied
- **Coverage at a glance:** A badge on the reference card shows whether all routes have CJ tariffs or only some of them do
- **One-tap reference price:** A quick-fill chip inserts the full CJ reference price into the agreement field, no typing needed
- **Live difference preview:** While typing the agreed price, the page instantly shows whether it saves money or goes over the CJ reference, in Rupiah and percent

The general approval and confirmation pages sent by link also get a cleaner look, a success/failure badge, and now redirect back to the production approval site correctly.
