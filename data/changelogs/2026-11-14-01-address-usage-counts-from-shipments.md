---
date: "2026-11-14"
title: "Count address usage from real shipments, not clicks"
repo: erp-len-api
product:
  - backend
additions: 585
deletions: 88
---

Address usage counts in the customer address book previously went up every time someone clicked an address in the AWB or booking forms, even if the shipment was never actually saved. They now reflect only real, saved shipments, so the numbers finally mean something.

- **Counts real shipments only:** Each saved airway bill and booking counts once. Cancelled and deleted shipments are excluded, and reserved ("BOOKED") numbers don't count until they become actual shipments. Merely picking an address in a form no longer inflates the number.
- **Smart matching to the current address book:** A shipment counts toward an address when the customer, destination village, recipient name and full street address match. Duplicate contacts at the same address are told apart by phone number, and genuinely ambiguous shipments aren't credited to any entry rather than guessed.
- **Dates reflect actual use:** "Last used" now shows when the matching shipment was created. Editing an unrelated field doesn't refresh it, and editing a recipient's identity details correctly moves the usage to the updated address entry.
- **Safe transition for older clients:** The old click-tracking endpoint still exists so previous app versions keep working, but it no longer changes any numbers. No database cleanup was needed: inaccurate stored counters are simply ignored from now on.
- **Still fast at scale:** The counting happens inside the database, so sorting by usage and paging through the address list stay responsive even with large shipment volumes.
