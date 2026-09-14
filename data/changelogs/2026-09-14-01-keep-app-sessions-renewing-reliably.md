---
date: "2026-09-14"
title: "Keep app sessions renewing reliably"
repo: api-wms
product:
  - backend
additions: 8
deletions: 2
---

Session renewal for warehouse app users is now more dependable when something goes wrong.

- **Clear sign-in prompt on renewal failure:** If a session cannot be renewed due to an unexpected problem, users now get a straightforward "please sign in again" response instead of a silent failure or server error
- **Safe handling of incomplete requests:** Renewal requests that arrive without the needed session data are rejected cleanly with a clear message, instead of causing a server-side crash
- **Faster support diagnosis:** Unexpected renewal problems are now recorded together with the requesting device's address, so recurring issues from a specific site or device can be traced quickly
