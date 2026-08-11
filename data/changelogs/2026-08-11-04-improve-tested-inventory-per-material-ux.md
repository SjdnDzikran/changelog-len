---
date: "2026-08-11"
title: "Improve tested inventory Per Material operator experience"
repo: ui-wms
product:
  - web
additions: 291
deletions: 43
---

- **Legacy groups are read-only:** Complete legacy material groups no longer show the edit action, so operators can proceed directly to testing without being offered an irrelevant metadata editor. Historical metadata is preserved as reference only
- **Batch reset for pasted data:** A new **Kosongkan S/N & metadata** button clears incorrectly pasted serial numbers and their metadata from multiple selected rows at once. The action requires confirmation and never removes already-saved data
- **Plain-language save flow:** The save button now reads **Simpan** instead of **Simpan & Pecah**, status text says **siap disimpan** instead of **siap dipecah**, and success toasts use **dikelompokkan menjadi N material** instead of **dipecah menjadi N breakdown**
- **Consistent mode detection:** The serial capture mode (Per S/N vs Legacy Group) is now determined from the authoritative API response rather than inferred from local S/N counts, ensuring the UI behavior matches the backend state
