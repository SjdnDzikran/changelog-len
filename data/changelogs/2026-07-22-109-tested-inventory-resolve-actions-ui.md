---
date: "2026-07-22"
title: "Add resolve actions on Tested Inventory Per S/N, Per Material, and Rekap pages"
repo: ui-wms
product:
  - web
additions: 557
deletions: 9
---

- **Per S/N multi-select resolve:** Staff can now tick individual Recorded serial numbers and resolve them in bulk through a single modal. Each selected serial can have its own Condition, Completeness, Power On Test, and Remark values, or all can be set at once with the "Apply to All" button at the top of the modal
- **Same-batch validation:** The system ensures all selected serial numbers belong to the same Tested Inventory batch before allowing the resolve to proceed, preventing accidental cross-batch actions
- **Per Material resolve:** A Resolve button now appears next to each material on the Per Material page, allowing all unresolved serial numbers of that material within a batch to be resolved in one step
- **Batch resolve on Detail page:** The whole-batch Resolve action has been moved from the Rekap summary list to the Tested Inventory Detail page, placing it alongside the existing upload and confirm workflow where it logically belongs
- **Photo filter:** A new "Ada Foto / Belum Ada Foto" filter on the Per S/N page lets staff quickly find serial numbers that have or have not had photos uploaded yet
