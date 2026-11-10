---
date: "2026-11-10"
title: "Fixed password form error on the profile page"
repo: ui-wms
product:
  - web
additions: 112
deletions: 11
---

Follow-up fix to the profile redesign: the password change form now loads correctly for all accounts.

- **Fixed false error:** Some accounts hit a "failed to load account" message even though everything loaded fine, which hid the password form entirely. The form now appears reliably for username-based accounts
- **Extra safety checks:** The page verifies the returned account matches the signed-in user before enabling password changes, and blocks updates while loading, during errors, and while a save is in progress
