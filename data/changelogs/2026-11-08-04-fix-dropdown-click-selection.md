---
date: "2026-11-08"
title: "Fix dropdown choices that did not register when clicked (version 2.0.7)"
repo: erp-len-ui
product:
  - web
additions: 152
deletions: 8
---

A follow-up to the dropdown fixes: since the 1.35.0 redesign, clicking a choice in the searchable dropdowns often selected nothing, making the customer field on AWB and Booking forms and the saved-address picker effectively unusable.

- **Clicks now register:** Pressing a choice no longer closes the list before the click arrives, so selections save correctly on the customer, saved-address, and other searchable fields.
- **Saved-address picker hardened:** The address picker also no longer drops a choice that is held down slightly longer than an instant, and its list closes immediately when you leave the field instead of after an artificial delay.
- **Regression tests added:** New automated checks verify that pressing a choice keeps the list open, selects the option, and closes the list only when appropriate.
