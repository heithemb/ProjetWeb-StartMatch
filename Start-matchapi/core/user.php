<?php
class User{
    //db
    private $conn;
    private $table='user';
    //profil properties
    public $iduser;
    public $email;
    public $phone_num;
    public $field;
    public $bio;
    public $date;
    public $address;
    public $ppic;
    public $cpic;
    public $pfirst_name;
    public $plast_name;
    public $pdateofbirth;
    public $pexpertise;
    public $pjobposition;
    public $pgender;
    public $sdateofcreation;
    public $sname;
    public $isperson;
    public $newsfeed_idnewsfeed;
    public $profil_login;
    public $account_idaccount;
    public function __construct($connection){
        $this->conn = $connection;
    }
    public function selectAllUsers(){
    $query ='SELECT
    *
    FROM 
    '.$this->table;
    //prepare statement
    $stmt= mysqli_query( $this->conn, $query );
    return $stmt;
    }
    public function selectUserByLogin(){
        $query = 'SELECT * FROM ' . $this->table . ' WHERE Profil_Login = ? LIMIT 1';
        //prepare statement
        $stmt = mysqli_prepare($this->conn, $query);
        mysqli_stmt_bind_param($stmt, "s", $this->profil_login);
        mysqli_stmt_execute($stmt);
        mysqli_stmt_bind_result($stmt, $colidUser,$colEmail, $colPhone_Num,$colField,$colBio,$colDate, $colAddress,$colPPic,$colCPic,$colPFirst_Name, $colPLast_Name,$colPDateOfBirth,$colPExpertise,$colPJobPosition,$colPGender,$colSDateOfCreation,$colSName,$colIsPerson,$colNewsFeed_idNewsFeed, $colProfil_Login,$colAccount_idAccount);
        mysqli_stmt_fetch($stmt);
        $this->iduser = $colidUser;
        $this->email = $colEmail;
        $this->phone_num=$colPhone_Num;
        $this->field = $colField;
        $this->bio = $colBio;
        $this->date=$colDate;
        $this->address = $colAddress;
        $this->ppic = $colPPic;
        $this->cpic=$colCPic;
        $this->pfirst_name = $colPFirst_Name;
        $this->plast_name = $colPLast_Name;
        $this->pdateofbirth= $colPDateOfBirth;
        $this->pexpertise=$colPExpertise;
        $this->pjobposition=$colPJobPosition;
        $this->pgender=$colPGender;
        $this->sdateofcreation=$colSDateOfCreation;
        $this->sname= $colSName;
        $this->isperson=$colIsPerson;
        $this->newsfeed_idnewsfeed=$colNewsFeed_idNewsFeed;
        $this->profil_login=$colProfil_Login;
        $this->account_idaccount=$colAccount_idAccount;
    }
    public function selectUserByIdUser(){
        $query = 'SELECT * FROM ' . $this->table . ' WHERE idUser = ? LIMIT 1';
        //prepare statement
        $stmt = mysqli_prepare($this->conn, $query);
        mysqli_stmt_bind_param($stmt, "i", $this->iduser);
        mysqli_stmt_execute($stmt);
        mysqli_stmt_bind_result($stmt, $colidUser,$colEmail, $colPhone_Num,$colField,$colBio,$colDate, $colAddress,$colPPic,$colCPic,$colPFirst_Name, $colPLast_Name,$colPDateOfBirth,$colPExpertise,$colPJobPosition,$colPGender,$colSDateOfCreation,$colSName,$colIsPerson,$colNewsFeed_idNewsFeed, $colProfil_Login,$colAccount_idAccount);
        mysqli_stmt_fetch($stmt);
        $this->iduser = $colidUser;
        $this->email = $colEmail;
        $this->phone_num=$colPhone_Num;
        $this->field = $colField;
        $this->bio = $colBio;
        $this->date=$colDate;
        $this->address = $colAddress;
        $this->ppic = $colPPic;
        $this->cpic=$colCPic;
        $this->pfirst_name = $colPFirst_Name;
        $this->plast_name = $colPLast_Name;
        $this->pdateofbirth= $colPDateOfBirth;
        $this->pexpertise=$colPExpertise;
        $this->pjobposition=$colPJobPosition;
        $this->pgender=$colPGender;
        $this->sdateofcreation=$colSDateOfCreation;
        $this->sname= $colSName;
        $this->isperson=$colIsPerson;
        $this->newsfeed_idnewsfeed=$colNewsFeed_idNewsFeed;
        $this->profil_login=$colProfil_Login;
        $this->account_idaccount=$colAccount_idAccount;
    }
    public function createUser(){
        //clean data user
        $this->isperson=htmlspecialchars(strip_tags($this->isperson));
        $this->profil_login    =   htmlspecialchars(strip_tags($this->profil_login));
        $this->email = htmlspecialchars(strip_tags($this->email));
        $this->phone_num=htmlspecialchars(strip_tags($this->phone_num));
        $this->field = htmlspecialchars(strip_tags($this->field));
        $this->bio = htmlspecialchars(strip_tags($this->bio));
        $this->date=htmlspecialchars(strip_tags($this->date));
        $this->address = htmlspecialchars(strip_tags($this->address));
        $this->ppic = htmlspecialchars(strip_tags($this->ppic));
        $this->cpic=htmlspecialchars(strip_tags($this->cpic));
        $this->newsfeed_idnewsfeed=htmlspecialchars(strip_tags($this->newsfeed_idnewsfeed));
        $this->account_idaccount=htmlspecialchars(strip_tags($this->account_idaccount));
        //create querry
        $query = "INSERT INTO ". $this->table . " SET  IsPerson = ?,Profil_Login = ?,Email = ?, Phone_Num = ? ,Field = ?,bio = ?,date = ?, address = ? ,ppic = ?,cpic = ?, NewsFeed_idNewsFeed = ? ,Account_idAccount = ?";
        if($this->isperson==1){
        //clean data person
        $this->pfirst_name = htmlspecialchars(strip_tags($this->pfirst_name));
        $this->plast_name = htmlspecialchars(strip_tags($this->plast_name));
        $this->pdateofbirth= htmlspecialchars(strip_tags($this->pdateofbirth));
        $this->pexpertise=htmlspecialchars(strip_tags($this->pexpertise));
        $this->pjobposition=htmlspecialchars(strip_tags($this->pjobposition));
        $this->pgender=htmlspecialchars(strip_tags($this->pgender));
        //complete query
        $query.=" , PFirst_name = ? , PLast_name = ? , PDateOfBirth = ? , PExpertise = ? , PJobPosition = ? , PGender = ?";

        }
        else{
            //clean data startup
            $this->sdateofcreation=htmlspecialchars(strip_tags($this->sdateofcreation));
            $this->sname= htmlspecialchars(strip_tags($this->sname));
            //complete query
            $query.=", SDateOfCreation = ? , SName = ? ";

        }
        //prepare statement
        $stmt = $this->conn->prepare($query);
        if($this->ppic!=""){
        $this->ppic=file_get_contents($this->ppic);
        }else{
            $this->ppic= null;
        }
        if($this->cpic!=""){
            $this->cpic=file_get_contents($this->cpic);
        }else{
            $this->cpic= null;
        }
        //binding of parameters
        if ($this->isperson== 1) {
            $stmt->bind_param("ississssssiissssss", $this->isperson,$this->profil_login, $this->email,$this->phone_num,$this->field, $this->bio,$this->date,$this->address, $this->ppic,$this->cpic,$this->newsfeed_idnewsfeed, $this->account_idaccount,$this->pfirst_name,$this->plast_name, $this->pdateofbirth,$this->pexpertise,$this->pjobposition, $this->pgender);
        }else{
            $stmt->bind_param("ississssssiiss", $this->isperson,$this->profil_login, $this->email,$this->phone_num,$this->field, $this->bio,$this->date,$this->address, $this->ppic,$this->cpic,$this->newsfeed_idnewsfeed, $this->account_idaccount,$this->sdateofcreation,$this->sname);
        }
        //execute the query
        if($stmt->execute()){
            return true;
        }
        //eror mesg
        printf("Error %s. \n",$stmt->error);
        return false;
    }
    public function updateUser(){
        //clean data user
        $this->isperson=htmlspecialchars(strip_tags($this->isperson));
        $this->email = htmlspecialchars(strip_tags($this->email));
        $this->phone_num=htmlspecialchars(strip_tags($this->phone_num));
        $this->field = htmlspecialchars(strip_tags($this->field));
        $this->bio = htmlspecialchars(strip_tags($this->bio));
        $this->date=htmlspecialchars(strip_tags($this->date));
        $this->address = htmlspecialchars(strip_tags($this->address));
        $this->ppic = htmlspecialchars(strip_tags($this->ppic));
        $this->cpic=htmlspecialchars(strip_tags($this->cpic));
        //create querry
        $query = "UPDATE ". $this->table . " SET  Email = ?, Phone_Num = ? ,Field = ?,bio = ?, address = ? ,ppic = ?,cpic = ? ";
        if($this->isperson==1){
        //clean data person
        $this->pfirst_name = htmlspecialchars(strip_tags($this->pfirst_name));
        $this->plast_name = htmlspecialchars(strip_tags($this->plast_name));
        $this->pdateofbirth= htmlspecialchars(strip_tags($this->pdateofbirth));
        $this->pexpertise=htmlspecialchars(strip_tags($this->pexpertise));
        $this->pjobposition=htmlspecialchars(strip_tags($this->pjobposition));
        $this->pgender=htmlspecialchars(strip_tags($this->pgender));
        //complete query
        $query.=" , PFirst_name = ? , PLast_name = ? , PDateOfBirth = ? , PExpertise = ? , PJobPosition = ? , PGender = ?";

        }
        else{
            //clean data startup
            $this->sdateofcreation=htmlspecialchars(strip_tags($this->sdateofcreation));
            $this->sname= htmlspecialchars(strip_tags($this->sname));
            //complete query
            $query.=" , SDateOfCreation = ? , SName = ? ";

        }
        $query.=" WHERE idUser = ? ";
        //prepare statement
        $stmt = $this->conn->prepare($query);
        if($this->ppic!=""){
            $this->ppic=file_get_contents($this->ppic);
            }else{
                $this->ppic= null;
            }
        if($this->cpic!=""){
            $this->cpic=file_get_contents($this->cpic);
        }else{
            $this->cpic=null;
        }
        //binding of parameters
        if ($this->isperson== 1) {
            $stmt->bind_param("sisssssssssssi",  $this->email,$this->phone_num,$this->field, $this->bio,$this->address, $this->ppic,$this->cpic,$this->pfirst_name,$this->plast_name, $this->pdateofbirth,$this->pexpertise,$this->pjobposition, $this->pgender,$this->iduser);
        }else{
            $stmt->bind_param("sisssssssi",  $this->email,$this->phone_num,$this->field, $this->bio,$this->address, $this->ppic,$this->cpic,$this->sdateofcreation,$this->sname,$this->iduser);
        }
        //execute the query
        if($stmt->execute()){
            return true;
        }
        //eror mesg
        printf("Error %s. \n",$stmt->error);
        return false;
    }
    public function deleteUser(){
        //create querry
        $query = "DELETE FROM " . $this->table . " WHERE idUser= ?";
        //prepare statement
        $stmt = $this->conn->prepare($query);
        //clean data
        $this->iduser = htmlspecialchars(strip_tags($this->iduser));
        //binding of parameters
        $stmt->bind_param("i", $this->iduser);
        if($stmt->execute()){
            return true;
        }
        //eror mesg
        printf("Error %s. \n",$stmt->error);
        return false;
    }
}
?>