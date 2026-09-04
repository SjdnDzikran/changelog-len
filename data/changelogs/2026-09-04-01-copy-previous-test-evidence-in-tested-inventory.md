---
date: "2026-09-04"
title: "Pick and copy previous-test evidence inside Tested Inventory"
repo: ui-wms
product:
  - web
additions: 907
deletions: 9
---

The copy-evidence capability is now live in the interface. Staff working in Tested Inventory Per S/N can pull the photos and the PDF test report from a serial's previous completed test onto its new record, without re-uploading anything by hand.

- **"Salin bukti sebelumnya" button:** Each serial that has earlier test evidence gets a copy button under its photo area, opening a picker that shows everything the previous completed test holds
- **See before you copy:** The picker shows each earlier test's result, its photos and PDF with their dates, and a live counter of remaining photo slots, so staff know exactly what will be added before confirming
- **"Salinan" labels everywhere:** Copied photos and PDFs are tagged in the evidence grid, the saved-photo viewer, and the PDF chip, so reused proof is never mistaken for evidence captured during the current test
- **Nothing automatic, nothing lost:** Files are copied only when explicitly ticked, the original test's evidence stays untouched, and the dialog warns when the target is full or already has a PDF
- **Completed records stay immutable:** The copy option only appears while evidence is still editable, so finished tests remain unchanged
