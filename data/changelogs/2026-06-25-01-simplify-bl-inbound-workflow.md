---
date: "2026-06-25"
title: "Streamline BL Inbound AWB processing with one-step finalization"
repo: len-approval-api
product:
  - backend
additions: 43
deletions: 12
---

BL Inbound AWB workflows can now be configured so that the final AWB data entry step also finalizes and approves the form, removing the need for a separate CJ approval step afterward.

- **One-step finalization:** When the AWB input step is the last step in the workflow, completing it immediately approves the form and triggers stock creation in a single action
- **Automatic stock creation:** Inventory is generated the moment the form is finalized from the AWB step, with no additional approval round required
- **Eliminates redundant approval:** Previously, every BL Inbound workflow required at least one approval step after data entry; now teams can configure workflows that end directly on the AWB input, cutting cycle time for straightforward inbound shipments
