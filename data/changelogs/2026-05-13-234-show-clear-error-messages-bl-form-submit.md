---
date: "2026-05-13"
title: "Show clear error messages when BL form submission fails"
repo: len-approval-api
product:
  - backend
---

- **Validation errors now appear in plain language:** When a BL form fails WMS validation during submission, the specific reason is shown (for example, "Plant tidak valid") instead of a generic "Unknown Error" message
- **Four error categories handled separately:** Not found, unauthorized, validation failure, and unexpected server errors each return the appropriate response so the approval UI can display the right feedback
