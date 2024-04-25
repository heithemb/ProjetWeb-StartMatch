<?php
//headers
header('Access-Control-Allow-Origin:*');
header('Content-Type: application/json');
//initializing api
include_once('../../core/initialize.php');
//initializing profil
$newsfeed=new NewsFeed($connection);
$newsfeed->idnewsfeed = isset($_GET['idnewsfeed']) ? $_GET['idnewsfeed'] : die();
//blog post query
$newsfeed->selectNewsFeedByIdNewsFeed();
//get the row count
if ($newsfeed->idnewsfeed!=null){
$newsfeed_arr=array(
    'idNewsFeed'=>$newsfeed->idnewsfeed,
    'LastFilter'=>$newsfeed->lastfilter
);
print_r(json_encode($newsfeed_arr));
}else{
    print_r(json_encode(array('message'=> 'no newsfeed found')));}
?>