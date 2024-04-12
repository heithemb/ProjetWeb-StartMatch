<?php
//headers
header('Access-Control-Allow-Origin:*');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: Put');
header('Access-Control-Allow-Headers:Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods,Authorization,X-Requested-With');
//initializing api
include_once('../../core/initialize.php');
//initializing account
$account=new Account($connection);
$data=json_decode(file_get_contents('php://input'));
$account->idaccount= $data->idaccount;
$account->reportsnb= $data->reportsnb;
//update profil
if($account->updateAccount()){
    echo json_encode(array('message'=>'Account updated'));

}else {
    echo json_encode(array('message'=> 'Account not updated'));
}
?>