<?php
$url = "http://planosnamedida.com.br/Home/ConsultarDisponibilidade";
$content = file_get_contents($url);
$content = str_replace('</head>','<link rel="stylesheet" href="http://www.yourwebsiteurl.com/google.css" /></head>', $content);
echo $content;