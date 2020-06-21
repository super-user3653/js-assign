// // 1. Write a program that takes two user inputs for first and
// //    last name using prompt and merge them in a new variable
// //    titled fullName. Greet the user using his full name.

// var firstname = prompt("Enter First Name");
// var lastname = prompt("Enter Last Name");
// var fullName = firstname + " " + lastname;

// alert("Hello " + fullName);

// // 2. Write a program to take a user input about his favorite
// //    mobile phone model. Find and display the length of user
// //    input in your browser

// var favorite = prompt("Enter Your Favorite Mobile");
// document.write("<br><br>Your Favorite Mobile Is: " + favorite + "<br>");
// document.write("Length Of String: " + favorite.length + "<br><br>");

// // 3. Write a program to find the index of letter “n” in the word
// //    “Pakistani” and display the result in your browser.

// var word = "Pakistan";
// var index = word.indexOf("n");

// document.write("Index Of n In The Word Pakistan Is " + index);

// // 4. Write a program to find the last index of letter “l” in the
// //    word “Hello World” and display the result in your browser .

// var word2 = "Hello World";
// var index2 = word2.lastIndexOf("l");

// document.write("<br><br>The Index Of l In The String 'Hello World' Is " + index2);

// // 5. Write a program to find the character at 3 rd index in the
// //    word “Pakistani” and display the result in your browser .

// var word3 = "Pakistani";
// var find = word3.slice(3, 4);
// document.write("<br><br>String: Pakistani<br>Character at Index 3: " + find+ "<br><br>");



// // 6. Repeat Q1 using string concat() method.


// var fullName = firstname.concat(" " + lastname);
// alert("Hello " + fullName);

// // 7. Write a program to replace the “Hyder” to “Islam” in the
// //    word “Hyderabad” and display the result in your browser.

// var city = "Hyderabad";

// var seccity = city.replace(/Hyder/gi,"Islam");
// document.write(seccity);

// // 8. Write a program to replace all occurrences of “and” in the
// //    string with “&” and display the result in your browser.

// var message = "Ali and Sami are best friends. They play cricket and football together";

// message = message.replace(/and/g, "&");
// document.write("<br><br>" + message + "<br><br>");



// // 9. Write a program that converts a string “472” to a number
// //    472. Display the values & types in your browser.

// var string1 = "472";
// var string2 = parseInt(string1);

// document.write("Value :" + string1 +"<br>" + "Type :" + typeof(string1) + "<br>" + "Value :" + string2 + "<br>" + "Type :" + typeof(string2) )

// // 10. Write a program that takes user input. Convert and
// //     show the input in capital letters.

// var lowinp = prompt("Enter Any Word :");
// var lowinptwo = lowinp.toUpperCase();
// document.write("<br><br>User input : " + lowinp + "<br>" + "Upper case : " + lowinptwo + "<br><br>");

// // 11. Write a program that takes user input. Convert and
// //     show the input in title case.

// var lowinp3 = prompt("Enter Any Word Again");
// var init = lowinp3.charAt(0).toUpperCase();
// var lowinp4 = init + lowinp3.slice(1);

// document.write("User input : " + lowinp3 + "<br>" + "Upper case : " + lowinp4 + "<br><br>");


// // 12. Write a program that converts the variable num to
// //     string.
// //     Remove the dot to display “3536” display in your browser.

//  var numberone = 35.36 ;
//  var numbertostring = numberone.toString();
//  numbertostring = numbertostring.replace(".","");
//  document.write("Number: " + numberone + "<br>Result: " + numbertostring);


// // 13. Write a program to take user input and store username
// //     in a variable. If the username contains any special symbol
// //     among [@ . , !], prompt the user to enter a valid username.

// var str = prompt("Enter Name :");
// var notallowed =  /@ . , !/;
// if( str.match(notallowed) ){
//     alert("Please Enter A Valid Name.");
//   }else{
//     alert("Thank You " + str);
//   }


// // 14. You have an array
// //     Write a program to enable “search by user input” in an
// //     array. After searching, prompt the user whether the given
// //     item is found in the list or not.
// //     Note: Perform case insensitive search. Whether the user
// //     enters cookie, Cookie, COOKIE or coOkIE, program
// //     should inform about its availability. Example:

