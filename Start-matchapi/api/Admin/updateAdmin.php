<?php
//headers
header('Access-Control-Allow-Origin:*');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: Put');
header('Access-Control-Allow-Headers:Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods,Authorization,X-Requested-With');
//initializing api
include_once('../../core/initialize.php');
//initializing admin
$admin=new Admin($connection);
$data=json_decode(file_get_contents('php://input'));
$admin->profil_login= $data->profil_login;
$admin->name= $data->name;
$admin->idadmin=$data->idadmin;
//update admin
if($admin->updateAdmin()){
    echo json_encode(array('message'=>'admin updated'));

}else {
    echo json_encode(array('message'=> 'admin not updated'));
}
?>