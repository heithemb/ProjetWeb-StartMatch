<?php
//headers
header('Access-Control-Allow-Origin:*');
header('Content-Type: application/json');
//initializing api
include_once('../../core/initialize.php');
//initializing profil
$user=new User($connection);
$user->profil_login = isset($_GET['login']) ? $_GET['login'] : die();
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
?>