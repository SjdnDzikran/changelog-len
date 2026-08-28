---
date: "2026-08-28"
title: "Add secure mobile login with automatic session renewal"
repo: api-wms
product:
  - backend
additions: 1920
deletions: 27
---

- **Short-lived mobile sessions:** Mobile logins now receive a 15-minute access token instead of the 8-hour token used on the web. This limits the window of exposure if a token is ever intercepted.
- **Automatic session renewal:** Mobile apps can silently renew their session in the background using a rotating refresh token, so operators stay logged in as long as they are actively using the app without re-entering their password.
- **Stolen token detection:** If a refresh token is used a second time, the system recognizes the reuse, invalidates every token in that session family, and forces a fresh login. This protects against token theft.
- **Immediate session revocation:** Changing a password or tapping logout revokes all active sessions for that user on mobile, ensuring no stale access remains.
- **Fully backward-compatible:** Web users, the RFID system, and all existing integrations continue to work exactly as before with 8-hour tokens and no changes to the login flow.
