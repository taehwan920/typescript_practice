{
  // JavaScript
  function jsAdd(num1, num2) {
    return num1 + num2;
  };

  // TypeScript
  function add(num1: number, num2): number {
    return num1 + num2;
  };

  // JavaScript
  function jsFetchNum(id) {
    // code ...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // TypeScript
  function fetchNum(id: string): Promise<number> {
    // code ...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  };

  // Optional parameter
  function printName(firstName: string, lastName?: string) {
    console.log(firstName);
    console.log(lastName);
  };

  // Default parameter
  function printMessage(message: string = "default message") {
    console.log(message);
  };

  // Rest parameter
  function addNumbers(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b);
  };
}