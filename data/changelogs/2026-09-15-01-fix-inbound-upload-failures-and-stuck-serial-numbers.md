---
date: "2026-09-15"
title: "Fix inbound upload failures and stuck serial numbers"
repo: api-wms
product:
  - backend
additions: 346
deletions: 352
---

Inbound Excel uploads could fail in ways that left the system in a bad state: the page reported an internal error and serial numbers claimed by the failed upload stayed reserved, blocking retry attempts until someone cleaned up manually.

- **Clean failure recovery:** When an upload fails partway, the system now undoes the partial data completely and reports the failure properly instead of crashing midway
- **Serial numbers released automatically:** Serial numbers claimed by a failed upload are freed again right away, so operators can retry immediately without waiting for manual cleanup
- **Blank optional columns tolerated:** Upload files that leave Condition, Completeness, or Power On Test empty for some serial numbers no longer cause the whole upload to fail
