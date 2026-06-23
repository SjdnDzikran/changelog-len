---
date: "2026-06-23"
title: "Grant CJ approver team access to BL stock report"
repo: len-approval-api
product:
  - backend
  - web
additions: 23
deletions: 11
---

Members of the CJ approver team can now view the BL Stock Report page, including both the report data and the sidebar menu entry.

- **Broader report access:** Two new user groups (cj approver and cj_approver) have been added to the allowed list for the BL stock report, matching the same permission model used by the logistics and warehouse teams
- **Visible in the sidebar:** The BL Stock Report menu item now appears in the navigation sidebar for CJ approver users, not just as a backend permission check
- **Consistent across API and frontend:** Both the backend access check and the frontend route guard were updated together, so the experience is seamless
