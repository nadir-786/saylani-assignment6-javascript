//////////////////Chapter 21-25 ////////////////////
/////////////////   Task 1   ///////////////////



// var firstName = prompt("Enter the first Name");
// var lastName = prompt("Enter the last Name");
// var fullName = firstName+" "+lastName;
// document.write("Welcome Mr/Mrs "+fullName);

/////////////////   Task 2   ///////////////////

// var modelName = prompt("Enter Your Favourite Mobile Phone Model");
// var stringLength = modelName.length;
// document.write("My Favourite phone is : "+modelName+" <br> Length of string : "+stringLength);

/////////////////   Task 3   ///////////////////

// var countName = "Pakistan";
// var indexOfName = countName.indexOf("n");
// document.write("Sting : "+countName+ " <br> Index of 'n' :" +indexOfName);

/////////////////   Task 4   ///////////////////

// var countName = "Hello World";
// var lastIndex = countName.lastIndexOf("l");
// document.write("Sting : "+countName+ " <br> Last Index of 'l' :" +lastIndex);

/////////////////   Task 5   ///////////////////

// var countName = "Pakistani";
// var characterThree = countName[3];
// document.write("Sting : "+countName+ " <br> Character at Index 3 : " +characterThree);

/////////////////   Task 6   ///////////////////


// var firstName = prompt("Enter the first Name");
// var lastName = prompt("Enter the last Name");
// var fullName = concat(firstName," ",lastName)
// document.write("Welcome Mr/Mrs "+fullName);

/////////////////   Task 7   ///////////////////

// var cityName1 = "Hyderabad";
// var NewCity  = cityName1.replace("Hyder","Islam");
// document.write("City: "+cityName1+ " <br> After the replacement: "+NewCity);


/////////////////   Task 8   ///////////////////

// var message = "Ali and Sami are best friends. They play cricket and football together";
// var NewMessages = message.replace(/and/g,"&");
// document.write(NewMessages);

/////////////////   Task 9   ///////////////////

// var value1 = "472";
// var typeValue1 = typeof value1;
// var value2 = Number(value1);
// var typeValue2 = typeof value2;
// document.write(`Value: ${value1} <br> Type: ${typeValue1} <br> Value: ${value2} <br> Type: ${typeValue2}`);

/////////////////   Task 10   ///////////////////

// var userInput = prompt("Enter Any thing to convert into Capital Letter");
// var Uppercase = userInput.toUpperCase();
// document.write("User input "+userInput+" <br> Upper case :"+Uppercase);


/////////////////   Task 11   ///////////////////

// var userInput = prompt("Enter Any thing to convert into Title Case Letters");
// function toTitleCase(str) {
//     return str.replace(/\w\S*/g, function(txt){
//         return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
//     });
// }
// var titleCase = toTitleCase(userInput);
// document.write("User input "+userInput+" <br> Title case :"+titleCase);


/////////////////   Task 12   ///////////////////

// var num = 35.36;
// var stringNew = num.toString().replace(".","");
// document.write("Number : "+num+"<br> Result : "+stringNew);

/////////////////   Task 13   ///////////////////

// var storeUser = prompt("Please Enter your username");
// for(var i=0;i<storeUser.length;i++){
//     if(storeUser.charCodeAt(i) == 33 || storeUser.charCodeAt(i) == 44 || storeUser.charCodeAt(i) == 46 || storeUser.charCodeAt(i) == 64){
//         alert("Please Enter a valid username")
//     }
// }


/////////////////   Task 14   ///////////////////
// var A =["cake","apple pie","cookie","chips","patties"];
// var userOrder = prompt("Welcome to ABC Bakery. What you want to order sir/madam?");
// var indexOrder = userOrder.toLowerCase();
// var index1 = A.indexOf(indexOrder);
// if(index1 < 0 ){
//     alert("We are sorry,"+userOrder+" is not availabe in our bakery");
// }else{
//     alert(userOrder+" is available at index "+index1+" in our bakery")
// }

/////////////////   Task 15   ///////////////////

