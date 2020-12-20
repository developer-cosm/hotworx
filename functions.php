<?php
function generateImage($item)
{
    $url = "http://maps.googleapis.com/maps/api/staticmap?size=500x456&center=" . $item["latitude"] . "," . $item["longitude"] . "&zoom=16&style=visibility:on&style=feature:water%7Celement:geometry%7Cvisibility:on&style=feature:landscape%7Celement:geometry%7Cvisibility:on&style=feature:landscape%7Celement:all%7Ccolor:0xf2f2f2&style=feature:poi|visibility:off&style=feature:administrative%7Celement:labels.text.fill%7Ccolor:0x444444&style=feature:road.highway%7Celement:all%7Cvisibility:simplified&style=feature:road%7Celement:all%7Csaturation:-100&style=feature:road%7Celement:all%7Clightness:45&style=feature:road.arterial%7Celement:labels.icon%7Cvisibility:off&style=feature:water%7Celement:geometry%7Ccolor:0xc0e4f3&markers=icon:https://uploads-ssl.webflow.com/5ea4822fd3a80f6c9cc4fdd9/5f87fae52f748c7c5ad55614_5f81e4e7374a417200dc2551_Geo_Tag.png%7Clabel:S%7C" . $item["latitude"] . "," . $item["longitude"] . "&key=AIzaSyA3foPM-dJbV6EXfYoC-zb7-ZY8vcjyiNo";
    $image = file_get_contents($url);
    $fileName = "studio-images/" . $item["name"] . "(" . $item["_id"] . ").png";
    $fp  = fopen($fileName, 'w+');
    fputs($fp, $image);
    fclose($fp);
    unset($image);
};

function makeApiCall($endpoint, $type, $params)
{
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_HTTPHEADER, array(
        'Authorization: Bearer bdb47ad338896ff91f7d7a64236a91640ecf45826e9cb24f604d69b11ed9eb87',
        'accept-version: 1.0.0',
        'cache-control: mpublic',
        'X-Requested-With: x-requested-with, x-requested-by'
    ));

    if ('POST' == $type) {
        curl_setopt($ch, CURLOPT_URL, $endpoint);
        curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($params));
        curl_setopt($ch, CURLOPT_URL, $endpoint . '?' . http_build_query($params));
    } elseif ('GET' == $type) {
        curl_setopt($ch, CURLOPT_URL, $endpoint . '?' . http_build_query($params));
    }
    curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

    $response = curl_exec($ch);
    curl_close($ch);
    return json_decode($response, true);
}

function getMakeApiCall($endpointUrl)
{
    // echo($endpointUrl);
    // exit(0);
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $endpointUrl);
    curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    $response = curl_exec($ch);
    curl_close($ch);

    return json_decode($response, true);
}

/*get hot locations*/
function requestLocationData($offset)
{
    $locationsParams = array(
        'offset' => $offset
    );
    $getLocationsEndPoint = "https://cors-anywhere.herokuapp.com/api.webflow.com/collections/5fb1c7dafe82bc064dd10ee3/items";
    $locations = makeApiCall($getLocationsEndPoint, 'GET', $locationsParams);
    return $locations;
}
