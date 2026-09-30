---
date: "2026-09-30"
title: "Fix mobile app sessions dropping after login expires"
repo: api-wms
product:
  - backend
additions: 97
deletions: 4
---

Fixed a problem that blocked WMS mobile users partway through a shift: after a login token expired, the app's renewal request came back incomplete, so it could not recover and users were stuck.

- **Session renewal works again:** the mobile app now receives its renewed access and refresh credentials in the standard response format, so it can quietly extend a session instead of failing until the user logs in again.
- **Web login untouched:** browser-based logins, token lifetimes, and security limits behave exactly as before.
- **Retries are safe:** when the app retries a renewal after a weak connection, the server returns the same answer instead of issuing confusing duplicates.
