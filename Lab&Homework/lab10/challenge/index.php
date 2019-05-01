<!DOCTYPE html>
<html lang="en">
<head>
<meta charset=" utf-8">
<title>CS 103 Homework 5 PHP Page</title>
<link rel="stylesheet" type="text/css" href="hw7.css">
</head>

<body>
<p>Welcome to my PHP demo page.</p>
<p>Web server local time is
<?php
ini_set("date.timezone", "America/New_York");
$t=time();
echo(date("g: ia T D F d Y.",$t));
?>

</p>
<p>Have a wonderful
<?php
$d=date("a");
if ($d=="am")
echo " morning!";
else
echo " day!";
?>
</p>

</body>
</html>