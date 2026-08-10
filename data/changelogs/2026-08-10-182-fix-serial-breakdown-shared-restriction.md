---
date: "2026-08-10"
title: "Fix serial number breakdown for shared quality inspection restrictions"
repo: api-wms
product:
  - backend
additions: 524
deletions: 23
---

When warehouse staff split serial numbers that share a single quality inspection restriction header (a legacy data pattern from older inbound records), the system could reject the operation because the counts and quantities on the shared header did not match the subset being split.

- **Automatic restriction isolation:** Before splitting, the system now separates the target group into its own dedicated restriction header, leaving unrelated serial links and quantities untouched on the original shared header
- **Clearer error messages:** If something is still inconsistent, the rejection now lists every specific mismatch (which count is wrong, what the expected value was) instead of a generic failure message
- **Incremental finalization works again:** Individual serial numbers can be finalized and resolved as soon as their data is complete, without waiting for every other serial in the provisional group
