
// To read contents from the server:

// example:

var a= new XMLHttpRequest();
a.onreadystatechange = function() {
	if (this.readyState==4 && this.status==200){
		document.getElementById("id").innerHTML=this.responseText;

	}
};
a.open("GET"/*or "POST" to write*/,"url",true /*for asynchronous*/);
a.send();



// To post contents into the server:

function func_name() {
	var a= new new XMLHttpRequest();
a.onreadystatechange = function() {
	if (this.readyState==4 && this.status==200){
		document.getElementById("id").innerHTML=this.responseText;

	}
};
var var_name = document.getElementById("id");
	.
	.
	.
var val = "name="+var_name1+"&name2="+var_name2;
a.open("POST","url",true /*for asynchronous*/);
a.setRequestHeader("content-type", "application/x-www-form-urlencoded");
a.setRequestHeader("content-length", val.length);
a.setRequestHeader("connection", "close");
a.send(val);

};

// continuous
// In another php file:

<?php
$con=new mysqli ("localhost","root","","database_name");

$name = $_POST["name"];
$name2 = $_POST["name2"];


$sql = "insert into table_name (col_name1[,col_name2,etc.]) values ("$name1"[,"$name2",etc..])";

if ($con->query($sql))
{
	echo "Data Saved";
}
else
{
	echo "Error in saving data";
}
?>

// 