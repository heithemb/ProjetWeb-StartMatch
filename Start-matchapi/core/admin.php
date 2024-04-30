<?php
class Admin{
    //db
    private $conn;
    private $table='admin';
    //profil properties
    public $idadmin;
    public $name;
    public $profil_login;
    public function __construct($connection){
        $this->conn = $connection;
    }
    public function selectAllAdmin(){
    $query ='SELECT
    *
    FROM 
    '.$this->table;
    //prepare statement
    $stmt= mysqli_query( $this->conn, $query );
    return $stmt;
    }
    public function selectAdminByLogin($login){
        $query = 'SELECT * FROM ' . $this->table . ' WHERE Profil_Login = ? LIMIT 1';
        //prepare statement
        $stmt = mysqli_prepare($this->conn, $query);
        mysqli_stmt_bind_param($stmt, "s", $login);
        mysqli_stmt_execute($stmt);
        mysqli_stmt_bind_result($stmt, $colLogin, $colName,$colIdAdmin);
        mysqli_stmt_fetch($stmt);
        $this->profil_login = $colLogin;
        $this->name = $colName;
        $this->idadmin=$colIdAdmin;
    }
    public function selectAdminByIdAdmin(){
        $query = 'SELECT * FROM ' . $this->table . ' WHERE idAdmin = ? LIMIT 1';
        //prepare statement
        $stmt = mysqli_prepare($this->conn, $query);
        mysqli_stmt_bind_param($stmt, "i", $this->idadmin);
        mysqli_stmt_execute($stmt);
        mysqli_stmt_bind_result($stmt, $colIdAdmin, $colName,$colLogin);
        mysqli_stmt_fetch($stmt);
        $this->profil_login = $colLogin;
        $this->name = $colName;
        $this->idadmin=$colIdAdmin;
    }
    public function createAdmin(){
        //create querry
        $query = "INSERT INTO ". $this->table . " SET Profil_Login = ?, Name = ?";
        //prepare statement
        $stmt = $this->conn->prepare($query);
        //clean data
        $this->profil_login    =   htmlspecialchars(strip_tags($this->profil_login));
        $this->name =   htmlspecialchars(strip_tags($this->name));
        //binding of parameters
        $stmt->bind_param("ss", $this->profil_login, $this->name);
        //execute the query
        if($stmt->execute()){
            return true;
        }
        //eror mesg
        printf("Error %s. \n",$stmt->error);
        return false;
    } 
    public function updateAdmin(){
        //create querry
        $query = "UPDATE ". $this->table . " SET Profil_Login = ?, Name = ? WHERE idAdmin= ?";
        //prepare statement
        $stmt = $this->conn->prepare($query);
        //clean data
        $this->profil_login    =   htmlspecialchars(strip_tags($this->profil_login));
        $this->password =   htmlspecialchars(strip_tags($this->name));
        $this->idadmin            =   htmlspecialchars(strip_tags($this->idadmin));
        //binding of parameters
        $stmt->bind_param("ssi", $this->profil_login, $this->name, $this->idadmin);
        //execute the query
        if($stmt->execute()){
            return true;
        }
        //eror mesg
        printf("Error %s. \n",$stmt->error);
        return false;
    }
    public function deleteAdmin(){
        //create querry
        $query = "DELETE FROM " . $this->table . " WHERE idAdmin= ?";
        //prepare statement
        $stmt = $this->conn->prepare($query);
        //clean data
        $this->idadmin = htmlspecialchars(strip_tags($this->idadmin));
        //binding of parameters
        $stmt->bind_param("i", $this->idadmin);
        if($stmt->execute()){
            return true;
        }
        //eror mesg
        printf("Error %s. \n",$stmt->error);
        return false;
    }
}
?>