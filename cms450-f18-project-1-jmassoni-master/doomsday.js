// This program helps determine day of the week for dates in 2018

const readline = require('readline');

// I use readline here, as suggested, and implemented an anonymous function to handle basic input/output

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// My dayOfTheWeek function takes a number that is the difference between the requested date and the doomsday
// The number is modded and stored in a 'swing' variable
// An if/else if statement uses the 'swing' variable to choose the day of the week, based off of that distance

function dayOfTheWeek(num){
  var swing = num % 7;
  
  if(swing === 0){
    console.log("This date will fall on a Wednesday!");
  } else if (swing === 1){
    console.log("This date will fall on a Thursday!");
  } else if (swing === 2){
    console.log("This date will fall on a Friday!");
  } else if (swing === 3){
    console.log("This date will fall on a Saturday!");
  } else if (swing === 4){
    console.log("This date will fall on a Sunday!");
  } else if (swing === 5){
    console.log("This date will fall on a Monday!");
  } else if (swing === 6){
    console.log("This date will fall on a Tuesday!"); 
  }
}

// I made separate functions for each chunk of the year starting with a doomsday and ending just before the next on
// This allowed me to avoid the variability of the requested day being just before a doomsday
// This also accounted for the relative randomness of the days and their distance from one another

// function 'jan3Feb28', for example, takes in the 'month' and 'day' as parameter variables
// I use this to specify that I'm utilizing the parameter variables as opposed to other instances of 'month' and 'day'
// If/else if/else statements help check for the month. Then the difference from the doomsday is calculated and sent to
// the 'dayOfTheWeek' function. The variability of shorter vs. longer months is accounted for in the if/else statements
// by adding the number of days from the previous month. This kept things from getting too confusing for me and worked well.

function jan3Feb28(month, day){
  this.month = month;
  this.day = day;
  
  if (month.toLowerCase() === ("january")){
    difference = day - 3;
  } else {
    difference = (31 + parseInt(day)) - 3;
  }
  
  dayOfTheWeek(difference);
  
}

function mar1Apr3(month, day){
  this.month = month;
  this.day = day;
  
  if (month.toLowerCase() === ("march")){
    difference = day;
  } else {
    difference = (31 + parseInt(day));
  }
  
  dayOfTheWeek(difference);
  
}

function apr4Jun5(month, day){
  this.month = month;
  this.day = day;
  
  if (month.toLowerCase() === ("april")){
    difference = day - 4;
  } else if (month.toLowerCase() === ("may")) {
    difference = (30 + parseInt(day)) - 4;
  } else {
    difference = (61 + parseInt(day)) - 4;
  }
  
  dayOfTheWeek(difference);
  
}

function jun6Aug8(month, day){
  
  this.month = month;
  this.day = day;
  
  if (month.toLowerCase() === ("june")){
    difference = day - 6;
  } else if (month.toLowerCase() === ("july")) {
    difference = (30 + parseInt(day)) - 6;
  } else {
    difference = (61 + parseInt(day)) - 6;
  }
  
  dayOfTheWeek(difference);
  
}

function aug8Oct9(month, day){
  
  this.month = month;
  this.day = day;
  
  if (month.toLowerCase() === ("august")){
    difference = day - 8;
  } else if (month.toLowerCase() === ("september")) {
    difference = (31 + parseInt(day)) - 8;
  } else {
    difference = (61 + parseInt(day)) - 8;
  }
  
  dayOfTheWeek(difference);
  
}

function oct10Dec11(month, day){
  
  this.month = month;
  this.day = day;
  
  if (month.toLowerCase() === ("october")){
    difference = day - 10;
  } else if (month.toLowerCase() === ("november")) {
    difference = (31 + parseInt(day)) - 10;
  } else {
    difference = (61 + parseInt(day)) - 10;
  }
  
  dayOfTheWeek(difference);
  
}

function dec12Jan2(month, day){
  
  this.month = month;
  this.day = day;
  
  if (month.toLowerCase() === ("december")){
    difference = day - 12;
  } else {
    difference = (31 + parseInt(day)) - 13;
  }
  
  dayOfTheWeek(difference);
  
}

// This was the easiest way I found to take input, utilize it and close while using readline
// I intentionally created abstracted as many functions away as possible to avoid having 'question' become a monster

rl.question('For which date would you like to find the day of the week? ', (answer) => {

// I used an array 'arr' to split the answer on the space
// I labeled the first and second indices of the array as 'month' and 'day'

  var arr = answer.split(" ");
  var month = arr[0];
  var day = arr[1];
  
// The difference variable is used throughout the file to calculate distance from doomsday  
  
  var difference = 0;
  
// This if/else if statement checks for outer bounds of each date range and sends the particular month and day to
// the appropriate function. Final output is handled by the 'dayOfTheWeek' function
  
  if ((month.toLowerCase() === ("january") && (day >= 3)) ||
      month.toLowerCase() === ("february")){
      jan3Feb28(month, day);
  } else if ((month.toLowerCase() === ("march") ||
    month.toLowerCase() === ("april") && (day < 4))){
      mar1Apr3(month, day);
  } else if ((month.toLowerCase() === ("april") && (day >= 4) ||
    month.toLowerCase() === ("may") || 
    month.toLowerCase() === ("june") && (day < 6))){
      apr4Jun5(month, day);
  } else if ((month.toLowerCase() === ("june") && (day >= 6) ||
    month.toLowerCase() === ("july") || 
    month.toLowerCase() === ("august") && (day < 8))){
      jun6Aug8(month, day);
  } else if ((month.toLowerCase() === ("august") && (day >= 8) ||
    month.toLowerCase() === ("september") || 
    month.toLowerCase() === ("october") && (day < 10))){
      aug8Oct9(month, day);
  } else if ((month.toLowerCase() === ("october") && (day >= 10) ||
    month.toLowerCase() === ("november") || 
    month.toLowerCase() === ("december") && (day < 12))){
      oct10Dec11(month, day);
  } else if ((month.toLowerCase() === ("december") && (day >= 12) ||
    month.toLowerCase() === ("january") && (day < 3))){
      dec12Jan2(month, day);
  }
  
  rl.close();
  
});

