---
date: "2026-11-26"
title: "One login, two roles: dual-account users can switch without signing in twice"
repo: len-attendance
product:
  - backend
  - web
additions: 2233
deletions: 261
---

Staff whose single email opens both an admin account and an employee account no longer need to log out and back in to move between the two apps.

- **Choose your account at sign-in:** When a password matches both the admin and employee account, the login asks which one to open, with a clear "Continue as" choice between the admin dashboard and the employee app. The account chosen last on that device is remembered, marked "Last used", and offered first next time.
- **Switch instantly between apps:** A session that proved both accounts gains a "Switch to employee app" or "Switch to admin dashboard" option, available right in the account menu on the admin side and the profile screen on the employee side. Switching takes one tap, with no second password.
- **Security is preserved:** The switch option exists only for sessions that earned it with the correct password. Any password change or reset, by the user themselves or by an admin, immediately removes the switch link from other sessions, and matching emails alone never grant a switch.
- **Clean handover between tabs:** Switching moves all open tabs of the same browser to the new account automatically, so the user never ends up working in two roles at once.
