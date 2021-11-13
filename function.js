/*
* QUIZ REQUIREMENTS
* - Your code should have a `laugh()` function
* - Your `laugh()` function should return the correct output
* - Your code should print `\"hahahahahahahahahaha!\"` by calling the `laugh()` function inside `console.log()`
* - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
*/

// your code goes here
function laugh (){
    console.log("`\\\"hahahahahahahahahaha!\\\"`")
}

/*
* QUIZ REQUIREMENTS
* - Your code should have a `laugh()` function
* - Your `laugh()` function should have one parameter named `num`
* - Your `laugh()` function should return the correct number of laughs
*/
function laugh(num){
    let laughter ="";
    for (i = 1;i <= num;i++) {
        laughter+= "ha";
    }
    return '${laughter}!';
}
console.log(laugh());

/*
* QUIZ REQUIREMENTS
* - Your code should have a `buildTriangle()` function
* - Your `buildTriangle()` function should take one argument (or you can say parameter)
* - Your `laugh()` function should build the triangle as describe above
*/
function makeLine(length) {
    var line = "";
    for (var j = 1; j <= length; j++) {
        line += "* ";
    }
    return line + "\n";
 }

 function buildTriangle(num){
     var triangle =""
     for(i=1;i <= num;i++){
         triangle += makeline(i);
    }
    return triangle;
 }
 console.log(buildTriangle(10));

 /* QUIZ REQUIREMENTS
* - Your code should have a variable `laugh`
* - Your code should include an anonymous function expression stored in the variable `laugh`
* - Your anonymous function expression should take one argument
* - Your anonymous function expression should return the correct number of `hahaha`\'s
*/
var laugh;
laugh = function (x){
let laughter ="";
for (i =1;i<=x;i++){
    laughter += "hahaha\'s"
}
return laughter;
}
console.log (laugh);

/* QUIZ REQUIREMENTS
* - Your code should have a variable `cry`
* - Your code should include a named function expression stored in the variable `cry`
* - Your code should call the function expression using the variable name, not the function name
* - Your function expression should return the expected output
* - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
*/
 var cry;
 cry = function crying(){
     return "bohoo!";
}
console.log(cry());
/*
* QUIZ REQUIREMENTS
* - Your code should have an `emotions()` function
* - Your code should call the `emotions()` function
* - Your `emotions()` function call should have an inline function expression passed as the second parameter
* - Your function expression should return the expected output
*/
function emotions(myString, myFunc) {
    console.log("I am " + myString + ", " + myFunc(2));
 }
 
 emotions("happy", function laughs(num){
    let laughter = "";
    for(let i = 1; i <= num; i++){
        laughter += "ha";
    }
    return `${laughter}!`;
});

