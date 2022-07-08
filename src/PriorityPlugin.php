<?php

namespace Performing\Taskday\Priority;

use Taskday\Bundles\AssetBundle;
use Taskday\Base\Plugin;
use Performing\Taskday\Priority\Fields\PriorityField;

class PriorityPlugin extends Plugin
{
    public string $handle = 'priority';

    public string $description;

    function bundle(): ?AssetBundle
    {
        return new PriorityAssetBundle;
    }

    public function fields(): array
    {
        return [
            new PriorityField()
        ];
    }
}
