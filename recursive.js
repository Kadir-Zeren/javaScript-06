const fakto = (n) => {
  if (n <= 1) {
    return 1;
  } else {
    return n * fakto(n - 1);
  }
};

const number = +prompt("n:");

number < 0
  ? alert("Number should be bigger than zero")
  : console.log(`Fakto(${number})= ${fakto(number)}`);
