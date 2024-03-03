<?php
$uname = $_POST['uname'];
$email  = $_POST['email'];
$upswd = $_POST['upswd'];
$phoneno = $_POST['phoneno'];

if (!empty($uname) || !empty($email)  ||!empty($upswd)|| !empty($phoneno) )
{
$host = "localhost";
$dbusername = "root";
$dbpassword = "";
$dbname = "personal information";
$conn = new mysqli ($host, $dbusername, $dbpassword, $dbname);
if (mysqli_connect_error()){
  die('Connect Error ('. mysqli_connect_errno() .') '
    . mysqli_connect_error());
}
else{
  $SELECT = "SELECT email From register Where email = ? Limit 1";
  $INSERT = "INSERT Into register (uname , email ,upswd, phoneno )values(?,?,?,?)";
  $stmt = $conn->prepare($SELECT);
  $stmt->bind_param("s", $email);
  $stmt->execute();
  $stmt->bind_result($email);
  $stmt->store_result();
  $rnum = $stmt->num_rows;
      if ($rnum==0) {
      $stmt->close();
      $stmt = $conn->prepare($INSERT);
      $stmt->bind_param("ssss", $uname,$email,$upswd,$phoneno);
      $stmt->execute();
      echo "New record inserted sucessfully";
     } else {
      echo "Someone already register using this email";
     }
     $stmt->close();
     $conn->close();
    }
} else {
 echo "All field are required";
 die();
}
?>
