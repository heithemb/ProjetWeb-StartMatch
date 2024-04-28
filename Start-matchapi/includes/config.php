<?php 
    define("HOSTNAME", "localhost");
    define("USERNAME", "root");
    define("PASSWORD", "123456");
    define("DATABASE", "start-matchbase");
    define("APP_NAME", "START-MATCH");
$connection = mysqli_connect(HOSTNAME,USERNAME,PASSWORD,DATABASE);
if(!$connection){
    die("connection failed");
}
?>