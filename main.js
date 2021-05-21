/* Write a function named "convertFahrToCelsius" that takes a single parameter and converts it to celsius. */

function convertFahrToCelsius(fahrenheit) {
    var objectType = Object.prototype.toString.call(fahrenheit).slice(8, -1);
    var strToNum = /\d+/.test(fahrenheit);
    if (objectType === "Number") {
        celsius = (fahrenheit - 32) * 5 / 9;
        celsius = celsius.toFixed(4);
        return celsius;
      }
      else if (objectType === "String" && strToNum) {
        fahrenheit = parseFloat(fahrenheit);
        celsius = (fahrenheit - 32) * 5 / 9;
        celsius = celsius.toFixed(4);
        return celsius;
      }
      else {
        JsonNumber = JSON.stringify(fahrenheit);
        return `${JsonNumber} is not a valid number but a/an ${objectType}.`;
      }
    }
    
console.log(convertFahrToCelsius(0));
console.log(convertFahrToCelsius('0'));
console.log(convertFahrToCelsius([1,2,3]));
console.log(convertFahrToCelsius({temp: 0}));


/*Write a function named "checkYuGiOh" that takes a number, n, as an argument, creates an array of numbers from 1 to n and replaces multiples of 2, 3, and 5 with "yu", "gi" and "oh", then returns the resulting array.*/
function checkYuGiOh(n) {
    var n;
    var strToNum = /\d+/.test(n);
    var objectType = Object.prototype.toString.call(n).slice(8, -1);
    if (objectType === 'Number' || strToNum) {
      n = parseInt(n);
      var digitArray = Array.from({length: n}, (_, i) => i + 1);
      var solutionArray = digitArray.map(number => {
        switch (true) {
          case number%2==0 && number%3==0 && number%5==0:
            return (number = "yu-gi-oh");
          
          case number%2==0 && number%3==0:
            return (number = "yu-gi");
            
          case number%2==0 && number%5==0:
            return (number = "yu-oh");
          
          case number%3==0 && number%5==0:
            return (num = "gi-oh");
            
          case number%2==0:
            return (number = "yu");
            
          case number%3==0:
            return (number = "gi");
            
          case number%5==0:
            return (number = "yu");
          
          default:
            return number;
        }
      });
      return solutionArray;
    }
    else {
      var JsonNumber = JSON.stringify(n);
      return `invalid parameter:${JsonNumber}`;
    }
  }
  
console.log(checkYuGiOh(10));
console.log(checkYuGiOh("5"));
console.log(checkYuGiOh("fizzbuzz is meh"));