// var bakeryitems = ["cake", "apple pie", "cookie", "chips", "patties"];
// var customers = prompt("Welcome, what would you like to order ?");
// customers = customers.toLowerCase();
// itmind = bakeryitems.indexOf(customers)
//     if(bakeryitems.indexOf(customers) !== -1){
//         alert(customers + " is available at index " + itmind + " in our bakery");
//     }else{
//     alert("We are sorry, " + customers + " is not available in our bakery");
//     }
        
// // 15. Write a program to take password as an input from
// //     user. The password must qualify these requirements:
// //        a. It should contain alphabets and numbers
// //        b. It should not start with a number
// //        c. It must at least 6 characters long
// //    If the password does not meet above requirements,
// //    prompt the user to enter a valid password.
// //    For character codes of a-z, A-Z & 0-9, refer to ASCII
// //    table at the end of this document.





// // 16. Write a program to convert the following string to an
// // array using string split method.
// // Display the elements of array in your browser.

//  var university = "University of Karachi";
//  university = university.replace(/ /g,"");
//  university = university.split("");
 
//  for(var i=0 ; i < university.length ; i++){
//      document.write(university[i] + "<br>");
//  }



// // 17. Write a program to display the last character of a user
// // input.

// var usrinput = prompt("Enter a name : ");
// var iptlength = usrinput.length -1;
// var resulter = usrinput.charAt(iptlength)
// alert("Last character of input : " + res );

// // 18. You have a string “The quick brown fox jumps over the
// // lazy dog”. Write a program to count number of
// // occurrences of word “the” in given string.

// var sent = "The quick brown fox jumps the over the lazy dog";
// var resulter = sent.match(/the/gi);
// resulter = resulter.length

//  document.write(resulter);














//   // assignment 2
//  //
// //













// // 1. Write a program that takes a positive integer from user &
// //    display the following in your browser.
// //       a. number
// //       b. round off value of the number
// //       c. floor value of the number
// //       d. ceil value of the number

// var yourinput = prompt("Enter Number (Can Contain Decimals) : ");
// document.write("Number: " + yourinput + "<br>" + "Rounded Value : " + parseInt(yourinput) + "<br>" + "Floor value: " + Math.floor(yourinput) + "<br>" + "Ceiling value : " + Math.ceil(yourinput));

// // 2. Write a program that takes a negative floating point
// // number from user & display the following in your browser.
// // a. number
// // b. round off value of the number
// // c. floor value of the number
// // d. ceil value of the number


// var yourinput = prompt("Enter a negative number ( may contain decimal ) : ");
// document.write("number : " + yourinput + "<br>" + "round off value : " + parseInt(yourinput) + "<br>" + "floor value : " + Math.floor(yourinput) + "<br>" + "ceil value : " + Math.ceil(yourinput));

// // 3. Write a program that displays the absolute value of a
// //    number.
// //      E.g. absolute value of -4 is 4 & absolute value of 5 is 5

// var input = prompt("Enter a number ( may contain decimal and negative ) to find the absolute value : ");
// document.write("The absolute value of number is : " + Math.abs(input));

// // 4. Write a program that simulates a dice using random()
// // method of JS Math class. Display the value of dice in your
// // browser.:

// document.write("Random dice Value : " + Math.ceil(Math.random()*10));

// // 5. Write a program that simulates a coin toss using random()
// // method of JS Math class. Display the value of coin in your
// // browser
// var valueof =Math.ceil(Math.random()*10);
// if(val < 5){
//     document.write("Random coin value : Heads");
// }else{
//     document.write("Random coin value : Tails");
// };

// // 6. Write a program that shows a random number between 1
// // and 100 in your browser.

//  var randomvalue = Math.ceil(Math.random()*100);
//  document.write("Random Value Is : " + randomvalue)

// // 7. Write a program that asks the user about his weight. Parse
// //    the user input and display his weight in your browser.
// //    Possible user inputs can be:
// //      a. 50
// //      b. 50kgs
// //      c. 50.2kgs
// //      d. 50.2kilograms

// var weightinput = prompt("Enter your weight in kilograms :");
// if( weightinput.match(/kg||kgs||kilograms/gi)){
//     weightinput = weightinput.replace(/kg|kgs|kilograms/gi,"");
//     document.write("The weight of user is " + weightinput + " kilograms");
// }else{
//     document.write( "The weight of user is " + weightinput + " kilograms"); 
// }

