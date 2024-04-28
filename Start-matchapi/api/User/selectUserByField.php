<?php
//headers
header('Access-Control-Allow-Origin:*');
header('Content-Type: application/json');
//initializing api
include_once('../../core/initialize.php');
//initializing profil
$user=new User($connection);
$user->field = isset($_GET['field']) ? $_GET['field'] : die();
//blog post query
$result=$user->selectUserByField();
$n=$result->num_rows;
if($n> 0){
    $user_arr = array(); 
    $user_arr['data']=array();
    while($row = mysqli_fetch_assoc($result)){
    extract($row);
    if ($IsPerson==1){
        $person_arr=array(
        'idUser'=>$idUser,
        'email'=>$Email,
        'phone_num'=>$Phone_Num,
        'field'=>$Field,
        'bio'=>$bio,
        'date'=>$date,
        'address'=>$address,
        'ppic'=>base64_encode($ppic),
        'cpic'=>base64_encode($cpic),
        'pfirst_name'=>$PFirst_name,
        'plast_name'=>$PLast_name,
        'pdateofbirth'=>$PDateOfBirth,
        'pexpertise'=>$PExpertise,
        'pjobposition'=>$PJobPosition,
        'pgender'=>$PGender,
        'newsfeed_idnewsfeed'=>$NewsFeed_idNewsFeed,
        'profil_login'=>$Profil_Login,
        'acccount_idaccount'=>$Account_idAccount
        );
    array_push($user_arr['data'],$person_arr);
}else{
        $startup_arr=array(
    'idUser'=>$idUser,
    'Email'=>$Email,
    'phone_num'=>$Phone_Num,
    'field'=>$Field,
    'bio'=>$bio,
    'date'=>$date,
    'address'=>$address,
    'ppic'=>base64_encode($ppic),
    'cpic'=>base64_encode($cpic),    
    'sdateofcreation'=>$SDateOfCreation,
    'sname'=>$SName,
    'newsfeed_idnewsfeed'=>$NewsFeed_idNewsFeed,
    'profil_login'=>$Profil_Login,
    'acccount_idaccount'=>$Account_idAccount
);
array_push($user_arr['data'],$startup_arr);
}
    }
    echo json_encode($user_arr);
}else{
    print_r(json_encode(array('message'=>'no user found')));
}
?>