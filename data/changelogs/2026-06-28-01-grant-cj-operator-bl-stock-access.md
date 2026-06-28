---
date: "2026-06-28"
title: "Grant CJ Operator users access to BL Stock Report"
repo: len-approval-api
product:
  - backend
  - web
additions: 31
deletions: 19
---

CJ Operator users can now open and view the BL Stock Report, which previously returned a forbidden error when they tried to access it.

- **Group access extended:** The `cj operator` and `cj_operator` groups are now recognized by both the server-side access check and the frontend menu guard, so CJ Operator users see the report in the sidebar and can load the page without being blocked
- **WS-Security login fix:** Users who sign in through WS-Security (rather than the standard login flow) now have their group memberships correctly read by the system, because the server now checks both the standard `group` claim type and the WS-Security specific claim type
- **Both layers aligned:** The access control change was applied consistently on the backend (authorization check and configuration) and the frontend (auth guard and sidebar visibility), so the experience is seamless from login to report view
