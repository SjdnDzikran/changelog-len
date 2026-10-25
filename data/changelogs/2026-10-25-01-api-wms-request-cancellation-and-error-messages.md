---
date: "2026-10-25"
title: "Stop false server-error alarms and explain sign-in failures in WMS"
repo: api-wms
product:
  - backend
additions: 476
deletions: 24
---

The WMS backend no longer treats routine events as server failures, and error responses now explain themselves instead of showing a generic message.

- **Fewer false alarms for the ops team:** When a user closes a page or navigates away while data is still loading, the system now records it as a normal cancelled request instead of logging it as a server error, so real outages stand out in monitoring instead of being buried in noise
- **Clearer sign-in and permission messages:** Expired sessions now say "Authentication is required. Please sign in again." and blocked actions say "You do not have permission to access this resource." instead of the generic support message
- **Real failures stay visible:** Genuine database or server problems are still reported as errors even if the user's connection drops at the same moment, so nothing important gets hidden by the new cancellation handling
- **Slow requests still flagged:** Any request taking more than 3 seconds is recorded as a warning, keeping the existing performance signal intact
