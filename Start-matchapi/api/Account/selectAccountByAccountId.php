<?php
//headers
header('Access-Control-Allow-Origin:*');
header('Content-Type: application/json');
//initializing api
include_once('../../core/initialize.php');
//initializing profil
$account=new Account($connection);
$account->idaccount = isset($_GET['idaccount']) ? $_GET['idaccount'] : die();
//blog post query
$account->selectAccountByAccountId($account->idaccount);
//get the row count
$Account_arr=array(
    'idaccount'=>$account->idaccount,
    'reportsnb'=>$account->reportsnb
);
print_r(json_encode($Account_arr));
?>