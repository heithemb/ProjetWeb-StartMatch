<?php
//headers
header('Access-Control-Allow-Origin:*');
header('Content-Control-Allow-Methods: DELETE');
header('Access-Control-Allow-Headers:Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods,Authorization,X-Requested-With');
header('Content-Type: application/json');

//initializing api
include_once('../../core/initialize.php');

//initializing profil
$user=new User($connection);
$profil=new Profil($connection);
$newsfeed=new NewsFeed($connection);
$post=new Post($connection);
$account=new Account($connection);
// retrieve iduser parameter
$iduser = isset($_GET['iduser']) ? $_GET['iduser'] : die();

if (!$iduser) {
    http_response_code(400);
    echo json_encode(array('message' => 'Invalid iduser parameter'));
    exit;
}

try {
    // start transaction
    $connection->begin_transaction();
    $user->iduser= $iduser;
    $user->selectUserByIdUser();
    $post->user_iduser= $iduser;
    $profil->login=$user->profil_login;
    $newsfeed->idnewsfeed=$user->newsfeed_idnewsfeed;
    $account->idaccount=$user->account_idaccount;
    echo json_encode($user->iduser);
    // delete posts
    if (!$post->deleteAllPost()) {
        throw new Exception('Failed to delete posts');
    }

    // delete user
    if (!$user->deleteUser()) {
        throw new Exception('Failed to delete user');
    }

    // delete profil
    if (!$profil->deleteProfil()) {
        throw new Exception('Failed to delete profil');
}

    // delete newsfeed
    if (!$newsfeed->deleteNewsFeed()) {
        throw new Exception('Failed to delete newsfeed');
    }
    if (!$account->deleteAccount()) {
        throw new Exception('Failed to delete Account');
    }

    // commit transaction
    $connection->commit();

    echo json_encode(array('message' => 'User deleted'));
} catch (Exception $e) {
    // rollback transaction
    $connection->rollback();

    http_response_code(500);
    echo json_encode(array('message' => 'Error deleting user: '. $e->getMessage()));
}
?>