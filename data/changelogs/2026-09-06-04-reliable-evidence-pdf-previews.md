---
date: "2026-09-06"
title: "Make evidence PDF previews open reliably"
repo: api-wms
product:
  - backend
additions: 122
deletions: 2
---

Fixed the issue that made freshly delivered evidence PDFs fail to open in the new in-page viewer.

- **Previews open again:** The layer that packages every API response was accidentally corrupting evidence PDFs on their way to the viewer, so previews failed with "this file cannot be read"; reports now arrive complete and unaltered, and previews open normally
- **Nothing else changed:** Only the evidence preview path is affected; all other responses, error handling, and permission checks work exactly as before
- **Protected against regression:** Automated tests now verify that a sample PDF arrives intact, so previews cannot silently break again
