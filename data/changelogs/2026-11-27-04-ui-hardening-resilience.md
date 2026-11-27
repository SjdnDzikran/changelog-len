---
date: "2026-11-27"
title: "Smoother forms, printing, and error handling across the TMS web app"
repo: erp-len-ui
product:
  - web
additions: 645
deletions: 302
---

A usability and resilience pass over the TMS web application, focused on preventing duplicate work and giving honest feedback.

- **No more double saves:** all six inventory document forms (Inbound, Outbound, Transfer) now disable their buttons while saving and show "Menyimpan...", so clicking twice can no longer create duplicate documents, and the save button can no longer get stuck in a loading state
- **Printing that always works:** when the browser blocks the popup used for printing AWBs, DRS, Manifests, or invoices, the document is automatically downloaded instead, and the user is told so; no more silent failures at the 13 print entry points
- **Live browser tab titles:** every page now names itself in the browser tab (e.g. "Tambah Manifest · OMS LEN"), so users with many tabs open can find the right one at a glance
- **Dashboard warnings instead of blanks:** if one part of the Network dashboard fails to load, the page shows a warning banner listing exactly which data is missing with a retry button, instead of silently showing empty charts
- **Clearer validation:** warehouse and delivery-date validation messages in the inventory forms are now in Indonesian, and failed lookups on the Users and partner access pages warn the user instead of quietly leaving dropdowns empty
