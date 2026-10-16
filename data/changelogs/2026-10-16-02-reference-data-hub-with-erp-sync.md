---
date: "2026-10-16"
title: "New Reference Data hub for shipping, moda and ERP syncing"
repo: len-approval-ui
product:
  - web
additions: 3381
deletions: 86
---

Reference Data moves out of Form Configuration into its own admin menu, with two brand-new pages that keep shipping references and ERP in step.

- **Dedicated Reference Data menu:** A new admin-only "Reference Data" section in the sidebar, grouped into "Shipping & ERP" and "Warehouse & material", so each reference lives in a sensible place instead of an ever-growing tab list. Old bookmarks to the previous location redirect automatically.
- **Origin & destination page:** Each real place gets one row showing the form spellings that mean it, the CJ price-list city it's priced as, and its ERP sender and recipient details. Places with no ERP link yet are flagged at a glance.
- **Moda page:** Every transport mode shows its ERP link, its volume divisor and where that divisor comes from, whether it matches ERP, and its CJ tariff basis. Modes waiting for a decision are listed first.
- **Sync from ERP with a preview:** Both pages can sync from ERP through a dialog that shows every change and warning before anything is written, and never deletes anything. Changes that would alter CJ prices are highlighted.
- **Unmapped values panel:** Each page lists form values nothing maps yet, sorted by how often they're used, and one click starts a new entry with that value pre-filled.
