---
date: "2026-08-04"
title: "Fix false blocking of tested item transfers out of On-Test bins"
repo: api-wms
product:
  - backend
additions: 42
deletions: 11
---

- **Serial-level validation:** Tested items can now be moved out of On-Test bins without being falsely rejected. The guard now checks each serial's individual test result, instead of the parent batch status which could be stale after re-test or re-upload flows.
