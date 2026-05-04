---
date: "2026-05-04"
title: "Show clear error when username or email already exists"
repo: erp-len-api
product:
  - backend
---

- Creating a user with a username or email that is already registered now returns a specific "already in use" message instead of a generic server error.
- This lets operators know exactly which field needs to be changed, reducing back-and-forth when setting up new accounts.
