<?php
$fp = fopen('db.csv', 'a+');
fputcsv($fp, $_POST);
fclose($fp);
?>