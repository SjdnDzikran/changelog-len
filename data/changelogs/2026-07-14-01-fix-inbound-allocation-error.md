---
date: "2026-07-14"
title: "Fix inbound allocation confirmation error"
repo: api-wms
product:
  - backend
additions: 8
deletions: 3
---

- **Inbound allocation confirmation no longer fails:** Confirming an inbound allocation that contained certain material categories previously triggered a database error, blocking the user from completing the process. The two missing material classification fields have been added to the underlying query, so allocation confirmations now complete successfully for all material types.
