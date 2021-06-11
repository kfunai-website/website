<?php
                                try{
                                    function console_log($output, $with_script_tags = true) {
                                        $js_code = 'console.log(' . json_encode($output, JSON_HEX_TAG) . 
                                    ');';
                                        if ($with_script_tags) {
                                            $js_code = '<script>' . $js_code . '</script>';
                                        }
                                        echo $js_code;
                                    }
                                  $conn = new mysqli("localhost", "root", "devmodeon","kfunai"); // Establishing Connection with Server
                                  if ($conn->connect_error) {
                                      die("Connection failed: " . $conn->connect_error);
                                   } 
                                  if(isset($_POST['submit']))
                                  { // Fetching variables of the form which travels in URL
                                      $name = $_POST['name'];
                                      $email = $_POST['email'];
                                      $subject = $_POST['subject'];
                                      $message = $_POST['message'];
                                      //$cv = $_POST['cv'];
                                     // $_FILES=$_POST['cv'];
                                     
                                       
                                       $sql ="insert into kfunai.contact_responses(name,email,subject,message) values ('$name','$email','$subject','$message')";
                                      
                                      if($name !=''||$email !=''){
                                      //Insert Query of SQL
                                      if (mysqli_query($conn, $sql)) 
                                      {
                                        $message = "Data Submitted";
                                        echo "<script type='text/javascript'>alert('$message');</script>";
                                        // echo "New record created successfully";
                                     } else {
                                        $message = "Submission Error!!";
                                        echo "<script type='text/javascript'>alert('$message');</script>";
                                     }
                                  }
                                  else{
                                      $message = "Insertion Failed.. Some Fields are Blank....!!";
                                      echo "<script type='text/javascript'>alert('$message');</script>";
                                  }
                                  // header( "Location: {$_SERVER['REQUEST_URI']}", true, 303 );
                                  // exit(); 
                                  }
                                    // Closing Connection with Server
                                   $conn->close();
                                
                                }
                                catch(Exception $e) {
                                  echo 'Message: ' .$e->getMessage();
                                }
                                
                                ?>