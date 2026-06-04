---
date: "2026-05-21"
title: "Overhaul invoice creation and print layout with manual numbering, configurable tax rate, and redesigned PDF"
repo: erp-len-api
product:
  - backend
  - web
deletions: 64
additions: 210
---

- **Manual invoice numbering:** Admins can type a custom invoice number or leave the field blank for auto-generation. Duplicate numbers are rejected automatically so no two invoices ever share the same reference.
- **Configurable PPN rate:** Invoice drafts now offer a dropdown to choose between 1.1% and 11% tax rates, with the PPN amount calculated automatically from the subtotal after discount.
- **Packing fee as a separate cost:** Each AWB line on an invoice now shows a dedicated "Harga Packing" column, so packing costs are tracked independently from freight and other charges in both the draft screen and the printed output.
- **Landscape PDF with richer shipment data:** Printed invoices switch to landscape orientation with wider columns, and now include origin city, destination city, DO/Ref number, received date, and receiver name for every shipment line.
- **Signature city from company settings:** The city shown on the signature block is now configurable from the company settings page under "Kota Tanda Tangan" instead of being hardcoded to Jakarta.
- **Blank payment terms preserved:** When an invoice has no payment term, the printed PDF shows a dash instead of a default filler sentence.
