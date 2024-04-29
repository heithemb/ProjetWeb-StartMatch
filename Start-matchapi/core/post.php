<?php
class Post{
    //db
    private $conn;
    private $table='post';
    //profil properties
    public $idpost;
    public $tags;
    public $dateofcreation;
    public $savesnb;
    public $reactnb;
    public $reportnb;
    public  $mediacontent;
    public $field;
    public $textcontent;
    public $user_iduser;

    public function __construct($connection){
        $this->conn = $connection;
    }
    public function selectAllPosts(){
    $query ='SELECT
    *
    FROM 
    '.$this->table;
    //prepare statement
    $stmt= mysqli_query( $this->conn, $query );
    return $stmt;
    }
    
    public function selectPostByIdPost(){
        $query = 'SELECT * FROM ' . $this->table . ' WHERE idPost = ? LIMIT 1';
        //prepare statement
        $stmt = mysqli_prepare($this->conn, $query);
        mysqli_stmt_bind_param($stmt, "s", $this->idpost);
        mysqli_stmt_execute($stmt);
        mysqli_stmt_bind_result($stmt, $colIdPost, $colDateOfCreation,$colSavesNb,$colReactNb,$colReportNb,$colTags,$colMediaContent,$colField,$colTextContent,$colUser_idUser);
        mysqli_stmt_fetch($stmt);
        $this->idpost = $colIdPost;
        $this->dateofcreation = $colDateOfCreation;
        $this->user_iduser = $colUser_idUser;
        $this->savesnb = $colSavesNb;
        $this->reactnb = $colReactNb;
        $this->reportnb = $colReportNb;
        $this->tags= $colTags;
        $this->mediacontent = $colMediaContent;
        $this->textcontent = $colTextContent;
        $this->field= $colField;

    }
    
