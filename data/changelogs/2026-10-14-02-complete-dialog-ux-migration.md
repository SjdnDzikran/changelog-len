---
date: "2026-10-14"
title: "Complete the redesign of every popup dialog"
repo: ui-wms
product:
  - web
additions: 1586
deletions: 1422
---

The final batch of popup dialogs now follows the modernized layout, covering forms, inventory, uploads, and confirmations across the warehouse app.

- **One consistent dialog layout:** Every remaining dialog now shares the same design as the previously migrated ones: a fixed header with a large, easy-to-tap close button, content that scrolls within a clearly bounded frame, and Save/Delete/Cancel actions always visible at the bottom instead of being cut off or hidden behind scrolling
- **Shipment details as readable facts:** The shipment detail dialog now presents fields like Subject, Requested By, dates, PIC, and Address as cleanly labelled facts instead of a cramped wall of input boxes, with the status history table below and its page controls always visible in the footer
- **Fixes while migrating:** Corrected the shipment status dialog so it shows which shipment you are updating, and made table rows wrap long values instead of breaking the layout; delete and cancel confirmations now follow the same tidy layout too
- **Themed uploads and evidence:** File pickers, warning notices, and delivery photo/PDF evidence controls now match the Light and Dark themes and remain easy to use on touch screens
- **Verified at scale:** All 262 production dialogs were automatically re-rendered and checked at desktop and phone sizes in both themes, with form validation, permissions, and keyboard behavior preserved
