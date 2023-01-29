const logAll = () => {
  const arr = Array.from({length: 10}, (_, index) => {
    return index+1;
  });
  const methods = mapMethods(arr);

  let list = '';
  methods.forEach((result, testCase) => {
    list += `\n\t${testCase}: ${result}\n`
  });

  console.log(`
    Showing all array methods using [${arr}]: ${list} 
  `)
}

const mapMethods = (arr) => {
  const map = new Map();

  map
    .set(
      ".at(-2)",
      arr.at(-2)
    )
    .set(
      ".concat([10, 11, 12])",
      arr.concat([10, 11, 12])
    )
    .set(
      ".copyWithin(5, 1, 4)",
      [...arr].copyWithin(5, 1, 4)
    )
    .set(
      ".entries()",
      Array.from(arr.entries())
    )
    .set(
      ".every((number) => number < 11)",
      arr.every((number) => number < 11)
    )
    .set(
      ".fill(10)",
      [...arr].fill(10)
    )
    .set(
      ".filter((number) => number > 5)",
      [...arr].filter((number) => number > 5)
    )
    .set(
      ".find((number) => number / 3 > 2)",
      arr.find((number) => number / 3 > 2)
    )
    .set(
      ".findIndex((number) => number / 3 > 2)",
      arr.findIndex((number) => number / 3 > 2)
    )
    .set(
      ".findLast((number) => number / 3 > 2)",
      arr.findLast((number) => number / 3 > 2)
    )
    .set(
      ".findLastIndex((number) => number / 3 > 2)",
      arr.findLastIndex((number) => number / 3 > 2)
    )
    .set(
      "[...arr, [[[25, 30, 40]]]].flat()",
      [...arr, [[[25, 30, 40]]]].flat()
    )
    .set(
      "[...arr, [[[25]]]].flatMap((number) => number-5)",
      [...arr, [[[25]]]].flatMap((number) => number-5)
    )
    .set(
      ".includes(4)",
      arr.includes(4)
    )
    .set(
      ".indexOf(4)",
      arr.indexOf(4)
    )
    .set(
      "Array.isArray(arr)",
      Array.isArray(arr)
    )
    .set(
      ".join('-')",
      arr.join('-')
    )
    .set(
      ".keys()",
      Array.from(arr.keys())
    )
    .set(
      ".lastIndexOf(10)",
      arr.lastIndexOf(10)
    )
    .set(
      ".map(number => number*2)",
      arr.map(number => number*2)
    )
    .set(
      "Array.of(1, 2, 3)",
      Array.of(1, 2, 3)
    )
    .set(
      ".pop()",
      `returns element: ${arr.pop()}, array: ${arr}`
    )
    .set(
      ".push(14)",
      `returns length: ${arr.push(14)}, array: ${arr}`
    )
    .set(

    )
  return map;
}
logAll();

