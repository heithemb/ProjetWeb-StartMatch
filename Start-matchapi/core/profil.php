<?php
class Profil{
    //db
    private $conn;
    private $table='profil';
    //profil properties
    public $login;
    public $password;
    public function __construct($connection){
        $this->conn = $connection;
    }
    public function selectAllProfil(){
    $query ='SELECT
    *
    FROM 
    '.$this->table;
    //prepare statement
    $stmt= mysqli_query( $this->conn, $query );
    return $stmt;
    }
    public function selectProfilByLogin($login){
        $query = 'SELECT * FROM ' . $this->table . ' WHERE Login = ? LIMIT 1';
        //prepare statement
        $stmt = mysqli_prepare($this->conn, $query);
        mysqli_stmt_bind_param($stmt, "s", $login);
        mysqli_stmt_execute($stmt);
        mysqli_stmt_bind_result($stmt, $colLogin, $colPassword);
        mysqli_stmt_fetch($stmt);
        $this->login = $colLogin;
        $this->password = $colPassword;
    }
    public function selectProfilByLoginPwd(){
        $query = 'SELECT * FROM ' . $this->table . ' WHERE Login = ? AND Password = ? LIMIT 1';
        //prepare statement
        $stmt = mysqli_prepare($this->conn, $query);
        mysqli_stmt_bind_param($stmt, "ss", $this->login, $this->password);
        mysqli_stmt_execute($stmt);
        mysqli_stmt_bind_result($stmt, $colLogin, $colPassword);
        mysqli_stmt_fetch($stmt);
        $this->login = $colLogin;
        $this->password = $colPassword;
    }
    public function createProfil(){
        //create querry
        $query = "INSERT INTO ". $this->table . " SET Login = ?, Password = ?";
        //prepare statement
        $stmt = $this->conn->prepare($query);
        //clean data
        $this->login    =   htmlspecialchars(strip_tags($this->login));
        $this->password =   htmlspecialchars(strip_tags($this->password));
        //binding of parameters
        $stmt->bind_param("ss", $this->login, $this->password);
        //execute the query
        if($stmt->execute()){
            return true;
        }
        //eror mesg
        printf("Error %s. \n",$stmt->error);
        return false;
    }
    public function updateProfil($log){
        //create querry
        $query = "UPDATE ". $this->table . " SET Login = ?, Password = ? WHERE Login= ?";
        //prepare statement
        $stmt = $this->conn->prepare($query);
        //clean data
        $this->login    =   htmlspecialchars(strip_tags($this->login));
        $this->password =   htmlspecialchars(strip_tags($this->password));
        $log            =   htmlspecialchars(strip_tags($log));
        //binding of parameters
        $stmt->bind_param("sss", $this->login, $this->password, $log);
        //execute the query
        if($stmt->execute()){
            return true;
        }
        //eror mesg
        printf("Error %s. \n",$stmt->error);
        return false;
    }
    public function deleteProfil(){
        //create querry
        $query = "DELETE FROM " . $this->table . " WHERE Login= ?";
        //prepare statement
        $stmt = $this->conn->prepare($query);
        //clean data
        $this->login = htmlspecialchars(strip_tags($this->login));
        //binding of parameters
        $stmt->bind_param("s", $this->login);
        if($stmt->execute()){
            return true;
        }
        //eror mesg
        printf("Error %s. \n",$stmt->error);
        return false;
    }
}
?>