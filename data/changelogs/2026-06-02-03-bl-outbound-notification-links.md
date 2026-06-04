---
date: "2026-06-02"
title: "Fix BL Outbound approval notifications to open form page in browser"
repo: len-approval-api
additions: 6
deletions: 6
product:
  - backend
---

BL Outbound approval notifications now direct approvers to the form view page in the web app, matching the behavior of BL Inbound notifications. Previously, the links pointed to a direct API approval token, which skipped the UI entirely.

- **Email and WhatsApp links updated:** Both email and WhatsApp notification links now open the form view page in the browser, so approvers can review the full form context before making a decision
