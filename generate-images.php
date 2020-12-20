<?php
include('functions.php');
$offset = 0;
$locationsData = [];
$initialLocations = requestLocationData(0);
$locationsData = array_merge($locationsData, $initialLocations["items"]);

if ($initialLocations["count"] < $initialLocations["total"]) {
    for ($i = $initialLocations["count"]; $i < $initialLocations["total"]; $i = $i + $initialLocations["limit"]) {
        $tempLocationData = requestLocationData($i);
        $locationsData = array_merge($locationsData, $tempLocationData["items"]);
    }
}

foreach ($locationsData as $value) {
    if (isset($value["latitude"]) && isset($value["longitude"])) {
        generateImage($value);
    }
}

print_r("images are generated");
