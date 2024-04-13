<?php
//headers
header('Access-Control-Allow-Origin:*');
header('Content-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers:Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods,Authorization,X-Requested-With');
header('Content-Type: application/json');
//initializing api
include_once('../../core/initialize.php');
//initializing profil
$profil=new Profil($connection);
$admin=new Admin($connection);
$data=json_decode(file_get_contents('php://input'));
$admin->idadmin=$data->idadmin;
$admin->selectAdminByIdAdmin();
$profil->login=$admin->profil_login;
//delete profil
if($admin->deleteAdmin()){
    echo json_encode(array('message'=>'Admin deleted'));
    if($profil->deleteProfil()){
        echo json_encode(array('message'=> 'profil admin deleted'));
    }else{
        echo json_encode(array('message'=>'profil admin not deleted'));
    };

}else {
    echo json_encode(array('message'=> 'Admin not deleted'));
}
?>