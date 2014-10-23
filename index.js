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

function SumOfNumbers(list) {
	var result;
	result = 0;
	for (var index = 0; index < list.length; index = index +1) {
		result = result + list[index];
	}
	return result;
	}
SumOfNumbers([1,2,3,4]);

function comparator(first, second) {
  if (first === second) {
    return 0;
  } else {
    if (first < second) {
      return - 1;
    } else {
      return + 1;
    }
  }
}
function four_of_a_kind(list) {
  list.sort(comparator);
  if (list[0] === list[1]) {
    if (list[0] === list[3]) {
      return SumOfNumbers(list);
    } else {
      return 0;
    }
  }
  if (list[1] === list[2]) {
    if (list[1] === list[4])  {
      return SumOfNumbers(list);
    } else {
      return 0;
    }
  }
  return 0;
}

// attach the .equals method to Array's prototype to call it on any array
Array.prototype.equals = function (array) {
	// if the other array is a falsy value, return
	if (!array)
		return false;
		
	// compare lengths - can save a lot of time
	if (this.length != array.length)
		return false;
		
	for (var i = 0, l=this.length; i < l; i++) {
		// Check if we have nested arrays
		if (this[i] instanceof Array && array[i] instanceof Array) {
			// recurse into the nested arrays
			if (!this[i].equals(array[i]))
				return false;
		}
		else if (this[i] != array[i]) {
			// Warning - two different object instances will never be equal: {x:20} != {x:20}
			return false;
		}
	}
	return true;
}
//[1,2,3,4,5].equals([1,2,3,4,5])
//[2,3,4,5,6].equals([1,2,3,4,5])

function large_straight(list) {
	var result;
	if (list.equals([1,2,3,4,5])) {
		(result = 40);
	} else if (list.equals([2,3,4,5,6])) {
		(result = 40);
	} else {
		(result = 0);
	}
	return result;
}
large_straight([3,2,3,4,5]);
//http://stackoverflow.com/questions/7837456/comparing-two-arrays-in-javascript
// used for comparing list.

function comparator(first, second) {
  if (first === second) {
    return 0;
  } else {
    if (first < second) {
      return - 1;
    } else {
      return + 1;
    }
  }
}
function fullhouse(list) {
  list.sort(comparator);
  if (list[0] === list[1]) {
    if (list[2] === list[4]) {
      return 25;
    } else if (list[0] === list[2])
    {
      if (list[3] === list[4]) {
        return 25;
      } else {
        return 0;
      }
    }
  }
  return 0;
}

function game(list, functions) {
  var result = [];
  var index;
  index = 0;
  while (index < functions.length) {
    result[index] = functions[index](list);
    index = index + 1;
  }
  return result;
}

function max(list) {
  list.sort(comparator);
  return list[list.length - 1];
}
max([1,5,2]);

function highscore(list){
  var result;
result = game(list,[yahtzee,large_straight,four_of_a_kind]);
result.sort(comparator);
return result[result.length - 1];
}

function dice_rolls() {
  var list_of_die_rolls;
  var die_rolls;
  die_rolls = 1;
  list_of_die_rolls = print_5();
  while (highscore(list_of_die_rolls) < 25) {
    die_rolls = die_rolls + 1;
    list_of_die_rolls = print_5();
  }
  return die_rolls;
}
dice_rolls();

	



  
  