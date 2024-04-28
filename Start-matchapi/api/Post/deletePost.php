<?php
//headers
header('Access-Control-Allow-Origin:*');
header('Content-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers:Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods,Authorization,X-Requested-With');
header('Content-Type: application/json');
//initializing api
include_once('../../core/initialize.php');
//initializing profil
$post=new Post($connection);

$post->idpost= isset($_GET['idpost']) ? $_GET['idpost'] : die();
//delete profil
if($post->deletePost()){
    echo json_encode(array('message'=>'Post deleted'));

}else {
    echo json_encode(array('message'=> 'Post not deleted'));
}
?>