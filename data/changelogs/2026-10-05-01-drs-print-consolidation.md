---
date: "2026-10-05"
title: "Smarter delivery printouts: fewer pages, complete contact details, cleaner forms"
repo: erp-len-api
product:
  - backend
additions: 419
deletions: 72
---

Delivery documents now print as a compact set of pages that reflect who is actually on the truck, with the detail block finished properly.

- **Grouping that matches real deliveries:** Print pages are now combined when shipments come from the same origin branch and go to the same full delivery address, instead of only matching on route. Shipments with different senders or contacts on that stop are all preserved on the shared page, so nobody's details silently disappear from the paperwork, and unclear addresses still get their own page rather than being wrongly merged
- **Honest origin labels:** The origin shown on each print page now comes only from the shipment's recorded origin branch. Sender addresses or delivery villages are never shown as the origin, so drivers and receiving branches always see the true pickup branch
- **Complete detail block:** The Koli, Kilo, Volume, Quantity and Biaya Packing section prints as a tidy aligned list. Empty fields get a fill-in line instead of underscores, large numbers scale to fit instead of overflowing, and Biaya Packing sits with the other totals
- **AWB numbers on the DRS sheet:** The DRS printout lists each shipment by its AWB number again, matching how staff reference shipments on paper
