<?php
class NewsFeed{
    //db
    private $conn;
    private $table='newsfeed';
    //profil properties
    public $idnewsfeed;
    public $lastfilter;
    public function __construct($connection){
        $this->conn = $connection;
    }
    public function selectAllNewsFeed(){
    $query ='SELECT
    *
    FROM 
    '.$this->table;
    //prepare statement
    $stmt= mysqli_query( $this->conn, $query );
    return $stmt;
    }
    public function selectNewsFeedByIdNewsFeed(){
        $query = 'SELECT * FROM ' . $this->table . ' WHERE idNewsFeed = ? LIMIT 1';
        //prepare statement
        $stmt = mysqli_prepare($this->conn, $query);
        mysqli_stmt_bind_param($stmt, "s", $this->idnewsfeed);
        mysqli_stmt_execute($stmt);
        mysqli_stmt_bind_result($stmt, $colIdNewsFeed, $colLastFilter);
        mysqli_stmt_fetch($stmt);
        $this->idnewsfeed = $colIdNewsFeed;
        $this->lastfilter = $colLastFilter;
    }
    public function createNewsFeed(){
        //create querry
        $query = "INSERT INTO ". $this->table . " SET LastFilter = ?";
        //prepare statement
        $stmt = $this->conn->prepare($query);
        //binding of parameters
        $stmt->bind_param("s", $this->lastfilter);
        //execute the query
        if($stmt->execute()){
            return true;
        }
        //eror mesg
        printf("Error %s. \n",$stmt->error);
        return false;
    }
    public function updateNewsFeed(){
        //create querry
        $query = "UPDATE ". $this->table . " SET LastFilter = ? WHERE idNewsFeed= ?";
        //prepare statement
        $stmt = $this->conn->prepare($query);
        //clean data
        $this->idnewsfeed    =   htmlspecialchars(strip_tags($this->idnewsfeed));
        $this->lastfilter =   htmlspecialchars(strip_tags($this->lastfilter));
        //binding of parameters
        $stmt->bind_param("ss", $this->lastfilter,$this->idnewsfeed);
        //execute the query
        if($stmt->execute()){
            return true;
        }
        //eror mesg
        printf("Error %s. \n",$stmt->error);
        return false;
    }
    public function deleteNewsFeed(){
        //create querry
        $query = "DELETE FROM " . $this->table . " WHERE idNewsFeed= ?";
        //prepare statement
        $stmt = $this->conn->prepare($query);
        //clean data
        $this->idnewsfeed = htmlspecialchars(strip_tags($this->idnewsfeed));
        //binding of parameters
        $stmt->bind_param("s", $this->idnewsfeed);
        if($stmt->execute()){
            return true;
        }
        //eror mesg
        printf("Error %s. \n",$stmt->error);
        return false;
    }
}
?>