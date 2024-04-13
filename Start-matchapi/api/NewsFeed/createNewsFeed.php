<?php
//headers
header('Access-Control-Allow-Origin:*');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers:Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods,Authorization,X-Requested-With');
//initializing api
include_once('../../core/initialize.php');
//initializing Newsfeed
$newsfeed=new NewsFeed($connection);
$newsfeed->idnewsfeed= null;
$newsfeed->lastfilter= null;
//create newsfeed
if($newsfeed->createNewsFeed()){
    echo json_encode(array('message'=>'NewsFeed created'));

}else {
    echo json_encode(array('message'=> 'NewsFeed not Created'));
}
?>