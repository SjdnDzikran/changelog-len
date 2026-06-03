---
date: "2026-06-03"
title: "Streamline BL Transfer Order PDF layout"
repo: api-wms
product:
  - backend
---

Removed the transport mode column from the BL Transfer Order PDF, giving Part Number and Description columns more horizontal space. The Moda field is only needed on the Goods Delivery Note for external partners, not on the internal warehouse picking list.

- **Wider columns:** Part Number and Description now have 40% and 20% more space respectively, preventing text from wrapping awkwardly across multiple lines
- **Cleaner printout:** The table is easier to scan at a glance with one fewer column, and total row alignment stays correct with the reduced column count
