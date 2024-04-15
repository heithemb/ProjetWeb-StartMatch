<?php
//headers
header('Access-Control-Allow-Origin:*');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: Put');
header('Access-Control-Allow-Headers:Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods,Authorization,X-Requested-With');
//initializing api
include_once('../../core/initialize.php');
//initializing post
$post=new Post($connection);
$data=json_decode(file_get_contents('php://input'));
$post->idpost= $data->idpost;
$post->mediacontent= $data->mediacontent;
$post->tags= $data->tags;
$post->field= $data->field;
$post->textcontent= $data->textcontent;
$post->savesnb=$data->savesnb;
$post->reportnb=$data->reportnb;
$post->reactnb=$data->reactnb;
//update Post
if($post->updatePost()){
    echo json_encode(array('message'=>'Post updated'));

}else {
    echo json_encode(array('message'=> 'Post not updated'));
}
?>