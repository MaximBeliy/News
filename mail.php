<?php

$recepient = "youmail@ya.ru";
$sitename = "Название сайта";

$name = trim($_GET["name"]);
$mail = trim($_GET["mail"]);


$pagetitle = "Заявка на рассылку \"$sitename\"";
$message = "Имя: $name \nПочта: $mail;
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");