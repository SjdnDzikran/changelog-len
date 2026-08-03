---
date: "2026-08-03"
title: "Fix deadlock preventing QI-direct stock from reaching the test bench"
repo: api-wms
product:
  - backend
additions: 47
deletions: 8
---

- **QI-direct stock can now reach the test bench:** Items created with a placeholder serial number (before a physical unit is scanned) can move into a Test Bin, where the real serial number is captured at the bench
- **Placeholder serials stay contained:** The block on provisional serials still applies to all non-test destinations (free stock, outbound, ordinary bin moves), so a placeholder serial can never leak out of the quality inspection workflow
