# Project Flow

## Development

1. Clone project repo
1. Setup project, see:
	1. Create `.env` file by copy from `.env.example`
	- [Setup Laravel](/)
1. Create dev branch. eg: `dev/module/index`, see [Git Branch Guideline](/nexus-book/git/)
1. Project's `Git Master` to merge & cross-check relative dev branch into `Main`
1. prepare init data

## Deployment

1. create release branch eg: `release/staging`, `release/production`
1. insert initSeeder
1. setup server
1. share out server details

<!-- [Server Setup](/server-setup) -->