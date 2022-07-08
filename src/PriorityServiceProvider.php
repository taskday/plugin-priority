<?php

namespace Performing\Taskday\Priority;

use Taskday\Facades\Taskday;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Route;

class PriorityServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap the application services.
     */
    public function boot()
    {
        // Registering extra web routes
        Route::middleware('web')->group(__DIR__ . '/../routes/web.php');
    
        if (Taskday::getViewByType('kanban')) {
            Taskday::getViewByType('kanban')->add('priority', [
                [ "value" => 0, "name" => 'No priority', "color" => 'gray'   ],
                [ "value" => 1, "name" => 'Low'        , "color" => 'blue'   ],
                [ "value" => 2, "name" => 'Medium'     , "color" => 'yellow' ],
                [ "value" => 3, "name" => 'High'       , "color" => 'orange' ],
                [ "value" => 4, "name" => 'Urgent!'    , "color" => 'red'    ],
            ]);
        }
    }

    /**
     * Register the application services.
     */
    public function register()
    {
        // Register plugin
        Taskday::register(new PriorityPlugin, 'priority');
    }
}
