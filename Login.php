<?php
$uname = $_POST['uname'];
$upswd = $_POST['upswd'];
if (!empty($uname) || !empty($upswd) )
{
$host = "localhost";
$dbusername = "root";
$dbpassword = "";
$dbname = "personal information";
$conn = new mysqli ($host, $dbusername, $dbpassword, $dbname);
  $SELECT = "SELECT uname From login Where uname = ? Limit ";
  $INSERT = "INSERT Into login(uname,upswd )values(?,?)";
  $stmt = $conn->prepare($SELECT);
  $stmt->bind_param("s", $uname);
  $stmt->execute();
  $stmt->bind_result($uname);
  $stmt->store_result();
  $rnum = $stmt->num_rows;
  
      if ($rnum==0) {
      $stmt->close();
      $stmt = $conn->prepare($INSERT);
      $stmt->bind_param("ss", $uname,$upswd1);
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
