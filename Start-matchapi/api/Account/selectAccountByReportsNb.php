<?php
//headers
header('Access-Control-Allow-Origin:*');
header('Content-Type: application/json');
//initializing api
include_once('../../core/initialize.php');
//initializing profil
$account=new Account($connection);
$reportsnb = isset($_GET['reportsnb']) ? $_GET['reportsnb'] : die();
//blog post query
$result=$account->selectAccountByReportsNb($reportsnb);
//get the row count

$n=$result->num_rows;
if($n> 0){
    $account_arr = array(); 
    $account_arr['data']=array();
    while($row = mysqli_fetch_assoc($result)){
    extract($row);
    $account_item= array(
        'accountid' => $idAccount,
        'reportsnb' => $ReportsNb
    );
    array_push($account_arr['data'],$account_item);
    }
    //convert to JSON and output
    echo json_encode($account_arr);
}else{
    echo json_encode(array('message'=>'No account found'));
}
?>