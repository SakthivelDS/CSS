/********Javascript Tutorials*********/
// 1. To find an element bt id in document or anything else

document.getElementById(//ID)

// 2. To change the content

.innerHTML = //content

// 3. To change the img

.src = "//Url";
 
// 4. To change the style

.style.//stylename like fontSize = //value;

// 5. To hide something

.style.display = "none";

// 6. To alert Window (use with or without window keyword)
window.alert(/*message*/)

// 7. To display or print in Console
console.log(/*message*/)

// 8. To access printer !important
window.print()

// 9. To find the type of variable like string,etc.
typeof //variable

// 10. To make a private  variable within a block 
let //variable
// It's not supported in many browsers


// 11. for loop
for (var i=0, /*condition*/,/*increment or decrement*/){
	// code goes here..
}

// 12. To add or append an element in a array
/*arrayname*/.push(/*value*/)

// 13. HTMl events
Event	Description
onchange	-An HTML element has been changed
onclick	-The user clicks an HTML element
onmouseover	-The user moves the mouse over an HTML element
onmouseout	-The user moves the mouse away from an HTML element
onkeydown	-The user pushes a keyboard key
onload	-The browser has finished loading the page

// 14. To find length of string
varible.length

// 15. To find the index 
/*variable*/.indexOf(/*"string"*/[,strt_index])

// 16. To find the index of last recurring string
/*variable*/.lastIndexOf("string"[,strt_index])
// it starts finding from last to first

// 17. To slice a string
/*variable*/.slice(start[,end])

// 18. To replace a string
/*variable*/.replace(existing,newer)
//  It replaces only the first occuring substring

// 19. To replace all the matches in a string
/*variable*/.replace(/existing/g,newer)

//  20. To  upper and lowercase
/*variable*/.toUpperCase();
/*variable*/.toLowerCase();

// 21. To concatenate 
/*variable*/.concat(str1,str2)

// 22. To remove whitespaces from both sides of the string
/*variable*/.trim();

// 23. To return a character at a position
/*variable*/.charAt(position);

// 24. To return the unicode of the character at a position
/*variable*/.charCodeAt(position);

// 25. T convert a string to an array
/*variable*/.split();

// 26. To convert a number to base 2,8,10 or 16 etc.
/*variable*/.toString(basenumber);

// 27. To evaluate and convert to a string
/*variable*/.toString();

// 28. To convert into exponential
/*variable*/.toExponential(no.of decimals);

// 29. To convert a number to fixed number of decimals
/*variable*/.toFixed(no.of decimals);

// 30. To convert into number
Number(value);

// 31. To convert into int or float
parseInt(value);
parseFloat(value);

// 32. To sort an array
var variable = array_name.sort();

// 33. To loop inside the array elements
variable.forEach(function_name);

// 34. To append element in a array
variable.push(value);

// 35. To insert an element in an array

/*variable*/.splice(index,no.of values to be deleted,value1[,value2,etc..])

// 36. To reverse an array
/*variable*/.reverse();

// 37. To sort an array numerically
/*variable*/.sort(function(a,b){return a-b} )

// 38. To find max and min in an Array
Math.max.apply(null,array_name);
Math.min.apply(null,array_name);

// 39. To sort an object using key
/*variable*/.sort(function(a,b){return a.key_name - b.key_name});

/********* From NOW The main Concept starts************/

// 40.  To get a value like getElementByID:

/*variable*/.querySelector("tag or #id or .class");

// 41.  To remove and add value in class

/*variable*/.classList.remove("class_name");
/*variable*/.classList.add("class_name");

//42. To store data like cookies in local storage

localStorage.setItem(key: DOMString, value: DOMString);

// 43. To create an element like div in HTML through JS;

/*variable*/.document.createElement("div"or "h1"or any..);
/*new_value*/.innerHTML=our code;
document.getElementById("id").appendChild(/*new_value*/);

// 44. To delete an element like div in HTMl through JD
document.getElementById("id").removeChild("child_name".parentNode);

// 45. 