// // 8. Write a program that stores a random secret number from
// // 1 to 10 in a variable. Ask the user to input a number
// // between 1 and 10. If the user input equals the secret
// // number, congratulate the user.

// var iptsct = parseInt(prompt("Enter a number between 1 and 10"));
// var randomsct = Math.ceil(Math.random()*10);
// if(iptsct === randomsct){
//     alert("congrats, you guessed it right");
// }else{
//     alert("Try Again. Right number was : " + randomsct);
   
// }



//   //assignment 3
//  //
// //


// // 1. Write a program that displays current date and time in
// // your browser.

// var curdate = new Date;

// document.write(curdate);


// // 2. Write a program that alerts the current month in words.
// // For example December.


// var curdate = new Date;
// var curmonth = curdate.getMonth();
// var armonth = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December",];

// document.write("<br><br>Current Month: " + armonth[curmonth]);

// // 3. Write a program that alerts the first 3 letters of the current
// // day, for example if today is Sunday then alert will show
// // Sun.


// var current = new Date;
// var currentday = current.getDay();
// var arraydays = [Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// document.write("<br><br>" + arraydays[currentday]);

// // 4. Write a program that displays a message “It’s Fun day” if
// // its Saturday or Sunday today.

// var current = new Date;
// var currentday = current.getDay();
// var currentdaynum = currentday;
// var arraydays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat",  "It's Fun Day" ];
// if(currentdaynum == 0 || curdaynum == 1){
//     currentdaynum = 7;
//     document.write("<br><br>" + arraydays[currentdaynum]);
// } else {

//     document.write("<br><br>" + arraydays[currentdaynum]);

// }



// // 5. Write a program that shows the message “First fifteen
// // days of the month” if the date is less than 16 th of the month
// // else shows “Last days of the month”.


// var currentdate = new Date;
// var currentmonthdays = currentdate.getDate();

// if(currentmonthdays < 16){
//     document.write("<br><br>First Fifteen Days Of The Month");
// } else {

//     document.write("<br><br>Last Fifteen Days Of The Month");

// }

// // 6. Write a program that determines the minutes since
// //    midnight, Jan. 1, 1970 and assigns it to a variable that
// //    hasn't been declared beforehand. Use any variable you like
// //    to represent the Date object.

// var current = new Date;
// var time = current.getTime();

// document.write("<br><br>Current Date : " + current);
// document.write("<br>Elapsed milliseconds since January 1, 1970 : " + time);
// document.write("<br>Elapsed minutes since January 1, 1970 : " + time * 60);



// // 7. Write a program that tests whether it's before noon and
// //    alert “Its AM” else “its PM”.

// var currentdate = new Date;
// var currenttime = currentdate.getHours();
// var ampm;
// if(currenttime < 12){
//     ampm = "Its AM";
//     alert(ampm);
// }else{
//     ampm = "Its PM";
//     alert(ampm);
// }


// // 8. Write a program that creates a Date object for the last day
// //    of the last month of 2020 and assigns it to variable named
// //    laterDate.


var firstramadan = new Date("december 31, 2020");
document.write("Later Date : " + firstramadan);



// 9. Create a date object of the starting date of this Ramadan
//    and alert the number of days past since 1 st Ramadan?

var firstramadan = new Date("june 18, 2015");
var firstramadanmili = firstramadan.getTime();
var today = new Date();
var todaymili = today.getTime();
var differ = todaymili - firstramadan;
var ruond = Math.floor(differ/(1000*60*60*24))
document.write("<br><br>" + ruond + " days have passed since 1st Ramadan, 2015");

// 10. Write a program that displays in your browser the
//     seconds that elapsed between the reference date and the
//     beginning of 2015.


var referencedate = new Date("june 18, 2015");
var referencedatemili = referencedate.getTime();
var today = new Date();
var todaymili = today.getTime();
var differ = todaymili - referencedate;
var ruond = Math.floor(differ/(1000))
document.write("<br><br>On reference date "+ referencedate + ", " + ruond + " seconds have passed since beginning 2015");


