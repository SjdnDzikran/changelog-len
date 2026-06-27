---
date: "2026-06-27"
title: "Preview and auto-generate REQ numbers for approval forms"
repo: len-approval-api
product:
  - backend
additions: 47
deletions: 3
---

- **REQ prefix:** Transaction numbers now use the `REQ` prefix (e.g. REQ00069), replacing the previous `ETR` prefix for clearer identification of request numbers
- **Number preview:** The system allocates and returns the next number in sequence before a form is saved, so the create forms can display it in advance
- **Custom number support:** Users can override the auto-generated number with their own value, and the system validates that custom numbers are unique
