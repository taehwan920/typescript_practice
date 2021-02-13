{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeeMaker {
    static BEANS_GRAM_PER_SHOT = 7;
    coffeeBeans = 0;

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAM_PER_SHOT) {
        throw new Error("Not enough coffee beans!");
      };
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAM_PER_SHOT;
      return {
        shots,
        hasMilk: false,
      };
    };
  };

  const maker = new CoffeeMaker(32);
  console.log(maker);

  console.log(CoffeeMaker.makeMachine(24));

  // class Coffee {

  //   BEANS_GRAM_PER_SHOT = 7;
  //   coffeeBeans = 0;
  //   makeCoffee = (shots: number): CoffeeCup => {
  //     if (this.coffeeBeans < shots * this.BEANS_GRAM_PER_SHOT) {
  //       throw new Error("Not enough coffee beans!");
  //     };
  //     this.coffeeBeans -= shots * this.BEANS_GRAM_PER_SHOT;
  //     return {
  //       shots,
  //       hasMilk: false,
  //     };
  //   };
  // };

  // const cupOfCoffee = new Coffee();
  // cupOfCoffee.coffeeBeans += 3 * cupOfCoffee.BEANS_GRAM_PER_SHOT;
  // console.log(cupOfCoffee.makeCoffee(2));
}