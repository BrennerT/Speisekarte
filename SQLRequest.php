<?php
$dbconnect = mysql_connect("host", "benutzername", "passwort");
mysql_set_charset("utf8");
$query = "use datenbank";
if ( !mysql_query($query, $dbconnect) )
     die("Die Datenbank existiert nicht."); 
if($_GET['search'] == "*")
    $sql = mysql_query("SELECT * FROM tabelle ORDER BY name ASC;", $dbconnect);
else
    $sql = mysql_query("SELECT * FROM tabelle WHERE name LIKE '%" . $_GET['search'] . "%'
ORDER BY name ASC;", $dbconnect);
while($row = mysql_fetch_object($sql)) {
     echo "<br />".$row->name;
}
?>
