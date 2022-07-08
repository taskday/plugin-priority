<?php

namespace Performing\Taskday\Priority;

use Taskday\Bundles\AssetBundle;

class PriorityAssetBundle extends AssetBundle
{
    function scripts(): array
    {
        return [
            __DIR__ . '/../dist/taskday-priority.es.js'
        ];
    }

    function styles(): array
    {
        return [
            //
        ];
    }
}
