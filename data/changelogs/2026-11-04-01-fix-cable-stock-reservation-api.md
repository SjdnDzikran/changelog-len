---
date: "2026-11-04"
title: "Fix cable stock reservation for meter-based deliveries"
repo: api-wms
product:
  - backend
additions: 1411
deletions: 34
---

Outbound documents that ship cable by the meter (lengths like 511 M and 1,955 M on one delivery line) were being reserved against stock incorrectly: the system multiplied the full cable length by the number of serial labels, reserving the same stock several times over.

- **One length, one label:** Each cable delivery line now keeps its own length and its own serial number, so a document requesting 2,466 M of cable no longer reserves 2,466 M twice against the same stock
- **Automatic stock selection:** When operators confirm a cable delivery, the system now picks matching available cable stock by itself (warehouse, material, storage bin, and label must all match), planning longer lengths first and choosing the smallest stock pile that fits. No manual stock picker or extra confirmation is needed
- **Safe failure:** If stock is insufficient, the source cable is no longer available, or another operator changed the document, the request is rejected with a clear message and no stock is touched, instead of leaving half-finished reservations behind
- **Protected against racing documents:** Two delivery documents competing for the same cable reel can no longer both claim the same length; the second one is stopped cleanly
- **Cleaner Excel imports:** Uploading a cable delivery spreadsheet with missing or zero lengths is now rejected up front with an explanation, instead of creating delivery lines that could never be processed
