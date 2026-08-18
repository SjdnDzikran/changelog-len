---
date: "2026-08-18"
title: "Grant LEN AWB Team access to BL Outbound forms"
repo: len-approval-api
product:
  - backend
additions: 141
deletions: 2
---

**New group permission:** The LEN AWB Team user group can now view and submit BL Outbound forms. Previously this group was locked out, forcing requests to go through other teams.

- **Form visibility aligned:** The BL Outbound form now appears in the sidebar for all members of the LEN AWB Team group, matching the form's configured flow initiator
- **Submit and query access:** Members can create new BL Outbound requests and query existing BL inventory, not just view the form
- **Safe rollout:** The permission is applied via a database migration with idempotent guards, so it deploys cleanly even if the group or form does not yet exist in a given environment
