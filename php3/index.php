<?php
$url = "https://assine.gvt.com.br/api/jc?getFunctions=true";
$response = file_get_contents($url);
echo $response;