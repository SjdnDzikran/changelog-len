---
date: "2026-10-17"
title: "Add CJ pricing admin pages and clearer per-route prices on BL Outbound"
repo: len-approval-ui
product:
  - web
additions: 4974
deletions: 259
---

A new CJ pricing section gives admins full control over rates, and BL Outbound forms now show one clear price per route.

- **Price list import page:** Choose CJ's workbook, review a full preview with tabs for the changes, routes priced twice, rates kept but absent from the file, and any skipped rows, then import with a single confirmation.
- **Rate management pages:** New pages to search, add, edit, activate and deactivate per-kg and charter rates, plus settings for the pricing modes CJ uses, all filterable and paginated.
- **Missing-rate checklist:** Lists BL Outbound routes without a CJ price, most used first, each with the reason and a direct link to the page that fixes it.
- **One quote per route:** The "Hitung Harga Referensi CJ" button now prices the whole form in a single step, one line per route with its billed weight, rate, packing costs and total. Each item row shows which route it belongs to.
- **Fairer, self-checking totals:** The minimum weight is charged once per route as ERP does instead of per item, unpriced routes are never silently excluded from the total, and the panel asks for a re-quote whenever form data changes.
