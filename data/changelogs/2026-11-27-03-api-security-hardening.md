---
date: "2026-11-27"
title: "Protect accounts and public tracking from abuse"
repo: erp-len-api
product:
  - backend
additions: 686
deletions: 11
---

A round of security hardening for the TMS API, covering login, public shipment tracking, and data listing.

- **Account lockout:** after 5 failed login attempts an account is locked for 15 minutes, with a clear Indonesian message that states how long is left, so password guessing no longer works even with the correct password
- **Rate limiting on open endpoints:** login, password reset, self-registration, and the public AWB tracking pages are now capped per IP address (20 login attempts per minute, 60 tracking requests per minute); over the limit users get a clear "try again in N seconds" message instead of an error
- **Faster, lighter list pages:** dashboard summary cards for Manifest and DRS now get their totals (drafts, on progress, dispatched, completed, cancelled, and AWB counts) computed on the server instead of pulling thousands of rows to count in the browser
- **Page size cap:** list requests can no longer ask for unlimited rows at once, protecting the system from slowdowns caused by oversized page requests
- **Honest health reporting:** the system's health check now genuinely verifies the database connection instead of always reporting "healthy", so monitoring can actually alert when the database is unreachable