// function validate(userPassword) { 
// for (let i = 0; i < userPassword.length; i++) {
//     const element = userPassword[i];
//     if(userPassword[0] == 1 || userPassword[0] == 2 ||userPassword[0] == 3 ||userPassword[0] == 4 ||userPassword[0] == 5 ||userPassword[0] == 6 ||userPassword[0] == 7 ||userPassword[0] == 8 ||userPassword[0] == 9){
//         alert("Password can not begin with a number");
//         prompt("Please Enter a valid password");
//         return;
//     }else if(userPassword.length <= 6){
//         alert("Password Must be atleast six characters")
//         prompt("Please Enter a valid password");
//         return;
//     }else if(userPassword.match(/[a-zA-Z0-9]/g).length < 0){
//         alert("Password should contain number and characher");
//         return;
//     }else{
//         alert("Welcome");
//         return;
//     }
    
// }   
// }

// var userPassword = prompt("Please Enter Your Password");
// validate(userPassword);
/////////////////   Task 16   ///////////////////

// var university = "University of Karachi";
// for (let i = 0; i < university.length; i++) {
//     const element = university[i];
//     document.write(element+"<br>");
// }


/////////////////   Task 17   ///////////////////

// var userInput = prompt("please enter a word to get its last word");

// var lastInput = userInput[userInput.length-1];

// document.write(`User inout: ${userInput} <br> Last character of input : ${lastInput}`)

/////////////////   Task 17   ///////////////////

// var temp = "The quick brown fox jumps over the lazy dog.";
// var count = (temp.match(/the/g) || []).length;
// document.write(`Text: ${temp} <br> there are ${count} occurrence(s) of word 'the' `)


//////////////////Chapter 26-30 ////////////////////
/////////////////   Task 1   ///////////////////

// var numberString = prompt("Enter a positive integer number");
// var roundOff = Math.round(numberString);
// var floorNum = Math.floor(numberString);
// var ceirlNum = Math.ceil(numberString);
// document.write(`number: ${numberString}<br> round off value: ${roundOff} <br>floor value: ${floorNum} <br>ceil value: ${ceirlNum}`)

/////////////////   Task 2   ///////////////////

// var numberString = prompt("Enter a negative integer number");
// var roundOff = Math.round(numberString);
// var floorNum = Math.floor(numberString);
// var ceirlNum = Math.ceil(numberString);
// document.write(`number: ${numberString}<br> round off value: ${roundOff} <br>floor value: ${floorNum} <br>ceil value: ${ceirlNum}`)

/////////////////   Task 3   ///////////////////

// var value = -4;
// var absoulteValue = Math.abs(value);
// document.write(`The absolute value of ${value} is ${absoulteValue}`)

/////////////////   Task 4   ///////////////////

// document.write(`random dice value: ${Math.floor(Math.random()*(1-6)+6)} <br> random dice value: ${Math.floor(Math.random()*(1-6)+6)}`);

/////////////////   Task 5   ///////////////////

// var coin = Math.floor(Math.random() * 2) ;
// if (coin == 0) {
//     document.write(`${coin} <br> random coin value: Heads`);
// } else {
//     document.write(`${coin} <br> random coin value: Tails`);
// }

/////////////////   Task 6   ///////////////////

// var num = Math.floor(Math.random() * 100);
// document.write(`radom number between 1 and 100: ${num}`);

/////////////////   Task 7   ///////////////////

// var userWeight = prompt("Please enter your weight");

// document.write(`The weight of user is ${parseInt(userWeight)} kilograms`);


/////////////////   Task 8   ///////////////////

// var userNum = prompt("Enter a number between 1 and 10");
// var secrectNUm = Math.floor(Math.random() * 10) + 1;
// if(userNum == secrectNUm){
//     alert("Congratulations , You gusses the right number")
// }else{
//     alert("Try Again!")
// }

//////////////////Chapter 26-30 ////////////////////

/////////////////   Task 1   ///////////////////

// var currentDateAndTime = new Date();
// document.write(currentDateAndTime);

/////////////////   Task 2   ///////////////////

// const date = new Date(); 
// const month = date.toLocaleString('default', { month: 'long' });
// document.write(`Current month: ${month}`);

/////////////////   Task 3   ///////////////////

