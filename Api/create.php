<?php
require "connection.php";

if (isset($_POST['sub'])) {
    $title = $_POST['title'];
    $author = $_POST['author'];
    $excerpt = "";
    $description = $_POST['description'];
    $images = $_FILES['file']['name'];

    // Escape special characters to prevent SQL injection
    $title = $conn->real_escape_string($title);
    $author = $conn->real_escape_string($author);
    $description = $conn->real_escape_string($description);
    // Set the maximum length for the excerpt
$maxExcerptLength = 100;

// Extract the excerpt
$excerpt = substr($description, 0, $maxExcerptLength);

// Check if the description was longer than the excerpt
if (strlen($description) > $maxExcerptLength) {
    $excerpt .= '...'; // Add ellipsis at the end to indicate truncation
}
    
    

    $sql = "INSERT INTO `posts`(`title`, `author`, `excpert`, `description`, `images`) VALUES ('$title','$author','$excerpt','$description','$images')";

    if ($conn->query($sql)) {
        move_uploaded_file($images['tmp_name'],"image/". $images['name']);
        echo json_encode(["success"=>true,"message"=>"Data inserted successfully."]) ;
    } else {
        echo json_encode(["success"=>false,"message"=>$conn->error]);
    }
}

?>