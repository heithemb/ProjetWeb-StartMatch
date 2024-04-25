<?php
//headers
header('Access-Control-Allow-Origin:*');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers:Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods,Authorization,X-Requested-With');
//initializing api
include_once('../../core/initialize.php');
//initializing Newsfeed
$post=new Post($connection);
$data=json_decode(file_get_contents('php://input'));
$post->idpost= null;
$post->dateofcreation= date("Y-m-d h:i:s");
$post->mediacontent= $data->mediacontent;
$post->tags= $data->tags;
$post->field= $data->field;
$post->textcontent= $data->textcontent;
$post->user_iduser= $data->user_iduser;
//create post
if($post->createPost()){
    echo json_encode(array('message'=>'post created'));

}else {
    echo json_encode(array('message'=> 'post not Created'));
}
?>