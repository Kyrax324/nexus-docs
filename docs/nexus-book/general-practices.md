# General Practices

## Naming of Variable and Function

- Singular & Plural
- meaningful

```ts
let selectedCategoryId : number = 1;
let selectedCategoryIds : number[] = [1,2,3];
let isRedeemed : bool = true;
```

```php
public function redeemStatus() : string
{
	return $is_redeemed ? "Redeemed" : "Open";
}
```

## Be careful on Global & Magic

## Be aware on API response changes
- when 
