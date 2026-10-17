---
date: "2026-10-17"
title: "Import the CJ price list as CJ sends it and quote per route"
repo: len-approval-api
product:
  - backend
additions: 3875
deletions: 1098
---

The Approval system can now read CJ's price list workbook directly and price a whole form per route the way ERP prices an AWB.

- **Direct Excel import:** Admins upload CJ's own price list file with no export or conversion step. A preview reports every rate it would add or change before anything is written, and the import is refused if the file or stored rates changed after the preview was reviewed.
- **Safe by design:** The import only adds and updates rates, never deletes them. Routes priced more than once in the workbook are flagged, with the most current sheet winning, and existing rates the file does not mention are kept untouched.
- **Per-route quoting:** A new quote prices a form's items grouped by route: items sharing one AWB number, route and transport mode are billed together, and each route's minimum weight charge is applied once instead of per item. This fixes quotes that came out roughly a third too high on forms with many light items.
- **Clear statuses:** Each route group is priced, marked as waiting for missing form data, or flagged as having no CJ rate, and totals state how many routes they cover.
- **Missing-rate report:** A new report lists shipment routes that no CJ price covers, most used first, so gaps can be closed before users encounter them.
