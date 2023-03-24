# Git

## Branches SOP

| Branch Type | Purpose | Creation | Action | Example |
| --- | --- | --- | --- | --- |
| Main Branch <br>( HEAD branch)| Contains stable, production-ready code | Default branch | Merge and Review from other branches then Push to origin | `Main`, `Master`
| Development Branch | Used for developing new features or fixing bugs | Created off the main branch | Merge and sync from Main branch | `dev/attendance-module`, `dev/referral-module`
| Release Branch | Used for preparing a new release | Created off the main branch | Merge and sync from Main branch | `release/staging`, `release/production`
