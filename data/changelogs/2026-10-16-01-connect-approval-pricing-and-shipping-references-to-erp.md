---
date: "2026-10-16"
title: "Connect Approval pricing and shipping references to ERP"
repo: len-approval-api
product:
  - backend
additions: 8455
deletions: 250
---

Approval now speaks the same language as the CJ price list and ERP for transport modes and places, so shipments can be priced and booked without staff translating names by hand.

- **Moda reference:** Every transport mode on a form can now be linked to its ERP counterpart, with its own volume divisor, CJ tariff basis and ERP delivery service. The old alias list is replaced by this fuller reference.
- **Origin & destination reference:** Free-text places on forms ("RITRA-KUALA KENCANA", "Sidoarjo", "Cakung") are mapped to the city the CJ price list actually prices them as, and to the ERP branch, sender and recipient details an ERP AWB requires. Agreed mappings like Sidoarjo priced as Surabaya and Cakung as Jakarta are seeded in.
- **Safe ERP sync:** Administrators can preview exactly what a sync from ERP will change before anything is written, and the apply is refused if the data has moved in between. The sync only adds, links and updates; it never deletes, and hand-picked divisors are preserved.
- **Safer new modes:** A transport mode ERP adds that the CJ price list doesn't recognise is flagged "needs review" instead of being priced by guesswork; pricing politely refuses it until an administrator decides.
- **Unmapped values report:** The system can list every origin, destination and moda value already appearing on forms that nothing maps yet, with per-form usage counts, so administrators know exactly which gaps matter most.
