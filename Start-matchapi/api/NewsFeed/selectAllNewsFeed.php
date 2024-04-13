<?php
//headers
header('Access-Control-Allow-Origin:*');
header('Content-Type: application/json');
//initializing api
include_once('../../core/initialize.php');
//initializing account
$newsfeed=new NewsFeed($connection);
//blog post query
$result=$newsfeed->selectAllNewsFeed();
//get the row count
$n=$result->num_rows;
if($n> 0){
    $newsfeed_arr = array(); 
    $newsfeed_arr['data']=array();
    while($row = mysqli_fetch_assoc($result)){
    extract($row);
    $newsfeed_item= array(
        'idnewsfeed' => $idNewsFeed,
        'lastfilter' => $LastFilter
    );
    array_push($newsfeed_arr['data'],$newsfeed_item);
    }
    //convert to JSON and output
    echo json_encode($newsfeed_arr);
}else{
    echo json_encode(array('message'=>'No newsfeed found'));
}
?>