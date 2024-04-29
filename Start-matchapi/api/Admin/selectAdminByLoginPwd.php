<?php
//headers
// Set CORS headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization");


header('Content-Type: application/json');
//initializing api
include_once('../../core/initialize.php');
//initializing profil
$admin=new Admin($connection);
$profil=new Profil($connection);
$data=json_decode(file_get_contents('php://input'));
$profil->login= $data->login;
$profil->password= $data->password;
$profil->selectProfilByLoginPwd();
if($profil->login!=null){
$admin->profil_login = $data->login;
//blog post query
$admin->selectAdminByLogin($admin->profil_login);
//get the row count
if ($admin->idadmin!=null){
    
$admin_arr=array(
    'idadmin'=>$admin->idadmin,
    'name'=>$admin->name,
    'profil_login'=>$admin->profil_login);
    
print_r(json_encode($admin_arr));
    
}else{
    print_r(json_encode(array('message'=>'no user found')));
}
}else{
    print_r(json_encode(array('message'=> 'error in login password combination')));
}
?>