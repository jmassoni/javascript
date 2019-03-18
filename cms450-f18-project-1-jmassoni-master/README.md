# Project 1: JavaScript

## Due Wednesday, 9/19, at 11:59:59 PM

## Honor Code

Edit this file to include your name and a statement of the Honor Code.

“On my honor, I have not given, nor received, nor witnessed any unauthorized assistance on this work.” -Joey Massoni

## Git Commands

Clone this repo to your workspace using

```
$ git clone http://github.com/rollinscs/cms450-f18-project-1-YOURNAME
```

When you have edited your files, push your changes back to GitHub using

```
$ git add .
$ git commit -m "Commit message."
$ git push origin master
```

Remember that Git will become angry if your local repo and your remote GitHub repo become out of sync, so don't make edits in the GitHub web interface.

## Problems

### Babel

Do some reading about Babel for JS. What is it? Why is it something that modern JS developers might need?

Edit this file to include your answer.

    Babel is a popular JS compiler that converts modern JS into syntax compatible with the browser it's running in.
    It does this by parsing the JS code into an Abstract Syntax Tree, allowing for conversion to older versions of JS.

    Plug-ins are used for basic and expanded functionality. Groups of plug-ins can be installed via 'presets'.

    JS is being iterated rapidly by TC39 and with each new version comes a number of useful new features that 
    require/allow for drastically different syntax. Browsers, on the other hand, are updated less regularly and don't
    necessarily prioritize JS version compatibility. Using Babel allows developers to write using modern syntax
    and take advantage of powerful new features without breaking compatibility with the wide variety of browsers
    available to users.


### Chalk and Rainbows

`npm` is the *node package manager*, a way to install new modules for your nodejs programs.

`chalk` is a fun module that lets you style console output.

```
$ npm install chalk
```

Create a file named `chalk.js` and run the following code:

```
const chalk = require('chalk');
console.log(chalk.bold.underline.bgRed.blue('Hello, World!'));
```

The first line is how you import an `npm` package into a script. The second line uses `chalk` to create blue bold underlined text with a red background.

Write a function that takes a string as input and uses `chalk` to print rainbow text. Every letter should have a different color and the colors should cycle through the rainbow.

Tip: you can get [most colors](https://www.w3.org/wiki/CSS/Properties/color/keywords) using the `keyword` method.

```
chalk.keyword('orange')('This will be orange.')
```

There are related methods called `hex` and `rgb` that lets you specify the hex or RGB codes of the colors you want.

Test your code on the strings `Taste the rainbow` and `Rainbow in the dark`.

### The Doomsday Rule

The Doomsday Rule, invented by mathematician John Conway, is an algorithm for finding the day of the week for a given date within a year. It relies on the fact that several easy-to-remember days always fall on the same day of the week, which Conway calls the *doomsday* for the year.

The doomsday for 2018 is Wednesday. The most important days that fall on the Doomsday are

- April 4 (4/4)
- June 6 (6/6)
- August 8 (8/8)
- October 10 (10/10)
- December 12 (12/12)
- the last day of February (2/28 or 2/29 in Leap Years)
- January 3 (1/3) in regular years

To find the day of the week for a date, calculate the distance in days from one of the dates that is guaranteed to fall on the doomsday. The distance modulo 7 gives the number of days of the week separating the target date from the doomsday.

For example, August 17 is nine days from August 8, which is a doomsday. 9 mod 7 is 2, so the day of the week for 8/17 is two days after the doomsday, which is Friday in 2018.

Write a script called `doomsday.js` that implements this algorithm for 2018 (don't worry about any other year).

Oh, yeah: you need to read the month and day from the console. Use the `readline` module. You can import it by putting this line at the
top of your program:

```
const readline = require('readline');
```

Reading from the console in node is tricky, because it doesn't want to block for synchronous input. Instead, you have to supply an anonymous function that specifies what to do with the input once it's received from the console. Check out the documentation to find some examples (this will be an essential skill as we move deeper into web programming).

P.S. There *is* a `readline-sync` method, but you're not allowed to use it for this problem!

P.P.S John Conway is most famous for inventing the Life cellular automaton.

### 10001st Prime

By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13. What is the 10001st prime number?

This Project Euler problem 7.

You can solve this by grinding through numbers, testing each one for primality until you count 10001 primes. That is, however, lame, and will take a long time.

A more efficient solution can take advantage of the Fundamental Theorem of Arithmetic: every integer has a unique prime factorization. If you have a list of all the primes less than some number *N*, then *N + 1* must either be divisible by one of those primes, or must
itself be prime.

Therefore, if you keep a list of the primes you find, it's easy to test if a new number is prime: it's either divisible by some number
in the list, or it isn't and must be a new prime.

Put your solution in a script named `primes.js`.


