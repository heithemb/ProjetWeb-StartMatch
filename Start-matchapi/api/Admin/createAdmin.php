<?php
//headers
header('Access-Control-Allow-Origin:*');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers:Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods,Authorization,X-Requested-With');
//initializing api
include_once('../../core/initialize.php');
//initializing profil
$profil=new Profil($connection);
$data=json_decode(file_get_contents('php://input'));
$profil->login= $data->login;
$profil->password= $data->password;
//create profil
if($profil->createProfil()){
    echo json_encode(array('message'=>'Profil created'));
    $admin=new Admin($connection);
    $admin->name= $data->name;
    $admin->idadmin=null;
    $admin->profil_login= $data->login;
    if($admin->createAdmin()){
        echo json_encode(array('message'=> 'admin created'));
    }else{
        echo json_encode(array('message'=>'admin not created'));
        $profil->deleteProfil();
    }
}else {
    echo json_encode(array('message'=> 'Profil not Created'));
}

?>