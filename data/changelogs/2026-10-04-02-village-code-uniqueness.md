---
date: "2026-10-04"
title: "Allow villages with the same name in different districts"
repo: erp-len-api
product:
  - backend
additions: 8
deletions: 4
---

Village master data no longer blocks legitimate entries just because another village shares the same name.

- **Duplicate names allowed:** Many villages across Indonesia share a name, so creating or editing a village now only rejects a duplicate when its official code already exists, not when the name matches another village.
- **Clearer error message:** When a duplicate code is rejected, the message now names only the code, so admins know exactly what collided.
