<!DOCTYPE html>
<html lang="en">
<head>
<meta charset=" utf-8">
<title>CS 103 Lab 8 Challenge PHP Page</title>
<link rel="stylesheet" type="text/css" href="">
</head>

<body>

<p>Welcome to my PHP demo page.</p>
<p>Boston local time is
<?php
$t=time();
echo(date("g:ia T D F d Y.",$t));
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