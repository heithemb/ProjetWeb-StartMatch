<?php
//headers
header('Access-Control-Allow-Origin:*');
header('Content-Type: application/json');
//initializing api
include_once('../../core/initialize.php');
//initializing profil
$profil=new Profil($connection);
$profil->login = isset($_GET['login']) ? $_GET['login'] : die();
$profil->password = isset($_GET['password']) ? $_GET['password'] : die();
//blog post query
$profil->selectProfilByLoginPwd();
//get the row count
if($profil->login!=null){
$profil_arr=array(
    'login'=>$profil->login,
    'password'=>$profil->password
);
print_r(json_encode($profil_arr));
}else{
    print_r(json_encode(array('message'=> 'no profil found')));
}
?>