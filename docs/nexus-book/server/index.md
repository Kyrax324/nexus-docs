# Server Setup

## Project Directories Structure:

```
projects
├── project-A
│   ├── production
│   ├── production-envoyer
│   └── staging
└── project-B
    ├── production
	├── production-envoyer
    └── staging
```

## Subdomain

```js
`${project_site_name}-${site_type}-${environment}`
```

Project Site Name
Site Type Name
Environment Name


## Database

naming

## Email Account


## CronJob

```sh
cd <project_path> && php artisan schedule:run > cron-schedule.txt 2>&1


# example
cd gm-tractor-web/production-envoyer/current && php artisan schedule:run > cron-schedule.txt 2>&1
cd gm-tractor-web/staging && php artisan schedule:run > cron-schedule.txt 2>&1
```

### PHP version

```
/bin/php-ea74/...
```