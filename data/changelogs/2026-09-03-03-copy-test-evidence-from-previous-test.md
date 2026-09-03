---
date: "2026-09-03"
title: "Copy test evidence forward from a previous test of the same serial"
repo: api-wms
product:
  - backend
additions: 912
deletions: 1
---

When an already-tested serial number is transferred, the system keeps the completed test record and opens a fresh record at the destination, which used to mean staff had to re-upload the same photos and PDF test report by hand for the new record.

- **One-step evidence copy:** Staff can now bring the photos and the PDF test report from an earlier completed test of the same serial number onto the new record, instead of re-uploading everything manually
- **Pick exactly what to carry over:** A picker lists the previous tests that still hold evidence, shows each test's result, and displays how many photo slots remain on the new record
- **Independent copies:** Every copied photo or PDF is saved as its own separate file, so deleting one record can never break the other and the original test's evidence stays untouched
- **Reused proof is labeled:** Evidence carried forward is flagged as copied from a previous test, so it is never mistaken for proof captured during the current test
- **Guardrails enforced centrally:** Existing limits still apply, including the maximum photos per serial and one PDF per serial, and copying is restricted to completed tests of the same serial within the user's own warehouse
