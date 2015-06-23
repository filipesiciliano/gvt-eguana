<?php
$url = "https://assine.gvt.com.br/api/jc?getPublicKey=true&r=simulador";
$response = file_get_contents($url);
echo $response;