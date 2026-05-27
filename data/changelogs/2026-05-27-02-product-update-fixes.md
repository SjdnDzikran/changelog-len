---
date: "2026-05-27"
title: "Fix product data loss and errors when updating master products"
repo: erp-len-api
product:
  - backend
---

**Preserve dimensions, images, and pricing:** Editing a product previously silently dropped its dimension specs, photos, and pricing because those related records were not loaded during the update. All three are now included when a product is loaded for editing, so nothing gets lost on save

**Safe pricing update:** Updating a product's price used to delete and re-insert the pricing row, which could trigger a duplicate-key error if two saves happened close together. The pricing row is now updated in-place instead, eliminating the error

**Image filenames saved:** When adding a new image to a product variant during an update, the filename was left blank. It is now populated correctly so images can be referenced and displayed as expected