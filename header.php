<?php

  echo
    "<!DOCTYPE html>
    <html lang=\"en\">

    <head>
      <meta charset=\"UTF-8\">
      <title>OUCC</title>

      <!-- STYLESHEETS -->
      <link rel=\"stylesheet\" href=\"css/font-awesome.css\">
      <link rel=\"stylesheet\" href=\"css/flexboxgrid.css\">
      <link rel=\"stylesheet\" href=\"css/style.css\">

      <!-- JAVASCRIPT -->
      <script src=\"js/jquery.min.js\"></script>

      <!-- ICON -->
      <link rel=\"icon\" href=\"img/oucc.png\">
    </head>

    <body>
    <!-- HEADER -->
    <header id=\"main-header\">
     <div class=\"conatiner\">
       <div class=\"row center-xs center-sm center-md end-lg middle-xs middle-sm middle-md middle-lg\">
         <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-6 start-lg\">
           <h1 id=\"title\"><span class=\"primary-text\">Otago University Canoe Club</span></h1>
         </div>
         <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-6\">
           <nav id=\"navbar\">
             <ul>
               <li class=\"current\"><a class=\"main-nav\" href=\"index.html\">Home</a></li>
               <li>
                 <div class=\"dropdown\">
                   <a href=\"about.html\"class=\"dropdown-link main-nav\">About</a>
                   <div class=\"dropdown-content\">
                     <a href=\"about.html\">About Us</a>
                     <a href=\"meet.html\">Meet The Team</a>
                   </div>
                 </div>
               </li>
               <li>
                 <div class=\"dropdown\">
                   <a href=\"events.html\" class=\"dropdown-link main-nav\">Events</a>
                   <div class=\"dropdown-content\">
                     <a href=\"events.html\">Calendar</a>
                     <a href=\"#\" id=\"development\">Sign Up</a>
                   </div>
                 </div>
               </li>
               <li><a class=\"main-nav\" href=\"blog.html\">Blog</a></li>
               <li><a class=\"main-nav\" href=\"contact.html\">Contact</a></li>
             </ul>
           </nav>
         </div>
       </div>
     </div>
    </header>";

 ?>
