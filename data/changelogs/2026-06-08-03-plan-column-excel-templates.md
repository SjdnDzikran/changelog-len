---
date: "2026-06-08"
title: "Add Plan column to Origin/Moda Excel upload templates"
repo: len-approval-api
product:
  - backend
additions: 19
deletions: 1
---

- **Plan column included:** The Origin/Moda Excel templates for BL Inbound and Pickup Domestic Delivery now include the Plan column, pre-filled with existing values on download
- **Non-destructive upload:** When uploading the template, the Plan column updates existing records only if a value is provided, preserving any manually entered plans already saved
