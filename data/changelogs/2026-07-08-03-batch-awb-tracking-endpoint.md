---
date: "2026-07-08"
title: "Enable tracking multiple shipments in a single request"
repo: erp-len-api
product:
  - backend
additions: 95
deletions: 2
---

The public tracking API now supports looking up multiple AWB numbers at once, returning each result together with its full delivery history. This powers the new multi-shipment search on the company profile website.

- **Batch tracking endpoint:** Accepts up to 10 AWB numbers in a single request and returns each one with its shipment details and proof-of-delivery timeline, reducing the number of round-trips needed
- **Smart input handling:** Numbers are automatically trimmed of whitespace, deduplicated regardless of case, and capped at 10, so the calling website does not need extra validation logic
- **Clear unmatched handling:** AWB numbers that don't match any shipment are returned with a "not found" flag rather than an error, allowing the website to inform visitors which numbers could not be found
