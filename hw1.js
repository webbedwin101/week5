var food = ['okar', 'carrots', 'kale', 'spinach', 'onions', 'apples', 'bananas', 'grapes', 'oranges'];

food.pop() // removes one element from the end of the array
console.log(food);

food.push('strawberries'); //adds strawberries to the end of the array
console.log(food);

food.shift(); // removes one element from the front of the array
console.log(food);

food.unshift('broccoli'); //add broccoli to the front of the array
console.log(food);

var veggies = food.slice(0,5); //creates a new array with only veggie items
console.log(veggies); 

var fruit = food.slice(5,9); //creates a new array with only fruit items
console.log(fruit); 

food.splice(5,1);
console.log(food);//removed apples
food.splice(5,0, 'apples')// reinserting apples
console.log(food)//apple reinserted at index 5;
food.splice(4,1);
console.log(food); //removes onions

food.splice(2,2, 'brussel sprouts');//removes spinach and kale then adds brussel sprouts
console.log(food);

var text = "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
text.length // provides length of string
console.log(text[5]);  // shows ','
console.log(text[56]);  // shows '.' 

var lorem = text.slice(0,5);
console.log(lorem); //shows Lorem

var chores1 = 'clean, pay bills, groceries';
var chores2 = 'learn JS, doctors office, pick up kids'; 
chores1Arr = chores1.split(/\s*,\s*/);
chores2Arr = chores2.split(/\s*,\s*/);
var allChores = chores1Arr.concat(chores2Arr); 
console.log(allChores);  //returns complete array with no extra front spaces. 
