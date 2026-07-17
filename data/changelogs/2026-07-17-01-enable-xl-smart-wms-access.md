---
date: "2026-07-17"
title: "Enable XL Smart Customer access to WMS reporting and inventory"
repo: api-wms
product:
  - backend
additions: 52
deletions: 6
---

**New XL Smart Customer role:** A dedicated user group has been created so XL Smart team members log in with their own role instead of falling back to the generic Guest role. This ensures proper access control and clear audit trails.

**Reporting access unlocked:** XL Smart users can now view the Network Data WMS report, the Tested Inventory serial number report, and photo thumbnails for tested inventory items. Previously, these pages returned access denied errors for XL Smart accounts.

**Incremental rollout across three updates:** The role was introduced first, then reporting endpoint access was added, and finally photo thumbnail access was enabled as each missing permission was discovered during testing.
