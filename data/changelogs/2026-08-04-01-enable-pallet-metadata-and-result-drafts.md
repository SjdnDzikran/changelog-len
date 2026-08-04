---
date: "2026-08-04"
title: "Enable pallet metadata and test-result drafts in Tested Inventory"
repo: api-wms
product:
  - backend
additions: 367
deletions: 6
---

- **Pallet-level metadata:** Operators can now fill in Vendor, Kategori Produk Material, and Type Product once per pallet group when saving serial drafts, along with optional fields like Wbs, Tower ID, and Site. These values persist on the parent record and carry through to the inbound data when the batch is finalized.

- **Save test results as drafts:** A new result-draft endpoint lets operators save Condition, Completeness, Power On Test, and Remark for each serial without resolving. Drafted values pre-fill into the resolve dialog when the operator returns, so progress is never lost between sessions.

- **Automatic inbound sync:** When a tested batch is finalized through resolve or confirm/reupload, test results and pallet metadata are automatically written back to the on-test inbound record. This keeps the inbound data in sync without manual updates.

- **Preserve pallet labels on send-to-test:** Pallet remarks (such as "Pallet 1") now carry over when items are moved into the On-Test area, instead of being replaced with a generic transfer marker.
