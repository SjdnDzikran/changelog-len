---
date: "2026-06-24"
title: "Prevent conflicting AWB data by enforcing one-Moda-one-Origin rule"
repo: len-approval-api
product:
  - backend
additions: 57
deletions: 1
---

- **Data integrity check:** Every AWB number must now map to exactly one transport mode and one origin, preventing inconsistent entries that would break downstream processing in TMS
- **Applies to all entry paths:** The validation runs on manual saves and both Excel upload flows, so no save method can bypass the check
- **Clear error messages:** When a conflict is found, the system reports exactly which AWB has mismatched Moda or Origin values
