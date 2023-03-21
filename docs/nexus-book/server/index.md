# Server Setup

## Project Folders:

### Example:

```
`projects` folder:
- `nexus-web` folder
	- `production` folder
	- `production-envoyer` folder
	- `staging` folder
- `nexus-pos` folder
	- `production` folder
	- `staging` folder
```

## Project detail


```
*# production:*
[web] https://www.test.com
[admin] https://admin.test.com/login
*may login and change password

- for client: admin@test.com | test@1234
- for etc : admin@etctech.com.my | admin@1234

*# staging:*
[web] https://staging.test.com
[admin] https://staging-admin.test.com/login

- for client: staging-admin@test.com | 1111aaaa
- for etc : admin@etctech.com.my | 1111aaaa

*# webmail:*
https://webmail.test.com
[production] admin@test.com | <password>
[staging] staging-admin@gmtractorparts.com | <password>
=> email account for client, used to receive contact-us enquiry
```


## CronJob

```sh
cd <project_pathproject_path> && php artisan schedule:run > cron-schedule.txt 2>&1


# example
cd gm-tractor-web/production-envoyer/current && php artisan schedule:run > cron-schedule.txt 2>&1
cd gm-tractor-web/staging && php artisan schedule:run > cron-schedule.txt 2>&1
```