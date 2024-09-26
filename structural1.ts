// Adapter Pattern Implementation
interface OldPaymentGateway {
    processPayment(amount: number): void;
  }
  
  class NewPaymentGateway {
    makePayment(amount: number) {
      console.log(`Processing payment of $${amount} through New Gateway`);
    }
  }
  
  class PaymentGatewayAdapter implements OldPaymentGateway {
    private newGateway: NewPaymentGateway;
  
    constructor(newGateway: NewPaymentGateway) {
      this.newGateway = newGateway;
    }
  
    processPayment(amount: number): void {
      this.newGateway.makePayment(amount);
    }
  }
  
  // Usage
  const newGateway = new NewPaymentGateway();
  const adapter = new PaymentGatewayAdapter(newGateway);
  
  adapter.processPayment(100);
  