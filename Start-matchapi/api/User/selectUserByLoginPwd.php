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
$user=new User($connection);
$profil=new Profil($connection);
$data=json_decode(file_get_contents('php://input'));
$profil->login= $data->login;
$profil->password= $data->password;
$profil->selectProfilByLoginPwd();
if($profil->login!=null){
$user->profil_login = $data->login;
//blog post query
$user->selectUserByLogin();
//get the row count
if ($user->iduser!=null){
$person_arr=array(
    'idUser'=>$user->iduser,
    'email'=>$user->email,
    'phone_num'=>$user->phone_num,
    'field'=>$user->field,
    'bio'=>$user->bio,
    'date'=>$user->date,
    'address'=>$user->address,
    'ppic'=>base64_encode($user->ppic),
    'cpic'=>base64_encode($user->cpic),
    'pfirst_name'=>$user->pfirst_name,
    'plast_name'=>$user->plast_name,
    'pdateofbirth'=>$user->pdateofbirth,
    'pexpertise'=>$user->pexpertise,
    'pjobposition'=>$user->pjobposition,
    'pgender'=>$user->pgender,
    'newsfeed_idnewsfeed'=>$user->newsfeed_idnewsfeed,
    'profil_login'=>$user->profil_login,
    'acccount_idaccount'=>$user->account_idaccount
);
print_r(json_encode($person_arr));
$startup_arr=array(
    'idUser'=>$user->iduser,
    'email'=>$user->email,
    'phone_num'=>$user->phone_num,
    'field'=>$user->field,
    'bio'=>$user->bio,
    'date'=>$user->date,
    'address'=>$user->address,
    'ppic'=>base64_encode($user->ppic),
    'cpic'=>base64_encode($user->cpic),    
    'sdateofcreation'=>$user->sdateofcreation,
    'sname'=>$user->sname,
    'newsfeed_idnewsfeed'=>$user->newsfeed_idnewsfeed,
    'profil_login'=>$user->profil_login,
    'acccount_idaccount'=>$user->account_idaccount
);
}else{
    print_r(json_encode(array('message'=>'no user found')));
}
}else{
    print_r(json_encode(array('message'=> 'error in login password combination')));
}
?>