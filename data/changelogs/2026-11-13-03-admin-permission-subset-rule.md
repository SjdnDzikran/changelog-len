---
date: "2026-11-13"
title: "Prevent admins from escalating privileges beyond their own access"
repo: len-attendance
product:
  - backend
additions: 30
deletions: 10
---

Admin accounts can no longer grant permissions they do not themselves hold, closing a privilege-escalation hole in admin and role management.

- **No self-promotion:** An admin cannot create or edit another admin with a role more powerful than their own, cannot assign themselves a stronger role, and cannot widen a role's permissions beyond what they hold
- **No account takeover:** An admin with limited permissions cannot deactivate or reset the password of an admin whose access exceeds their own, protecting superadmin accounts
- **Secure password resets:** When an admin resets another admin's password, that admin is signed out of all their sessions, so any potentially compromised session ends immediately
