let names = "Hello World";
var names2 = "Hello - 2";

const val = 50;
names2 = "Yes";
names = "Hi";

// console.log(names)
// console.log(names2)
// console.log(val)

// {
//   var text = "001"
//   console.log(text)
// }
// console.log(text)

// const var = 5

// Hello

/*
  Hello
*/

let x = 5;
let y = 5;

// console.log(x+y) // 10
// console.log(x-y)
// console.log(x*y)
// console.log(x/y)
console.log("=======");
console.log(x);
let z = ++x; // pre
console.log(z);
console.log("=======");
console.log(x);
let u = x++; // post
console.log(u);

const a = "Hello";
const e = 5;
const w = 1.0;
const r = null;
const v = true;
const q = undefined;

console.log(typeof a, e, w, r, v, q);

// Par
function add(a, b) {
  return a + b;
}

let ans = add(5, 6); // Arg
console.log(ans);

function area(l, b) {
  return l * b;
}

console.log(area(2, 5));

const res = 10;

if (res == 10) {
  console.log("IF Block");
} else {
  console.log("Else Block");
}

for (let i = 1; i < 99; i = i + 1) {
  console.log(i);
}
