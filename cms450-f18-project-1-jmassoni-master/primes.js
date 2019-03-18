// This program finds the 100001st prime number by comparing with previous primes

// I created an array 'arr' with the first four primes to get the ball rolling
// 'i' acts as the first test number, essentially

var arr = [2, 3, 5, 7];
var i = 8;

// I used an outer while loop to get to the 10001st position of the array of primes
// I labeled it outer to allow for jumping to the top of the loop once I knew the number wasn't prime

outer:
  while(arr.length < 10001) { 
    
// 'j' represents the use of the Fundamental Theorem of Arithmetic by adding one to test number
// 'x' helps iterate through previous primes that have been added to 'arr'
// while loops seemed to work better for me here because they offered a little more control
    
    var j = i + 1;
    var x = 0;

// My inner while loop, labeled 'check', stops when all primes have been compared to the 'j'
    
    check:
      while( x < arr.length ){

// The outer if/else statement detects whether a number is divisible by any primes and counts up
// and exits to the outer loop as soon as 'j' is divisble by a prime
// The inner if/else statement essentially check to see if the number 'j' is not divisible
// by every single element in 'arr'. If it makes it past the last index it is added to the list of primes
        
        if(j % arr[x] === 0){
          x++;
          i++;
          continue outer;
        } else {
          if ((x === arr.length - 1)){
            arr.push(j);
          } else {
            x++;
            continue check;
          }
        }
      }
    i++;
  }

// Here I print out the last element in the 10001 number list

console.log(arr[arr.length-1]);
