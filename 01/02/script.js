let name = "Santos";
let num = 5;
let realNum = 4.73;
let uninit; // undefined

const PI = 3.14159;

function doNothing() {

}

//output.innerText = 8 % 5;

// if (num % 2 == 0) {
//     output.innerText = "EVEN";
// }
// else {
//     output.innerText = "ODD";
// }

// var cat = "Sparky"; // <-- old usage
// output.innerText = typeof cat;

num = 7;
output.innerText = num;

// Example: I want to calculate the average height of everyone at OIS.
// let height1 = 100;
// let height2 = 117;
// let height3 = 111;
// let height4 = 96;
// let height5 = 57;
// let height6 = 78;

// output.innerText = (height1 + height2 + height3 + height4 + height5 + height6) / 6;

// Declaration Syntax:
let heights = [100, 117, 111, 96, 57, 78];
output.innerText = heights;

// Syntax for finding a specific value:
output.innerText = heights[3];
// Note: In Javascript, arrays index values start at 0.
output.innerText = heights.length;

output.innerText = (heights[0] + heights[1] + heights[2] + heights[3] + heights[4] + heights[5]) / heights.length;