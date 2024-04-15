<?php
//headers
header('Access-Control-Allow-Origin:*');
header('Content-Type: application/json');
//initializing api
include_once('../../core/initialize.php');
//initializing profil
$post=new Post($connection);
$filter = isset($_GET['filter']) ? $_GET['filter'] : die();
//blog post query
$filter=explode(',', $filter);
$test=0;
if($filter[0]!=null){
    $post->dateofcreation = $filter[0];
    $test=1;
}
if($filter[1]!=null){
    $post->tags = $filter[1];
    $test=1;
}
if($filter[2]!=null){
    $post->field = $filter[2];
    $test=1;
}
if($filter[3]!=null){
    $post->user_iduser = $filter[3];
    $test=1;
}

if ($test==1){
    
$result=$post->selectPostByFilter();
}else {
    $result=$post->selectAllPosts();
}
//get the row count

$n=$result->num_rows;
echo $n;
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