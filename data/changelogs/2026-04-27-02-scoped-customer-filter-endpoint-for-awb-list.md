---
date: "2026-04-27"
title: "Scoped Customer Filter Endpoint for AWB List"
repo: erp-len-api
product:
  - backend
---

Added a new API endpoint (`GET /awb/customer-filter-options`) that returns customer options for the AWB list dropdown. The list is automatically scoped to each TMS operator's assigned customers through `CustomerScopeResolver`. Restricted operators with no assigned customers receive an empty list, while unrestricted operators see all active customers.
