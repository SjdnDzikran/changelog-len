---
date: "2026-11-13"
title: "Harden production security for the attendance API"
repo: len-attendance
product:
  - backend
additions: 180
deletions: 40
---

A set of production safeguards for the attendance API, reducing exposure and improving operability.

- **Stronger secrets enforced:** The API now refuses to start in production unless a proper, non-default secret key of sufficient strength is configured, eliminating a common misconfiguration
- **Technical docs locked down:** The developer documentation pages are no longer served in production when default credentials are set, and cross-site access is now denied unless the exact company web addresses are explicitly allowlisted
- **Reliability monitoring:** A new readiness check reports whether the service can actually reach its database, so monitoring can distinguish "up but broken" from "healthy"; logs now also record the true client address of every request
- **Database stability:** Connection pool limits are now configurable, protecting the database from being overwhelmed under load
- **Security scanning in the pipeline:** The build pipeline now runs code-quality checks and known-vulnerability scanning on every change
