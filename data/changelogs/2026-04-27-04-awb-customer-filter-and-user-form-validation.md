---
date: "2026-04-27"
title: "AWB Customer Filter & User Form Validation"
repo: erp-len-ui
product:
  - web
---

Added a searchable customer filter dropdown to the AWB list page. The filter persists across navigation via URL query parameters and applies to both search results and Excel exports. The customer list is fetched from the new scoped endpoint, so operators only see their assigned customers. Also added client-side validation hints to the user creation form, showing requirements for username (min. 6 characters, no spaces) and password (min. 6 characters, no spaces) before the form is submitted.
