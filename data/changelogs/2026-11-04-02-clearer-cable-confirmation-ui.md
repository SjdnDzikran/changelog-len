---
date: "2026-11-04"
title: "Clearer delivery confirmation screen for cable shipments"
repo: ui-wms
product:
  - web
additions: 367
deletions: 138
---

The "Confirm on test" screen in both the Network and XL Home outbound flows now works hand in hand with the new automatic cable stock allocation, and no longer hides the Resolve button when it is actually usable.

- **Resolve stays reachable:** The Resolve S/N button no longer disappears based on a rough serial count; operators always see the next step, with a clear list of the exact blockers if something genuinely needs fixing first
- **See the planned stock:** Each cable line shows which stock pile the system plans to take the length from and how many meters remain available there, marked as read-only information that is rechecked at confirm time
- **Whole-document guard:** Resolve is blocked when the list is filtered or only partially loaded, with a one-click "show all items" button so every allocation in the document is checked before stock is reserved
- **Over-capacity warnings:** If several cable lines together would exceed the available length in one stock pile, the screen says so with the exact numbers before the operator confirms, instead of failing mid-process
- **SET items unchanged:** Item types counted in sets or pieces keep their existing serial number rules and the explicit consent step for registering new labels
