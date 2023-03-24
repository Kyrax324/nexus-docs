# Web team standardization & practice checklist

## Database
- use plural naming eg: "users"
- for pivot table, use "mappings" eg: "user_product_mappings"
- use primary key & foreign key (indexing)
- DB::transaction

## Laravel - Backend

## composer 
- avoid update in server (will ahead from HEAD)

### naming

### all request shall use `FormRequest`
-	```php
	$payload = $request->validated();
	```
- clearer picture of which payload is passed into controller

### LOG_CHANNEL use "daily" instead "stack"

### route
- subdomain
- named route

### app config
- timezone
- subdomain

### filesystem
- default `FILESYSTEM_DRIVER="uploads"`
- 	```sh
	php artisan storage:link
	```
- server-file

- asset-file
- image-upload handler

<!-- ### keep `.env,example` up to date -->
<!-- 
### keep migration alive -->

<!-- ### use `env()` only in config files -->

<!-- ### aware with lazy-loading -->

<!-- ### `Model`
- stub | categorize methods
- avoid using whereX magic method eg: where
- avoid using scope
- aware on appends, getXAttribute()
- avoid using with = []
- relationship method naming singular/plural
- trait
	- firstOrThrow() -->

<!-- ### `Controller`
- method that relevant in route

### api response

### `JsonResource` -->

<!-- ### overwatch panel
- Telescope
- Hubblescope
- Swagger (in progress) -->

### seeders

### error handling
- badRequestException

### json response

### unit test (planning)

---

## SPA (Vue)

- gitignore
- spa blade

- Vue as application
	- eslint
	- file structure & modules
---

## Server

- subdomain
- email account
- source code directory & upload
- cronjob
- supervisor

---

## Tools

### VSCode
- extension
- shortcut keys
 

