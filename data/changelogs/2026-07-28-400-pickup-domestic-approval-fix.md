---
date: "2026-07-28"
title: "Fix Pickup Domestic approval rejecting valid items during final review"
repo: len-approval-api
product:
  - backend
additions: 24
deletions: 2
---
- **Merged-state validation:** Final approval validation now checks each item's complete data (combining the approver's edits with the stored values) instead of only the fields the approver changed, so items that were not edited are no longer incorrectly flagged as invalid
- **Material type preserved:** Omitting the material kind on a partial edit no longer silently reclassifies Non-Part items as Parts, which previously caused validation to fail for missing box numbers
