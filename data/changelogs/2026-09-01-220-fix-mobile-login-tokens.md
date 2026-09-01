---
date: "2026-09-01"
title: "Fix mobile login failing to return access and refresh tokens"
repo: api-wms
product:
  - backend
additions: 150
deletions: 3
---

Mobile users could not complete login because the response layer was stripping the token values from the login response. The mobile app received a successful status but no usable tokens to authenticate subsequent requests.

- **Tokens now wrapped correctly:** The access token and refresh token are returned inside the standard response format, so the mobile app reads both values reliably on every login
- **No impact on web:** Web and unidentified clients continue to receive the existing eight-hour session token without any change in behavior
