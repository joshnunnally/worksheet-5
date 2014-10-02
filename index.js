"use strict"; // This line chooses a JavaScript dialect, one that helps both jsLint (used in OrionHub) and browsers catch errors.
/*jslint browser: true*/ // This line tells jsLint that the code will run in a browser.
/*global console*/ // This line tells jsLint that you're allowed to use console.log for printing.

function minimum_of_two(first_number, second_number) {
  var minimum;
 if (first_number < second_number) {
  minimum = first_number;
 } else {
  minimum = second_number;
 }
  return minimum;
}

function flip_a_coin() {
  var result;
  if (Math.random() < 0.5) {
    result = 'heads';
  } else {
    result = 'tails';
  }
  return result;
}

 function six_sided_dice()
{
  var number;
  number = Math.random() * 6;
  number = Math.ceil(number);
  return number;
}
six_sided_dice()

function print_5() {
  var result;
  result = [0,1,2,3,4];
  result[0] = six_sided_dice();
  result[1] = six_sided_dice();
  result[2] = six_sided_dice();
  result[3] = six_sided_dice();
  result[4] = six_sided_dice();
  return result;
}
print_5()

function yahtzee(result) {
  if (result[0] === result[1]) {
    if (result[1] === result[2]) {
      if (result[2] === result[3]) {
        if (result[3] === result[4]) {
          return 50;
        } else {
          return 0;
        }
      } else {
        return 0;
      }
    } else {
      return 0;
    }
  } 
  else {
    return 0;
  }
}
yahtzee(print_5())


  
  