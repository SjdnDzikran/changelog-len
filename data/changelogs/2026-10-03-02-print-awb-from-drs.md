---
date: "2026-10-03"
title: "Print the AWB form straight from a DRS, with PO numbers on the DRS print"
repo: erp-len-ui
product:
  - web
additions: 685
deletions: 3
---

A new way to print air waybill forms for a whole delivery, plus more useful numbers on the existing DRS printout.

- **New "Print AWB" button:** Available on both the Manage DRS list and the DRS detail page, it prints full-page AWB forms for every shipment on the delivery without opening each shipment individually
- **One page per route:** Shipments sharing the same origin and destination merge onto a single AWB form carrying the DRS number, with quantities, weights and volumes summed and repeated details printed once, so a ten-shipment delivery does not produce ten separate forms
- **PO numbers on the DRS print:** The DRS printout now shows each shipment's PO (reference) number where the AWB number used to be, matching how the paper documents are referenced by customers
