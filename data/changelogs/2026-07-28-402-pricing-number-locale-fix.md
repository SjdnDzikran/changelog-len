---
date: "2026-07-28"
title: "Fix pricing import incorrectly reading Indonesian number formats"
repo: len-approval-api
product:
  - backend
additions: 344
deletions: 27
---
- **Locale-safe number parsing:** The tariff import now correctly reads prices exported from both English and Indonesian Excel, so "41.500" (forty-one thousand five hundred in Indonesian format) is no longer misread as 41.5
- **Charter rates preserved:** Values in the millions (common for charter flat rates) that previously failed to parse entirely and were silently skipped now import correctly
- **Accurate minimum weights and lead times:** Minimum weight cells like "Min 10 Kg / 3 hari" now correctly extract the first number (10) instead of concatenating all digits (103), and lead time ranges like "3-4 hari" use the lower bound
