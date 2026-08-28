---
date: "2026-08-28"
title: "Secure inventory and inbound item data behind authentication"
repo: api-wms
product:
  - backend
additions: 244
deletions: 2
---

- **Closed auth gap on inventory details:** The inventory tested detail pages could be accessed without logging in, because the controller was missing an authentication requirement. Anyone with the URL could view the data.
- **Same fix applied to inbound items:** While investigating the inventory issue, the same gap was found on the basic inbound items controller. Read, monitoring, lookup, and export actions were all reachable without authentication.
- **Automated guard against recurrence:** A new test now scans every controller in the system and fails the build if any new controller ships without proper authentication, preventing this type of exposure from happening again.
