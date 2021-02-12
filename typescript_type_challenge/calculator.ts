/**
 * Let's make a calculator 🧮
 */

type Method = "add" | "substract" | "multiply" | "divide" | "remainder";

const calculate = (method: Method, numA: number, numB: number): number => {
  switch (method) {
    case "add": return numA + numB;
    case "substract": return numA - numB;
    case "multiply": return numA * numB;
    case "divide": return numA / numB;
    case "remainder": return numA % numB;
    default: throw Error("Unknown command");
  }
}
console.log(calculate('add', 1, 3)); // 4
console.log(calculate('substract', 3, 1)); // 2
console.log(calculate('multiply', 4, 2)); // 8
console.log(calculate('divide', 4, 2)); // 2
console.log(calculate('remainder', 5, 2)); // 1
