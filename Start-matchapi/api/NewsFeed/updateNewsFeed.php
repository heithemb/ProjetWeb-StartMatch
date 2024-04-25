<?php
//headers
header('Access-Control-Allow-Origin:*');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: Put');
header('Access-Control-Allow-Headers:Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods,Authorization,X-Requested-With');
//initializing api
include_once('../../core/initialize.php');
//initializing NewsFeed
$newsfeed=new NewsFeed($connection);
$data=json_decode(file_get_contents('php://input'));
$newsfeed->idnewsfeed= $data->idnewsfeed;
$newsfeed->lastfilter= $data->lastfilter;
//update profil
if($newsfeed->updateNewsFeed()){
    echo json_encode(array('message'=>'NewsFeed updated'));

}else {
    echo json_encode(array('message'=> 'NewsFeed not updated'));
}
?>