---
date: "2026-06-04"
title: "Show validation errors in a dialog when form submission fails"
repo: len-approval-ui
product:
  - web
additions: 154
deletions: 12
---

- **Stay on the form after validation failure:** When a BL Inbound or Pickup Domestic form fails submit validation (e.g., missing Origin or Moda), the system now shows a popup dialog with the specific error message instead of navigating away to the forms list. Users can immediately fix the issue and resubmit without reloading the page
- **Indonesian error messages:** Submit validation errors now display in Bahasa Indonesia, matching the language used across the rest of the application. For example, "Submit flow CJ First gagal. Semua item wajib memiliki Moda sebelum submit"
