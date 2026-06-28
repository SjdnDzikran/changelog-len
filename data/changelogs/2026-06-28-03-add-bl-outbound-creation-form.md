---
date: "2026-06-28"
title: "Add BL Outbound creation form with stock picker"
repo: len-approval-ui
product:
  - web
additions: 1363
deletions: 15
---

A dedicated creation page for BL Outbound requests is now available directly from the form menu, replacing the need to use an external tool or spreadsheet to initiate outbound stock movements.

- **Two-step creation flow:** Users first select an approval workflow from the available flow lists, then fill in the outbound details (reference number, date, BL number, notes) in a clean two-column layout with a general information panel on the left and selected items on the right
- **Stock picker dialog:** A searchable inventory browser lets users filter by AWB or part number, check available stock, and attach items to the outbound form with a specified issue quantity, all within a popup window
- **Per-item detail fields:** Each attached stock row supports entering the transport mode (darat, laut, udara), colly dimensions (weight, length, width, height), and packing cost, so all outbound details are captured in one place
- **Save as draft or submit:** Forms can be saved as drafts for later completion, or submitted directly to the chosen approval workflow with email and WhatsApp recipient lists selected at submission time