    public function selectPostByField(){
        $query ='SELECT * FROM ' . $this->table . ' WHERE Field like ?';
        //prepare statement
        $stmt = mysqli_prepare($this->conn, $query);
        mysqli_stmt_bind_param($stmt, "s", $this->field);
        mysqli_stmt_execute($stmt);
        $result = mysqli_stmt_get_result($stmt);
        mysqli_stmt_close($stmt);
        return $result;
    }
    public function selectPostByNbReports(){
        $query ='SELECT * FROM ' . $this->table . ' WHERE ReportNb - 0';
        //prepare statement
        $stmt = mysqli_prepare($this->conn, $query);
        mysqli_stmt_execute($stmt);
        $result = mysqli_stmt_get_result($stmt);
        mysqli_stmt_close($stmt);
        return $result;
    }
    public function selectPostByDate(){
        $query ='SELECT * FROM ' . $this->table . ' WHERE DateOfCreation >= ?';
        //prepare statement
        $stmt = mysqli_prepare($this->conn, $query);
        mysqli_stmt_bind_param($stmt, "s", $this->dateofcreation);
        mysqli_stmt_execute($stmt);
        $result = mysqli_stmt_get_result($stmt);
        mysqli_stmt_close($stmt);
        return $result;
    }
    public function selectPostByTags(){
        $query ='SELECT * FROM ' . $this->table . ' WHERE Tags like ?';
        //prepare statement
        $stmt = mysqli_prepare($this->conn, $query);
        mysqli_stmt_bind_param($stmt, "s", $this->tags);
        mysqli_stmt_execute($stmt);
        $result = mysqli_stmt_get_result($stmt);
        mysqli_stmt_close($stmt);
        return $result;
    }
    public function selectPostByUserIdUser(){
        $query ='SELECT * FROM ' . $this->table . ' WHERE User_idUser = ?';
        //prepare statement
        $stmt = mysqli_prepare($this->conn, $query);
        mysqli_stmt_bind_param($stmt, "s", $this->user_iduser);
        mysqli_stmt_execute($stmt);
        $result = mysqli_stmt_get_result($stmt);
        mysqli_stmt_close($stmt);
        return $result;
    }
    public function selectPostByFilter(){
        $param=array();
        $s="";
        $query ='SELECT * FROM ' . $this->table . ' WHERE ';
        if ($this->dateofcreation!=null){
            $query.= 'DateOfCreation >= ? AND ';
            array_push($param, $this->dateofcreation);
            $s.="s";
            
        }
        if ($this->tags!=null){
            $query.= 'Tags LIKE ? AND ';
            array_push($param, $this->tags);
            $s.="s";
        }
        if ($this->field!=null){
            $query.= 'Field LIKE ? AND ';
            array_push($param, $this->field);
            $s.="s";
        }
        if ($this->user_iduser!=null){
            $query.= 'User_idUser = ? AND ';
            array_push($param, $this->user_iduser);
            $s.="i";
        }
        $query=substr($query, 0, -4);
        //prepare statement
        $stmt = mysqli_prepare($this->conn, $query);
        mysqli_stmt_bind_param($stmt, $s, ...$param);
        mysqli_stmt_execute($stmt);
        $result = mysqli_stmt_get_result($stmt);
        mysqli_stmt_close($stmt);
        return $result;
    }
    public function createPost(){
        //create querry
        $query = "INSERT INTO ". $this->table . " SET  DateOfCreation= ? , SavesNb = 0 ,ReactNb = 0 ,ReportNb = 0 , Tags = ? ,MediaContent = ? ,Field = ? ,TextContent = ? ,User_iduser = ? ";
        //prepare statement
        $stmt = $this->conn->prepare($query);
        //binding of parameters
        $this->mediacontent=file_get_contents($this->mediacontent);
        $stmt->bind_param("sssssi",$this->dateofcreation,$this->tags,$this->mediacontent,$this->field,$this->textcontent,$this->user_iduser);
        //execute the query
        if($stmt->execute()){
            return true;
        }
        //eror mesg
        printf("Error %s. \n",$stmt->error);
        return false;
    }
    public function updatePost(){
        //create querry
        $query = "Update ". $this->table . " SET  SavesNb = ? ,ReactNb = ? ,ReportNb = ? , Tags = ? ,Field = ? ,TextContent = ? 
        
            where idPost= ?";
            //$query = "Update ". $this->table . " SET  SavesNb = ? ,ReactNb = ? ,ReportNb = ? , Tags = ? ,MediaContent = ? ,Field = ? ,TextContent = ? 
        
          //  where idPost= ?";
        //prepare statement
        $stmt = $this->conn->prepare($query);
        //clean data
        $this->idpost    =   htmlspecialchars(strip_tags($this->idpost));
        $this->savesnb =   htmlspecialchars(strip_tags($this->savesnb));
        $this->reactnb = htmlspecialchars(strip_tags($this->reactnb));
        $this->reportnb    =   htmlspecialchars(strip_tags($this->reportnb));
        $this->tags =   htmlspecialchars(strip_tags($this->tags));
        //$this->mediacontent = htmlspecialchars(strip_tags($this->mediacontent));
        $this->field    =   htmlspecialchars(strip_tags($this->field));
        $this->textcontent =   htmlspecialchars(strip_tags($this->textcontent));
        //$this->mediacontent=file_get_contents($this->mediacontent);
        //binding of parameters
        $stmt->bind_param("iiisssi",$this->savesnb,$this->reactnb,$this->reportnb,$this->tags,$this->field,$this->textcontent,$this->idpost);
        //execute the query
        if($stmt->execute()){
            return true;
        }
        //eror mesg
        printf("Error %s. \n",$stmt->error);
        return false;
    }
    public function updatePosttext(){
        //create querry
        $query = "Update ". $this->table . " SET TextContent = ? 
        
            where idPost= ?";
            //$query = "Update ". $this->table . " SET  SavesNb = ? ,ReactNb = ? ,ReportNb = ? , Tags = ? ,MediaContent = ? ,Field = ? ,TextContent = ? 
        
          //  where idPost= ?";
        //prepare statement
        $stmt = $this->conn->prepare($query);
        //clean data
        $this->textcontent =   htmlspecialchars(strip_tags($this->textcontent));
        //$this->mediacontent=file_get_contents($this->mediacontent);
        //binding of parameters
        $stmt->bind_param("si",$this->textcontent,$this->idpost);
        //execute the query
        if($stmt->execute()){
            return true;
        }
        //eror mesg
        printf("Error %s. \n",$stmt->error);
        return false;
    }
    public function deletePost(){
        //create querry
        $query = "DELETE FROM " . $this->table . " WHERE idPost= ?";
        //prepare statement
        $stmt = $this->conn->prepare($query);
        //clean data
        $this->idpost = htmlspecialchars(strip_tags($this->idpost));
        //binding of parameters
        $stmt->bind_param("i", $this->idpost);
        if($stmt->execute()){
            return true;
        }
        //eror mesg
        printf("Error %s. \n",$stmt->error);
        return false;
    }
    public function deleteAllPost(){
        $query = "DELETE FROM " . $this->table . " WHERE User_idUser= ?";
        $stmt = $this->conn->prepare($query);
         //clean data
        $this->user_iduser = htmlspecialchars(strip_tags($this->user_iduser));
//binding of parameters
        $stmt->bind_param("i", $this->user_iduser);
if($stmt->execute()){
    return true;
}
//eror mesg
printf("Error %s. \n",$stmt->error);
    }
}
?>