---
date: "2026-09-18"
title: "Fix Android app updates failing to install"
repo: len-app
product:
  - mobile
additions: 16
deletions: 17
---

Android requires every new app release to carry a strictly higher internal version number than the one installed, otherwise the phone silently rejects the update. The build numbering scheme had drifted to a point where new releases could collide with or undercut earlier installs.

- **Updates install reliably again:** Release builds now take their Android version number directly from the app's version file, so each shipped build is guaranteed to be higher than the previous one
- **Clear rule for future releases:** Every code change that ships must bump the build suffix, and the build pipeline enforces this before release
- **Simpler installer files:** Each device variant now downloads a single standard installer package instead of split packages, reducing confusion about which file to install
