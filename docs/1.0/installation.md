---
forceTheme: blue
---

# Installation

## Requirements
	
* PHP: `^7.1`
* Laravel: `^5.6`
* Laravel Nova:`Orion` 

## Installation

Before installing the package, make sure you have set-up Laravel Nova.

::: tip
Remember that you can add nova as a composer package: [Link](https://nova.laravel.com/docs/1.0/installation.html#installing-nova-via-composer)
:::


Require this package (`cloudstudio/resource-generator`) in the `composer.json` of your Laravel project or run the following command in your console:

```
composer require cloudstudio/resource-generator
```

Next up, you must register the tool with Nova. This is typically done in the `tools` method of the `NovaServiceProvider`.

```php
// in app/Providers/NovaServiceProvider.php

...

public function tools()
{
    return [
        ...
        new \Cloudstudio\ResourceGenerator\ResourceGenerator(),
    ];
}
```

Also, link storage folder

```php
php artisan storage:link
```