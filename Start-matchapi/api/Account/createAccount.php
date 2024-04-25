<?php
//headers
header('Access-Control-Allow-Origin:*');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers:Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods,Authorization,X-Requested-With');
//initializing api
include_once('../../core/initialize.php');
//initializing Account
$account=new Account($connection);
$account->idaccount= null;
$account->reportsnb= 0;
//create account
if($account->createAccount()){
    $result=$account->selectAllAccount();
    while($row=mysqli_fetch_array($result)){
        $account->idaccount=$row['idAccount'];
        $account->reportsnb=$row['ReportsNb'];
    }
    echo json_encode(array('message'=>'Account created','idAccount'=>$account->idaccount));

}else {
    echo json_encode(array('message'=> 'Account not Created'));
}
?>