// 11. Create a Date object for the current date and time.
//     Extract the hours, reset the date object an hour ahead and
//     finally display the date object in your browser.


var dt = new Date();
var gt = new Date();
dt.setHours( dt.getHours() + 1 );
document.write("<br><br>current date: " + gt)
document.write("<br>1 Hour ago, it was " + dt );


// 12. Write a program that creates a date object and show the
// date in an alert box that is reset to 100 years back?




var dt = new Date();
var gt = new Date();
dt.setFullYear( dt.getFullYear() - 100 );
document.write("<br><br>current date: " + gt)
document.write("<br>100 Years ago From Now, it was " + dt );


// 13. Write a program to ask the user about his age. Calculate
// and show his birth year in your browser.


var dob = new Date();
var ageo = prompt("Enter Your Age");
var dobo = dob.getFullYear();
var age = parseInt(ageo);
var dateofbirth = dobo - age;
document.write("<br><br>Your Age Is " + ageo);
document.write("<br>Your Birth Year Is " + dateofbirth);

// 14. Write a program to generate your K-Electric bill in your
//     browser. All the amounts should be rounded off to 2
//     decimal places. Display the following fields:
//       a. Customer Name
//        b. Current Month
//         c. Number of units
//          d. Charges per unit
//           e. Net Amount Payable (within Due Date)
//            f. Late Payment Surcharge
//             g. Gross Amount Payable (after Due Date)


var customername = prompt("Your Name");
var month = prompt("Enter Month");
var nou = prompt("Enter Number Of Units");
var cpu = prompt("Enter Charges Per Unit");
var nap = nou * cpu;
var lps = 350;
var gapadd = nap + lps;
document.write("<br><h1>K-Electric Bill</h1>");
document.write("<br><br>Customer Name: " + customername);
document.write("<br>Month: " + month);
document.write("<br>Number Of Units: " + nou);
document.write("<br>Charges Per Unit: " + cpu);
document.write("<br><br>Net Amount Payable(Within Due Date): " + nap);
document.write("<br>Late Payment Surcharge: 350");
document.write("<br>Gross Amount Payable(after Due Date): " + gapadd);



















//   // Assignment 4
//  //
// //



// //1. Write a function that displays current date & time in your
// //browser.

// function currenttime(){
//     document.write(new Date());
    
// }
// currenttime();

// // 2. Write a function that takes first & last name and then it
// // greets the user using his full name.

// function greetuser(firstname, lastname){
//     document.write("<br><br>Welcome " + firstname + " " + lastname);
// }
// greetuser(prompt("Enter First Name"), prompt("Enter Last Name"));

// // 3. Write a function that adds two numbers (input by user)
// // and returns the sum of two numbers.
// var number1 = parseInt(prompt("Enter first number : "));
// var number2 = parseInt(prompt("Enter second number : "));

// function addnum(ion, ionb){
//     alert(ion + ionb);
// }

// addnum(number1, number2)

// // 4. Calculator:
// // Write a function that takes three arguments num1, num2
// // & operator & compute the desired operation. Return and
// // show the desired result in your browser

// var num1 = parseInt(prompt("Enter first number : "));
// var num2 = parseInt(prompt("Enter second number : "));
// var operator = (prompt("Enter the operator : "));

// function add(one, two, threee){
//     if(threee == "+"){
//     alert(one + two);
//     }else if(threee == "-"){
//     alert(one - two); 
//     }else if(threee == "*"){
//         alert(one * two); 
//     }else if(threee == "/"){
//             alert(one / two); 
//     }
// }

// add(num1, num2, operator);

// //5. Write a function that squares its argument

// function square(num){
//     var res = num * num;
//     alert(res);
// }
// var input = parseInt(prompt("Enter a number to find out its square value : "));
// square(input);

// //6. Write a function that computes factorial of a number.



// var usrinp = parseInt(prompt("Enter a number to find its factorial :"));

// function factorial(numbero) {
    
//     var res = numbero;
     
//     if (numbero === 0 || numbero === 1) 
//       return 1; 
    
//     while (numbero > 1) { 
//       numbero--; 
//       res *= numbero; 
     
//     }
       
    
//     document.write(res);
//   }

// factorial(usrinp);

// // 7. Write a function that take start and end number as inputs
// // & display counting in your browser.


