// This program changes the letters of a word or group of words so that each letter is a different color of the rainbow

const chalk = require('chalk');
const readline = require('readline-sync');

// I used readline-sync for this file *not in doomsday*. This takes user input via terminal
// It's helpful that the input is immediately saved into the variable word and it's a very simple implementation

var word = readline.question("What word would you like colorized? \n");

// I instantiate two variables here. 'num' allows for cycling through colors.
// 'arr' acts as an array to hold the converted, colorized word

var num = 0;
var arr = [];

// This for loop cycles through each letter of the input from 'word'
// An if statement checks for spaces to skip colorizing them

for (var i = 0; i < word.length; i++) {
  if (word.charAt(i) == ' ') {
    
    arr[i] = ' ';

// The outer else statment holds the colorizing code    
    
  } else {
    
// An if/else if statement and chalk are used to convert each letter to the next color in the rainbow
// I found it easier to do this in a separate array
    
    if (num === 0){
      arr[i] = (chalk.keyword('red')(word.charAt(i)));
    } else if( num == 1) {
      arr[i] = (chalk.keyword('orange')(word.charAt(i)));
    } else if( num == 2) {
      arr[i] = (chalk.keyword('yellow')(word.charAt(i)));
    } else if( num == 3) {
      arr[i] = (chalk.keyword('green')(word.charAt(i)));
    } else if( num == 4) {
      arr[i] = (chalk.keyword('blue')(word.charAt(i)));
    } else if( num == 5) {
      arr[i] = (chalk.keyword('indigo')(word.charAt(i)));
    } else if( num == 6) {
      arr[i] = (chalk.keyword('violet')(word.charAt(i)));
    }
    
// This if/else statement helps to switch colors and start over at red
    
    if ( num == 6) {
      num = 0;
    } else {
      num = num + 1;
    }
    
  }  
  
}

// Printing the array results in a bunch of comma-separated letters
// I use join to combine each element in the array, then I print that final 'colorizedWord'

var colorizedWord = arr.join("");
console.log(colorizedWord);