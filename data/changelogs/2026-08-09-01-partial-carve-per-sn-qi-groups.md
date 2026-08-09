---
date: "2026-08-09"
title: "Identify and test serial numbers incrementally instead of waiting for the full batch"
repo: api-wms
product:
  - backend
additions: 709
deletions: 133
---

Previously, a batch of 60 Quality Inspection serials had to be fully identified before any of them could be carved into separate breakdown groups and sent to testing. If even one serial was missing its metadata, the entire batch was stuck.

**Incremental carve:** Operators can now identify, carve, and resolve serials in smaller batches across multiple days. A 60-unit pallet can be processed ten units at a time while the remaining 50 stay provisional and wait for their turn.

**Automatic regrouping:** If an already-carved serial has its metadata corrected (for example, a wrong Vendor or Type Product), the system re-opens it and moves it to the correct breakdown group on the next carve, matching it with serials that share the same attributes.

**Merge into existing groups:** When a later carve produces a group whose attributes match a group that was already carved from the same batch, the serials join the existing group instead of creating a duplicate.

**Protected value accounting:** QI monetary value is allocated using a proportional splitting method that guarantees the parts always add up to exactly the original amount, preventing rounding drift across repeated carves.
