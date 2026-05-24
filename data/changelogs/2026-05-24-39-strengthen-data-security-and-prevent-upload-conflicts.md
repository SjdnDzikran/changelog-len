---
date: "2026-05-24"
title: "Strengthen data security and prevent upload conflicts in warehouse operations"
repo: api-wms
product:
  - backend
---

- **SQL injection protection:** All user-supplied values across warehouse operations (warehouse selections, status filters, material group filters, search terms) are now handled as safe parameters instead of being inserted directly into database commands, closing a potential security vulnerability
- **Concurrent upload safety:** When multiple warehouse staff upload inbound or outbound Excel files at the same time, the system now properly locks records during processing to prevent ID collisions that could cause errors or data inconsistencies
- **Dashboard reliability:** The warehouse dashboard's inventory breakdown by storage location now uses safe parameter handling, ensuring data remains accurate even with unusual storage location names
