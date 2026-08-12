---
date: "2026-08-12"
title: "Prevent reupload from overwriting confirmed test results"
repo: api-wms
product:
  - backend
additions: 84
deletions: 2
---

The Tested Inventory reupload feature now checks whether any serial numbers in the batch have already been tested before allowing the reupload to proceed. Previously, uploading a new file could silently overwrite confirmed results on serial numbers that had already passed testing.

- **Upload blocked for tested S/N:** If any serial number in the batch already has a test result, the system rejects the reupload immediately with a clear error message, preventing accidental data loss
- **Transactional safety:** Even if a result slips through the initial check, a second guard at the database level ensures only untested serial numbers can be updated, rolling back the entire operation if a conflict is detected
