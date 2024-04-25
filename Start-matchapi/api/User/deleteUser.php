<?php
//headers
header('Access-Control-Allow-Origin:*');
header('Content-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers:Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods,Authorization,X-Requested-With');
header('Content-Type: application/json');
//initializing api
include_once('../../core/initialize.php');
//initializing profil
$user=new User($connection);
$profil=new Profil($connection);
$newsfeed=new NewsFeed($connection);
$data=json_decode(file_get_contents('php://input'));
$user->iduser= $data->iduser;
$user->selectUserByIdUser();
$profil->login=$user->profil_login;
$newsfeed->idnewsfeed=$user->newsfeed_idnewsfeed;
//delete profil
if($user->deleteUser()&&$profil->deleteProfil()&&$newsfeed->deleteNewsFeed()){
    echo json_encode(array('message'=>'User deleted'));
    
}else {
    echo json_encode(array('message'=> 'User not deleted'));
}
?>