let number1 = 3;
let number2 = 5;
console.log(number1);

const funk1 = () => {
  number1 = 44;
  const number2 = 7;
  console.log("LOCAL:", number2);
};

funk1();

console.log(number1);
console.log("GLOBAL:", number2);

{
  let x = 77;
  x++;
  console.log(x);
}

number2 = 4;
console.log(number2);

// console.log(number3);
// var number3 = 101;

var number3;
console.log(number3);
number3 = 101;
console.log(number3);

if (number3 === 102) {
  let result = "Hi";
  console.log(result);
} else {
  console.log(result);
  var result = "Hello";
}
console.log(result);
