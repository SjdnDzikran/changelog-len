---
date: "2026-09-14"
title: "Show the real reason when a request fails"
repo: api-wms
product:
  - backend
additions: 24
deletions: 4
---

Failed actions in the WMS system now show their actual explanation on screen, instead of a generic failure notice.

- **Specific error messages preserved:** When an action is rejected (for example, a duplicate entry or a rule violation), the exact reason now appears to the user instead of being replaced by a generic "validation failed" message
- **Clean plain-text messages:** Short text responses are now displayed as-is, without leftover quotes or escaped characters cluttering the message
- **Less guesswork for staff:** Warehouse teams can see immediately why something failed and correct it, rather than retrying blindly or escalating to support
