<?php
require "connection.php";


$sql = "SELECT * FROM `posts` WHERE 1";
$result = $conn->query($sql);
$data = array();
if ($result->num_rows > 0) {
  // output data of each row
  while($row = $result->fetch_assoc()) {
    $data[] = $row;
  }
}

$cat = "SELECT * FROM `categories` WHERE 1";
$resultcat = $conn->query($cat);
$catdata = array();
if ($resultcat->num_rows > 0) {
  // output data of each row
  while($row = $resultcat->fetch_assoc()) {
    $catdata[] = $row;
  }
}
echo json_encode(['categories'=>$catdata,'posts'=>$data]);



