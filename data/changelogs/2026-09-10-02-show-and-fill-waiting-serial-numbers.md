---
date: "2026-09-10"
title: "Show and fill stock waiting for its serial number"
repo: ui-wms
product:
  - web
additions: 74
deletions: 8
---

The Manage Serial Number screen now shows units whose serial number has not been captured yet and guides operators to fill them in.

- **"Menunggu S/N" badge:** Rows waiting for a serial number are clearly labeled on the list instead of being hidden, and each waiting row is flagged with a "Perlu diisi" marker in the bulk editor.
- **On-screen guidance:** When waiting units are present, a notice shows how many there are and explains the fix: select those rows and use Bulk Edit S/N to enter the physical serial numbers.
- **Guarded actions:** The single-row edit button is hidden for waiting stock, and Delete is disabled while any waiting row is selected, so the only path forward is filling in the real serial number.
