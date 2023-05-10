# Server Setup

## Naming Principles

```js
`${project_site_name}-${site_type}-${environment}`
```

## Setup

### Subdomain

Example:
- Project name `lorem-web-laravel` (main) :
	- main site
		- `staging.lorem.test`
		- `lorem.test`
	- admin:
		- `admin-staging.lorem.test`
		- `admin.lorem.test`

- Project name `lorem-pos-laravel` :
	- main site
		- `pos-staging.lorem.test`
		- `pos.lorem.test`
	- admin:
		- `pos-admin-staging.lorem.test`
		- `pos-admin.lorem.test`


### Project Directories Structure

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

### Database

Example:
- lorem-web_production
- lorem-web_staging
- lorem-pos_production
- lorem-pos_staging

in phpmyadmin, we will see :


```
databases
├── lorem-web
│   ├── production
│   └── staging
└── lorem-pos
    ├── production
    └── staging
```

### Email Account

|Description|Example|
|---|---|
| main account for production site | `admin@lorem.test`|
| main account for staging site | `admin-staging@lorem.test`|
| use as email sender | `no-reply@lorem.test`|


### CronJob

```sh
cd <project_path> && php artisan schedule:run > cron-schedule.txt 2>&1
```

Example
```sh
# Production Envoyer
cd gm-tractor-web/production-envoyer/current && php artisan schedule:run > cron-schedule.txt 2>&1

# Staging
cd gm-tractor-web/staging && php artisan schedule:run > cron-schedule.txt 2>&1
```

<!-- ### Supervisor

.

### PHP version

```
/bin/php-ea74/...
``` -->