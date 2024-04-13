<?php
//headers
header('Access-Control-Allow-Origin:*');
header('Content-Type: application/json');
//initializing api
include_once('../../core/initialize.php');
//initializing profil
$admin=new Admin($connection);
$admin->idadmin = isset($_GET['idadmin']) ? $_GET['idadmin'] : die();
//blog post query
$admin->selectAdminByIdAdmin();
//get the row count
$admin_arr=array(
    'idadmin'=>$admin->idadmin,
    'name'=>$admin->name,
    'profil_login'=>$admin->profil_login
);
print_r(json_encode($admin_arr));
?>