// -------------- Chap 35-38 Functions ---------------


// 1. Write a function that displays current date & time in your browser.
        function time() {
            const date = new Date();
            document.write(date);
        }
        // time();


// 2. Write a function that takes first & last name and then it greets the user using his full name.
        function greets() {
            const firstName = prompt("Enter your First Name here").toUpperCase();
            const lastName = prompt("Enter your Last Name here").toUpperCase();
            document.write(" Hey! ", firstName, lastName," Welcome Back");
        }
        // greets();


// 3. Write a function that adds two numbers (input by user) and returns the sum of two numbers.
        function adds(){
            const num1 = +prompt('Enter a number for addition');
            const num2 = +prompt('Enter a second number for addition');
            const result = num1 + num2 ; 
            document.write('The sum of ', num1,' & ', num2, 'is: ' , result);
        }
        // adds();


// 4. Calculator: Write a function that takes three arguments num1, num2 & operator & compute the desired operation. Return and show the desired result in your browser.
        function calculate( num1, operator, num2){
            if (operator === '+') {
                const result = num1 + num2;
                console.log(result);
            }
            else if ( operator === '-'){
                const result = num1 - num2;
                console.log(result);
            }
            else if (operator === '*'){
                const result = num1 * num2;
                console.log(result);
            }
            else if (operator === '/'){
                const result = num1 / num2;
                console.log(result);
            }
            else {
                console.log('Invalid Operator');
            }
        }
        // const num1 = +prompt('Enter a first number');
        // const num2 = +prompt('Enter a second number');
        // const opera = prompt('Enter an operator (+,-,/,*)');
        // // calculate( num1,operator,num2);


// 5. Write a function that squares its argument.
        function square( num){
           return  num * num
        }
        // var number = +prompt('Enter number to be square');
        //    alert( square(number));



// 6. Write a function that computes factorial of a number.
       
        function factorial(n) {
            if (n === 0 || n === 1) {
              return 1;
            } else {
                let result = 1;
                for (let i = 2; i <= n; i++) {
                  result *= i;
                }
                return result;
            }
          }
          
          // const n = factorial(5);
          // document.write( 'Factorial of number is', n);
      
          

// 7. Write a function that take start and end number as inputs & display counting in your browser.
        function counting( start, end){
            for (let i=start; i<= end; i++){
                document.write(i + '<br>');
            }
        }
    //     const start = +prompt("Enter start number for counting");
    //     const end = +prompt("Enter end number for counting");
    //    counting(start,end);


// 8. Write a nested function that computes hypotenuse of a right angle triangle. Hypotenuse2 = Base2 + Perpendicular2
// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse() // Inner function: calculateSquare()

          function Hypotenuse(base, perpendicular) {
            const baseSq = base * base;
            const perpendicularSq = perpendicular * perpendicular;
            const hypotenuse = Math.sqrt(baseSq + perpendicularSq);
            return hypotenuse;
          }
          
          const base = 3;
          const perpendicular = 4;
        //   const hypotenuse = Hypotenuse(base, perpendicular);
        // document.write( "The hypotenuse of a right triangle with a base of ", base, " and a perpendicular of ", perpendicular," is: " ,hypotenuse);
           

          
// 9. Write a function that calculates the area of a rectangle. // A = width * height  
// Pass width and height in following manner: i. Arguments as value   ii. Arguments as variables

        function areaOfRectangle(width,height){
         const A= width * height;
         return A;
        }
        // const area = areaOfRectangle(10, 5);
        // document.write( 'Area of rectangle is: ',area);
        

// 10. Write a JavaScript function that checks whether a passed string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam.

        function checks(str) {
            const reversedStr = str.split('').reverse().join('');
            return str === reversedStr;
        }
        // const str1 = 'madam';
        // document.write(checks(str1));
        
        // const str2 = 'hello';
        // document.write("<br>", checks(str2));
            


// 11. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
// EXAMPLE STRING : 'the quick brown fox'  // EXPECTED OUTPUT : 'The Quick Brown Fox'
        function upperCase (str) {
          const first = str.split(' '); 
        
          const title =[];
         for ( let i=0; i < first.length; i++ ){
            title.push(first[i].charAt(0).toUpperCase() + first[i].slice(1) )
         }
        
         return title.join(' ');
        }

    // const   str = 'the quick brown fox';
    // const result = upperCase(str);
    // document.write('Example String: ', str, '<br>');
    // document.write('Expected Output: ', result,'<br>');

    

// 12. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'

function longWord(str) {
    var word = str.split(' ');
          var longestWord = word[0];
          for ( var i = 0; i < word.length; i++){
            if (word[i].length > longestWord.length ) {
              longestWord =word[i];
            }
          }
      return longestWord;
  }

// var str = "Web Development Tutorial";
// var longestWord = longWord(str);
// document.write( "EXAMPLE STRING : ", str , " => Output ", longestWord );

// 13. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number ofoccurrences of the specified letter within the string.
// Sample arguments : 'JSResourceS.com', 'o'

function stringCount( str, letter){
      var count = 0;
      for (var i = 0; i < str.length; i++){
        if (str [i] === letter) {
          count++;
        }
      }
      return count;
    }
    // var str = "JSResourceS.com";
    // var letter = "o";
    // var count = stringCount(str, letter);
    // document.write(str, "  =>  ", "(",letter, ")", " occurs " , count, " times" );


// 14. The Geometrizer, Create 2 functions that calculate properties of a circle, using the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.  • Calculate the circumference based on the radius, and output // "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.  • Calculate the area based on the radius, and output "The area is NN".

// Circumference of circle = 2πr
// Area of circle = πr2

function calcCircumference(radius){
  var pi = 3.14;
  var circumference = 2 * pi * radius;
  return circumference;

}

function calcArea(radius){
 const pi = 3.14;
 const area = pi * radius * radius;
 return area;
}

const radius = 10;
const circumference = calcCircumference(radius);
const area = calcArea (radius);

// document.write("The circumference is: ", circumference );

// document.write("<br> The area is: ", area);

