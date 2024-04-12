<?php
//headers
header('Access-Control-Allow-Origin:*');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: Put');
header('Access-Control-Allow-Headers:Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods,Authorization,X-Requested-With');
//initializing api
include_once('../../core/initialize.php');
//initializing profil
$profil=new Profil($connection);
$data=json_decode(file_get_contents('php://input'));
$profil->login= $data->login;
$profil->password= $data->password;
$log=$data->log;
//update profil
if($profil->updateProfil($log)){
    echo json_encode(array('message'=>'Profil updated'));

}else {
    echo json_encode(array('message'=> 'Profil not updated'));
}
?>