// const date = new Date().toDateString();
// const day= date.slice(0,3);
// document.write(`Today is ${day}`);


/////////////////   Task 4   ///////////////////

// const date = new Date().toDateString();
// const day= date.slice(0,3);
// if(day == "Sat" || day == "Sun"){
//     document.write("Its's Fun day");
// }

/////////////////   Task 5   ///////////////////

// const date = new Date().getDate();
// if(date < 16){
//     document.write("First Fifteen Days of the months");
// }else{
//     document.write("Last Fifteen Days of the months");

// }

/////////////////   Task 6   ///////////////////

// const date = new Date(); 
// const milisec = new Date().getTime();
// var minutes =  milisec / 60000;
// document.write(`Current Date: ${date}<br>Elapsed milliseconds since January 1, 1970: ${milisec} <br> Elapsed minutes since January 1, 1970: ${minutes}`)

/////////////////   Task 7   ///////////////////

// var hours = new Date().getHours();
// if(hours < 12 ){
//     document.write("its AM");
// }else{
//     document.write("its PM");
// }

/////////////////   Task 8   ///////////////////

// var laterDate = new Date(2021,0,0)
// document.write(`Later date : ${laterDate}`);


/////////////////   Task 9   ///////////////////

// var date1 = new Date().getTime(); 
// var date2 = new Date("06/18/2015").getTime();
// var diff = date1 - date2 ;
// var days = diff / (1000 * 3600 * 24);
// document.write(`${Math.floor(days)} days have been passed since 1st ramdan, 2015`);

/////////////////   Task 10   ///////////////////

// var date1 = new Date("01/01/2015").getTime(); 
// var date2 = new Date("12/05/2015 22:50:16").getTime();
// var diffSec = date1-date2 / (1000);
// document.write(`On reference date ${new Date("12/05/2015 22:50:16")} <br> ${diffSec} seconds had passed since beginning of 2015 `);

/////////////////   Task 11   ///////////////////

// var date2 = new Date("12/05/2015 23:50:16").getTime();
// var newDate = new Date(date2 - (3600 *1000));
// document.write(`current date: ${new Date("12/05/2015 23:50:16")} <br> 1 hour ago, it was ${newDate}`)

/////////////////   Task 12   ///////////////////

// var date2 = new Date("12/05/2015 23:50:16").getTime();
// var newDate = new Date(date2 - (1000*3600*24*365*100));
// document.write(`current date: ${new Date("12/05/2015 23:50:16")} <br> 100 years ago, it was ${newDate}`)

/////////////////   Task 13   ///////////////////

// var userAge = prompt("Enter your Age");
// var birthYear = new Date().getFullYear() - userAge;
// document.write(`Your Age is ${userAge} <br> Your birth year is ${birthYear}`)

/////////////////   Task 14   ///////////////////

// var customerName = "ABC Customer";
// var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
// var month = months[new Date().getMonth()];
// var numUnits = 410;
// var charge = 16;
// var netAmount = numUnits * charge;
// var lateCharge = 350;
// var grossAmount = netAmount + lateCharge;

// document.write(`<h1>K-Electric Bill</h1>Customer Name: <b>${customerName}</b><br>Month: <b>${month}</b><br> Number of units: <b>${numUnits}</b><br>Charges per unit: <b>${charge}</b><br><br>Net Amount Payable(within Due Date) : <b>${netAmount}</b><br>Late payment surchargee: <b>${lateCharge}</b><br>Gross Amount Payable (after Due Date): <b>${grossAmount}</b><br>`)

//////////////////Chapter 35-38 ////////////////////

/////////////////   Task 1   ///////////////////

// function displayDate() {
//     var date = new Date();
//     document.write(date);
// }
// displayDate();

/////////////////   Task 2   ///////////////////

// function greet() {
//     var fistName = prompt("Enter your First Name");
//     var lastName = prompt("Enter your Last Name");
//     alert("Welcome Mr/Mrs " + fistName + " "+ lastName);  
// }
// greet();

/////////////////   Task 3   ///////////////////

