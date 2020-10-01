// The writer determines whether the following variables are of type array.
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
console.log("a = "+Array.isArray(a)+" and "+"b = "+Array.isArray(b));



// Write a program that multiplies each entry in the following array by 2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
var multiplier = 2;
var output = a.map(x=>x*multiplier);
console.log(output);


// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];
var case1 = colors.join();
var case2 = colors.join('+');
var case3 = colors.join(',');
//TODO case 1 output: 'Red Green White Black'
// case 2 output: 'Red+Green+White+Black'
// case 3 output: 'Red,Green,White,Black'
console.log(case1);
console.log(case2);
console.log(case3);


// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];
var output = a.sort((a, b) => b - a);
//TODO should output: [10,8,5,4,1]
console.log(output);


// Program to find the most frequent element in the following array.
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'
var mostFreq = 1;
var occurence = 0;
var item;

for (var i = 0; i < a.length; i++) {
  for (var j = i; j < a.length; j++) {
    if (a[i] == a[j]) occurence++;
    if (mostFreq < occurence) {
      mostFreq = occurence;
      item = a[i];
    }
  }
  occurence = 0;
}
console.log(item);