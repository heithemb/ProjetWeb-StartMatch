<?php
//headers
header('Access-Control-Allow-Origin:*');
header('Content-Type: application/json');
//initializing api
include_once('../../core/initialize.php');
//initializing profil
$post=new Post($connection);
$post->tags = isset($_GET['tags']) ? $_GET['tags'] : die();
//blog post query
$result=$post->selectPostByTags();
//get the row count

$n=$result->num_rows;
if($n> 0){
    $post_arr = array(); 
    $post_arr['data']=array();
    while($row = mysqli_fetch_assoc($result)){
    extract($row);
    $post_item= array(
        'idpost' => $idPost,
        'dateofcreation'=>$DateOfCreation,
        'savesnb' => $SavesNb,
        'reactnb' => $ReactNb,
        'reportnb' => $ReportNb,
        'tags' =>  $Tags,
        'mediacontent' => base64_encode($MediaContent),
        'field'=> $Field,
        'textcontent'=>$TextContent,
        'user_iduser'=>$User_idUser
    );
    array_push($post_arr['data'],$post_item);
    }
    //convert to JSON and output
    echo json_encode($post_arr);
}else{
    echo json_encode(array('message'=>'No post found'));
}
?>