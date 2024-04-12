<?php
//headers
header('Access-Control-Allow-Origin:*');
header('Content-Type: application/json');
//initializing api
include_once('../../core/initialize.php');
//initializing profil
$profil=new Profil($connection);
$profil->login = isset($_GET['login']) ? $_GET['login'] : die();
//blog post query
$profil->selectProfilByLogin($profil->login);
//get the row count
$profil_arr=array(
    'login'=>$profil->login,
    'password'=>$profil->password
);
print_r(json_encode($profil_arr));
?>