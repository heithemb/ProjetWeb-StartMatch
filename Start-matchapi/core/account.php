<?php
class Account{
    //db
    private $conn;
    private $table='account';
    //profil properties
    public $idaccount;
    public $reportsnb;
    public function __construct($connection){
        $this->conn = $connection;
    }
    public function selectAllAccount(){
    $query ='SELECT
    *
    FROM 
    '.$this->table;
    //prepare statement
    $stmt= mysqli_query( $this->conn, $query );
    return $stmt;
    }
    public function selectAccountByAccountId($accountid){
        $query = 'SELECT * FROM ' . $this->table . ' WHERE idAccount = ? LIMIT 1';
        //prepare statement
        $stmt = mysqli_prepare($this->conn, $query);
        mysqli_stmt_bind_param($stmt, "s", $accountid);
        mysqli_stmt_execute($stmt);
        mysqli_stmt_bind_result($stmt, $colAccountId, $colReportnb);
        mysqli_stmt_fetch($stmt);
        $this->idaccount = $colAccountId;
        $this->reportsnb = $colReportnb;
    }
    public function selectAccountByReportsNb($nbreports){
        $query ='SELECT * FROM ' . $this->table . ' WHERE ReportsNb >= ?';
        //prepare statement
        $stmt = mysqli_prepare($this->conn, $query);
        mysqli_stmt_bind_param($stmt, "i", $nbreports);
        mysqli_stmt_execute($stmt);
        $result = mysqli_stmt_get_result($stmt);
        mysqli_stmt_close($stmt);
        return $result;
    }
    public function createAccount(){
        //create querry
        $query = "INSERT INTO ". $this->table . " SET ReportsNb = ?";
        //prepare statement
        $stmt = $this->conn->prepare($query);
        //binding of parameters
        $stmt->bind_param("i", $this->reportsnb);
        //execute the query
        if($stmt->execute()){
            return true;
        }
        //eror mesg
        printf("Error %s. \n",$stmt->error);
        return false;
    }
    public function updateAccount(){
        //create querry
        $query = "UPDATE ". $this->table . " SET ReportsNb = ? WHERE idAccount= ?";
        //prepare statement
        $stmt = $this->conn->prepare($query);
        //clean data
        $this->idaccount    =   htmlspecialchars(strip_tags($this->idaccount));
        $this->reportsnb =   htmlspecialchars(strip_tags($this->reportsnb));
        //binding of parameters
        $stmt->bind_param("ss", $this->reportsnb,$this->idaccount);
        //execute the query
        if($stmt->execute()){
            return true;
        }
        //eror mesg
        printf("Error %s. \n",$stmt->error);
        return false;
    }
    public function deleteAccount(){
        //create querry
        $query = "DELETE FROM " . $this->table . " WHERE idAccount= ?";
        //prepare statement
        $stmt = $this->conn->prepare($query);
        //clean data
        $this->idaccount = htmlspecialchars(strip_tags($this->idaccount));
        //binding of parameters
        $stmt->bind_param("s", $this->idaccount);
        if($stmt->execute()){
            return true;
        }
        //eror mesg
        printf("Error %s. \n",$stmt->error);
        return false;
    }
}
?>