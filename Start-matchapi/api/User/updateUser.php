<?php
//headers
header('Access-Control-Allow-Origin:*');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: Put');
header('Access-Control-Allow-Headers:Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods,Authorization,X-Requested-With');
//initializing api
include_once('../../core/initialize.php');
//initializing profil
$user=new User($connection);
$data=json_decode(file_get_contents('php://input'));
$user->iduser=$data->iduser;
$user->isperson=$data->isperson;
$user->email=$data->email;
$user->phone_num=$data->phone_num;
$user->field=$data->field;
$user->bio=$data->bio;
$user->date= date("Y-m-d h:i:s");
$user->address=$data->address;
$user->ppic=$data->ppic;
$user->cpic=$data->cpic;
if ($user->isperson==1){
    $user->pfirst_name=$data->pfirst_name;
    $user->plast_name=$data->plast_name;
    $user->pdateofbirth=$data->pdateofbirth;
    $user->pexpertise=$data->pexpertise;
    $user->pjobposition=$data->pjobposition;
    $user->pgender=$data->pgender;
}else{
    $user->sdateofcreation=$data->sdateofcreation;
    $user->sname=$data->sname;
}
//create user   
if($user->updateUser()){
                echo json_encode(array('message'=>'User updated'));

            }else {
                echo json_encode(array('message'=> 'User not updated'));
            }
?>