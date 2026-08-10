---
date: "2026-08-10"
title: "Add login rate limiting and progressive account lockout"
repo: api-wms
product:
  - backend
additions: 1206
deletions: 56
---

Login attempts to the WMS system are now protected against automated attacks. Previously, the captcha-free mobile login path had no attempt limits, making it the weaker entry point for credential stuffing.

- **Rate limiting per source address:** After 20 login attempts from the same address in one minute, further attempts are blocked with a time indicator until the window resets
- **Rate limiting per username:** After 5 failed attempts with the same username in one minute, that account is temporarily throttled regardless of which address the requests come from
- **Progressive lockout:** Consecutive failed logins trigger escalating lockouts: 15 minutes after 5 failures, 1 hour after 8, 4 hours after 12, and 24 hours after 15
- **Protection applies to both login paths:** The web login (with captcha) and the mobile login are guarded by the same rate limit and lockout rules
- **Swagger documentation hidden in production:** The API documentation page is no longer publicly accessible on the live server
- **Origin allowlist for cross-origin requests:** Only authorized domains can call the API with credentials, preventing unauthorized websites from making requests on behalf of signed-in users