// function sumNum() {
//     var num1 =  prompt("Enter the first Number");
//     var num2 =  prompt("Enter the second Number");
//     return num1+num2
// }
// sumNum();

/////////////////   Task 4   ///////////////////

// function calculator(num1,num2,operator) {
//  var result = eval(num1+operator+num2);
//  return result   
// }

//     var num1 =  prompt("Enter the first Number");
//     var num2 =  prompt("Enter the second Number");
//     var operator =  prompt("Enter the Operator");

// var show = calculator(num1,num2,operator);
// document.write(show);

/////////////////   Task 5   ///////////////////

// function convetSquare(num) {
//     var result = Math.pow(num,2)
//     document.write(result)
// }
// convetSquare(5);

/////////////////   Task 6     ///////////////////

// function factorialize(num) {
//     if (num === 0 || num === 1)
//       return 1;
//     for (var i = num - 1; i >= 1; i--) {
//       num *= i;
//     }
//     return document.write(num);
//   }
//   factorialize(5);

/////////////////   Task 7     ///////////////////

// function counting(num1,num2) {
//     for (let i = num1; i <= num2; i++) {
//         document.write(i)
//     }
// }
// counting(1,10);

/////////////////   Task 8     ///////////////////

// function calculateHypotenuse(base,perpendicular) {
//     function calculateSquare(num) {
//         return Math.pow(num,2)
//     }
//     var hypotenuse = calculateSquare(base) + calculateSquare(perpendicular);
//     return document.write(hypotenuse)
// }

// calculateHypotenuse(10,10);

/////////////////   Task 9     ///////////////////
// function calculateArea(height,width) {
//     var area = height * width
//     return document.write(area+"<br>");
// }
// var height = 100;
// var width =100;
// calculateArea(10,10);

// calculateArea(height,width);

/////////////////   Task 10     ///////////////////

// function checkPalindrome(str){
//        var cstr = str.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
//         var ccount = 0;
//         if(cstr==="") {
//             console.log("Nothing found!");
//             return false;
//         }
//         if ((cstr.length) % 2 === 0) {
//             ccount = (cstr.length) / 2;
//         } else {
//             if (cstr.length === 1) {
//                 console.log("Entry is a palindrome.");
//                 return true;
//             } else {
//                 ccount = (cstr.length - 1) / 2;
//             }
//         }
//         for (var x = 0; x < ccount; x++) {
//             if (cstr[x] != cstr.slice(-1-x)[0]) {
//                 console.log("Entry is not a palindrome.");
//                 return false;
//             }
//         }
//         console.log("The entry is a palindrome.");
//         return document.write("this string is palindome");
//     }

//     checkPalindrome("madam");

//  var userInput = prompt("Enter Any thing to convert first letter to capital");
// function toTitleCase(str) {
//     return str.replace(/\w\S*/g, function(txt){
//         return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
//     });
// }

/////////////////   Task 11     ///////////////////


// var titleCase = toTitleCase(userInput);
// document.write("Example String "+userInput+" <br> Expected Output :"+titleCase);

/////////////////   Task 12     ///////////////////

// function longestWord(string) {
//     var str = string.split(" ");
//     var longest = 0;
//     var word = null;
//     for (var i = 0; i < str.length; i++) {
//         if (longest < str[i].length) {
//             longest = str[i].length;
//             word = str[i];
//         }
//     }
//     return word;
// }
// var longest = longestWord("Web Development Tutorial");
// document.write("Example String "+"Web Development Tutorila"+ "<br> Expected Output :"+longest);


/////////////////   Task 13     ///////////////////

// function checkOccur(string,word) {
//     var regex = new RegExp(word,"g")
//     var count = (string.match(regex) || []).length;
//     return document.write(count);
// }

// checkOccur("Hellow world is world hellow","o");

/////////////////   Task 14     ///////////////////

// function calcCircumference(radius) {
//     var result = 2 * (3.14) *radius
//     return document.write("The circumference of "+ radius +" is "+result+"<br>")
// }
// function calcArea(radius) {
//     var result = 3.14 * (Math.pow(radius,2));
//       return document.write("The area of "+ radius +" is "+result)
// }
// calcCircumference(35);
// calcArea(35);
