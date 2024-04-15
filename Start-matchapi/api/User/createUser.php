<?php
//headers
header('Access-Control-Allow-Origin:*');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers:Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods,Authorization,X-Requested-With');
//initializing api
include_once('../../core/initialize.php');
//initializing profil
$user=new User($connection);
$account=new Account($connection);
$newsfeed=new NewsFeed($connection);
$profil=new Profil($connection);
$data=json_decode(file_get_contents('php://input'));
$account->idaccount= null;
$account->reportsnb= 0;
//create account
if($account->createAccount()){
    $result=$account->selectAllAccount();
    while($row=mysqli_fetch_array($result)){
        $account->idaccount=$row['idAccount'];
    }
    
    echo json_encode(array('message'=>'Account created','idAccount'=>$account->idaccount));
    $profil->login= $data->email;
    $profil->password= $data->password;
    //create profil
    if($profil->createProfil()){
        echo json_encode(array('message'=>'Profil created'));
        $newsfeed->idnewsfeed= null;
        $newsfeed->lastfilter= null;
        //create newsfeed
        if($newsfeed->createNewsFeed()){
            echo json_encode(array('message'=>'NewsFeed created'));
            $result=$newsfeed->selectAllNewsFeed();
            while($row=mysqli_fetch_array($result)){
            $newsfeed->idnewsfeed=$row['idNewsFeed'];
            }
            $user->iduser=null;
            $user->isperson=$data->isperson;
            $user->profil_login=$data->email;
            $user->email=$data->email;
            $user->phone_num=$data->phone_num;
            $user->field=$data->field;
            $user->bio=$data->bio;
            $user->date= date("Y-m-d h:i:s");
            $user->address=$data->address;
            $user->ppic=$data->ppic;
            $user->cpic=$data->cpic;
            $user->newsfeed_idnewsfeed=$newsfeed->idnewsfeed;
            $user->account_idaccount=$account->idaccount;
            if ($user->isperson==1){
                $user->pfirst_name=$data->pfirst_name;
                $user->plast_name=$data->plast_name;
                $user->pdateofbirth=$data->pdateofbirth;
                $user->pexpertise=$data->pexpertise;
                $user->pjobposition=$data->pjobposition;
                $user->pgender=$data->pgender;
            }else{
                $user->sdateofcreation=$data->sdateofcreation;
                $user->sname=$data->sname;
            }
            //create user   
            if($user->createUser()){
                echo json_encode(array('message'=>'User created'));

            }else {
                echo json_encode(array('message'=> 'User not Created'));
            }       
        }else {
            echo json_encode(array('message'=> 'NewsFeed not Created'));
        }
    }else {
        echo json_encode(array('message'=> 'Profil not Created'));
    }
}else {
    echo json_encode(array('message'=> 'Account not Created'));
}

?>