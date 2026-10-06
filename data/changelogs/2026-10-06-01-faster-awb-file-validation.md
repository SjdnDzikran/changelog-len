---
date: "2026-10-06"
title: "Faster AWB file validation with fewer database reads"
repo: erp-len-api
product:
  - backend
additions: 358
deletions: 11
---

Uploading an AWB file for checking is now noticeably lighter on the database. The validation step was re-checking several reference lists it never actually used, so those extra lookups were removed without changing any validation rule.

- **Less database load per upload:** Checking a file for errors now performs only the three reference lookups it truly needs (services, truck types, item types), instead of also pulling mode, courier, payment, and origin lists on every part of a large upload
- **Same validation results:** Every rule is unchanged: truck requirements, document checks, required fields, and service name handling all behave exactly as before
- **Templates keep their dropdowns:** Downloading a blank AWB template still loads all reference lists for the dropdown columns, so nothing about filling in the template changes
- **First step for background imports:** This is the groundwork for a planned background import system, which will let staff close the browser while a large file processes
