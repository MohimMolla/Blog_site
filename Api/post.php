<?php
require "connection.php";
if (isset($_GET['id'])){
      $getid=$_GET['id'];
      $sql = "SELECT * FROM posts WHERE id='{$getid}'";
      $result = $conn->query($sql);
      $data = array();
      if ($result->num_rows ) {
            $row = $result->fetch_assoc();
      }
      else{
            $row=null;
      }
      echo json_encode($row);
}

?>