
const testlist = [1, 2, 3, 4];
const sumFor = function (list) {
  let sum = 0;
  for (let i = 0; i < list.length; i++) {
    sum += list[i];
  }
  return sum;
};

console.log(sumFor(testlist));

function sumWhile(list) {
  let i = 0;
  let sum = 0;
  while (i < list.length) {
    sum += list[i];
    i++;
  }
  return sum;
}

console.log(sumWhile(testlist));

function sumRecursion(list) {
  if (list.length === 0) {
    return 0;
  } return list[0] + sumRecursion(list.slice(1, list.length));
}
console.log(sumRecursion(testlist));

const sumTheSimpleWay = function (list) { return _.reduce(list, function (e1, e2) { return e1 + e2; }, 0); };

console.log(sumTheSimpleWay(testlist));
