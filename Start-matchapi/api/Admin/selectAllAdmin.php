<?php
//headers
header('Access-Control-Allow-Origin:*');
header('Content-Type: application/json');
//initializing api
include_once('../../core/initialize.php');
//initializing account
$admin=new Admin($connection);
//blog post query
$result=$admin->selectAllAdmin();
//get the row count
$n=$result->num_rows;
if($n> 0){
    $admin_arr = array(); 
    $admin_arr['data']=array();
    while($row = mysqli_fetch_assoc($result)){
    extract($row);
    $admin_item= array(
        'idadmin' => $idAdmin,
        'name' => $Name,
        'profil_login' => $Profil_Login
    );
    array_push($admin_arr['data'],$admin_item);
    }
    //convert to JSON and output
    echo json_encode($admin_arr);
}else{
    echo json_encode(array('message'=>'No admin found'));
}
?>