---
date: "2026-10-05"
title: "Expired sessions now sign users out cleanly instead of throwing errors"
repo: erp-len-ui
product:
  - web
additions: 243
deletions: 7
---

Users whose login has expired are now taken back to the sign-in page quietly, instead of seeing unhandled error screens.

- **Clean redirect to login:** When a session expires mid-use, the app cancels the pending action and sends the user to login without an error popup
- **No more duplicate refresh storms:** Several tabs or requests expiring at the same moment now trigger a single refresh attempt, and a failed refresh clears the stale session completely so the app lands on login in a clean state
- **Real failures stay visible:** Genuine server problems are no longer mistaken for an expired session, so users are not signed out when the server itself is briefly unavailable
