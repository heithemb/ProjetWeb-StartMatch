<?php
//headers
header('Access-Control-Allow-Origin:*');
header('Content-Type: application/json');
//initializing api
include_once('../../core/initialize.php');
//initializing profil
$post=new Post($connection);
$post->idpost = isset($_GET['idpost']) ? $_GET['idpost'] : die();
//blog post query
$post->selectPostByIdPost();
//get the row count
if ($post->idpost!=null) {
$post_arr=array(
    'idpost' => $post->idpost,
        'dateofcreation'=>$post->dateofcreation,
        'savesnb' => $post->savesnb,
        'reactnb' => $post->reactnb,
        'reportnb' => $post->reportnb,
        'tags' =>  $post->tags,
        'mediacontent' => base64_encode($post->mediacontent),
        'field'=> $post->field,
        'textcontent'=>$post->textcontent,
        'user_iduser'=>$post->user_iduser
);
print_r(json_encode($post_arr));} 
else {
    print_r(json_encode(array('message'=> 'no post found')));}
?>