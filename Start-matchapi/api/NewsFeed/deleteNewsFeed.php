<?php
//headers
header('Access-Control-Allow-Origin:*');
header('Content-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers:Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods,Authorization,X-Requested-With');
header('Content-Type: application/json');
//initializing api
include_once('../../core/initialize.php');
//initializing profil
$newsfeed=new NewsFeed($connection);
$data=json_decode(file_get_contents('php://input'));
$newsfeed->idnewsfeed= $data->idnewsfeed;
//delete profil
if($newsfeed->deleteNewsFeed()){
    echo json_encode(array('message'=>'NewsFeed deleted'));

}else {
    echo json_encode(array('message'=> 'NewsFeed not deleted'));
}
?>