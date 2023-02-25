const isOddOrEvenArrow = (number) => {
  const oddOrEven = number % 2 === 0? 'even' : 'odd';
  console.log(`The number ${number} is ${oddOrEven}`);
}

const isOddOrEvenRegularConst = function(number) {
  const oddOrEven = number % 2 === 0? 'even' : 'odd';
  console.log(`The number ${number} is ${oddOrEven}`);
}

function isOddOrEvenRegular(number) {
  const oddOrEven = number % 2 === 0? 'even' : 'odd';
  console.log(`The number ${number} is ${oddOrEven}`);
}