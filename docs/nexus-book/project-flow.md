<!-- <script setup>
import ProjectDetail from "../.vitepress/components/ProjectDetail.vue"

const aa = "# AAA"
</script> -->

# Project Flow

## Project Setup

1. `Main Developer` create project by `forking` the nexus repo.

## Development
1. Clone project repo
1. Setup project by:
	1. Create `.env` file by copy from `.env.template`
	- [Setup Laravel](/)
1. Create dev branch. `dev/$module`, see [Git Branch Guideline](/nexus-book/git/).
- example:
	- `dev/product`
	- `dev/banner`
1. Project's `Git Master` to merge & cross-check relative dev branch into `Main`
1. prepare init data

## Deployment

1. create release branch 
	- example: `release/staging`, `release/production`
1. insert initSeeder
1. setup server
1. share out server details

## Project detail

Whatsapp sharing sample:

```
*Production:*
[web] https://www.$DOMAIN
[admin] https://admin.$DOMAIN/login
*may login and change password

- for client: admin@$DOMAIN | $PROJECT_NAME@1234
- for etc : admin@etctech.com.my | admin@1234

*Staging:*
[web] https://staging.$DOMAIN
[admin] https://admin-staging.$DOMAIN/login

- for client: admin-staging@$DOMAIN | 1111aaaa
- for etc : admin@etctech.com.my | 1111aaaa

*Webmail:*
https://webmail.$DOMAIN
[production] admin@$DOMAIN | $PRODUCTION_WEBMAIL_PASSWORD
[staging] admin-staging@.$DOMAIN | $STAGING_WEBMAIL_PASSWORD
=> email account for client, used to receive contact-us enquiry
```

<!-- <ProjectDetail></ProjectDetail> -->

<!-- @content -->