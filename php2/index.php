<?php
$key = $_REQUEST['key'];
$url = "https://assine.gvt.com.br/api/jc?handshake=true";

$opts = array('http' =>
    array(
        'method'  => 'POST',
        'header'  => "Content-Type: text/xml\r\n".
            "Authorization: Basic ".base64_encode("$key")."\r\n",
        'timeout' => 60
    )
);

$context  = stream_context_create($opts);
$response = file_get_contents($url, false, $context, -1, 40000);


//$response = file_get_contents($url);
echo $response;