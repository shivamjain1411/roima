// Decorator Pattern Implementation
interface Coffee {
    cost(): number;
    description(): string;
  }
  
  class BasicCoffee implements Coffee {
    cost(): number {
      return 5;
    }
  
    description(): string {
      return 'Basic Coffee';
    }
  }
  
  class MilkDecorator implements Coffee {
    constructor(private coffee: Coffee) {}
  
    cost(): number {
      return this.coffee.cost() + 1;
    }
  
    description(): string {
      return `${this.coffee.description()}, Milk`;
    }
  }
  
  class SugarDecorator implements Coffee {
    constructor(private coffee: Coffee) {}
  
    cost(): number {
      return this.coffee.cost() + 0.5;
    }
  
    description(): string {
      return `${this.coffee.description()}, Sugar`;
    }
  }
  
  // Usage
  let myCoffee: Coffee = new BasicCoffee();
  console.log(`${myCoffee.description()} : $${myCoffee.cost()}`);
  
  myCoffee = new MilkDecorator(myCoffee);
  console.log(`${myCoffee.description()} : $${myCoffee.cost()}`);
  
  myCoffee = new SugarDecorator(myCoffee);
  console.log(`${myCoffee.description()} : $${myCoffee.cost()}`);
  