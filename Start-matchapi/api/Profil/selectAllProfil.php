<?php
//headers
header('Access-Control-Allow-Origin:*');
header('Content-Type: application/json');
//initializing api
include_once('../../core/initialize.php');
//initializing profil
$profil=new Profil($connection);
//blog post query
$result=$profil->selectAllProfil();
//get the row count
$n=$result->num_rows;
if($n> 0){
    $profil_arr = array(); 
    $profil_arr['data']=array();
    while($row = mysqli_fetch_assoc($result)){
    extract($row);
    $profil_item= array(
        'login' => $Login,
        'password' => $Password
    );
    array_push($profil_arr['data'],$profil_item);
    }
    //convert to JSON and output
    echo json_encode($profil_arr);
}else{
    echo json_encode(array('message'=>'No profils found'));
}
?>