// var num1 = parseInt(prompt("Enter a number to start the count : "));
// var num2 = parseInt(prompt("Enter a number to end the count : "));

// for(var i = num1; i < num2+1; i++){
//   document.write(i + "<br>");
// }




// //  8. Write a nested function that computes hypotenuse of a
// //     right angle triangle.
// //     Hypotenuse 2 = Base 2 + Perpendicular 2
// //     Take base and perpendicular as inputs.
// //     Outer function : calculateHypotenuse()
// //     Inner function: calculateSquare()

// function findhypot(ao, bo){
//     function findsqr( ao, bo){
//         return (ao*ao) + (bo*bo);
//     }
//     var result;
//    result = Math.sqrt(findsqr(ao,bo));
//     document.write(result);
// }
// var inpone = parseInt(prompt("Enter base : "));
// var inptwo = parseInt(prompt("Enter perpendicular : "));

// findhypot(inpone, inptwo);

// // 9. Write a function that calculates the area of a rectangle.
// // A = width * height
// // Pass width and height in following manner:
// // i. Arguments as value
// // ii. Arguments as variables

// var valis = 5;
// function calarea(asvalis, argue){
//     var a = argue * asvalis;
//     return a

// }

// document.write(calarea(valis, 5));

// // 10. Write a JavaScript function that checks whether a passed
// //     string is palindrome or not?
// //     A palindrome is word, phrase, or sequence that reads the same backward as
// //     forward, e.g., madam.

// function pal(inputstring){
//     var revstring = inputstring.split("").reverse().join("");
//     if(inputstring === revstring){
//         alert("true");
//     }else{
//         alert("false");
//     }

// }
// var str = "racecar";
// pal(str);

// // 11. Write a JavaScript function that accepts a string as a
// //     parameter and converts the first letter of each word of the
// //     string in upper case.
// //     EXAMPLE STRING : 'the quick brown fox'
// //     EXPECTED OUTPUT : 'The Quick Brown Fox'

// function firstupcase(string) {
//     var string = "I'm a little tea pot";
//     var splitstring = string.toLowerCase().split(" ");
//   console.log(splitstring);
//   var newstring=[];
//     for (var i = 0; i < splitstring.length; i++) {
       
//     newstring =  splitstring[i].charAt(0).toUpperCase();

//       }
  
//       //newstr = newstr.join(" ");
//   document.write(newstring);
  
//     }
//    firstupcase();
  
// //   12. Write a JavaScript function that accepts a string as a
// //       parameter and find the longest word within the string.
// //       EXAMPLE STRING : 'Web Development Tutorial'
// //       EXPECTED OUTPUT : 'Development'

// function sort(names) {
//   let str = " ";
//   let namestr = names.split(" ");
// for(var i = 0; i < namestr.length; i++) {
//       if(str.length < namestr[i].length) {

//         str = namestr[i];
//         console.log(str);
//       } 
//   }
//   return str;
// }

// document.write(sort(prompt("Enter Sentence To find Longest word in it")));

// // 13. Write a JavaScript function that accepts two arguments, a
// //     string and a letter and the function will count the number of
// //     occurrences of the specified letter within the string.
// //     Sample arguments : 'JSResourceS.com', 'o'


// var inputone = prompt("Enter a string : ");
// var inputtwo = prompt("Enter the letter to find : ");
// var result = inputone.match(inputtwo);

// result = result.length;
// document.write(result);

// // 14. The Geometrizer
// //     Create 2 functions that calculate properties of a circle, using
// //     the definitions here.
// //     Create a function called calcCircumference:
// //     •
// //     •
// //     Pass the radius to the function.
// //     Calculate the circumference based on the radius, and output
// //     "The circumference is NN".
// //     Create a function called calcArea:
// //     •
// //     •
// //     Pass the radius to the function.
// //     Calculate the area based on the radius, and output "The area
// //     is NN".
// //     Circumference of circle = 2πr
// //      Area of circle πr 2
//  function calcCircumference(radius){
//       var result = 2 * 3.14 * radius;
//       document.write("The Circumference Is : " + result);
//  }

//  function calcArea(radius){
//   var result = 3.14 * radius  * radius;
//   document.write("The Area Is : " + result);
//  }

