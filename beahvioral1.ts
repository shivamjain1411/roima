// Observer Pattern Implementation
interface Subscriber {
    notify(message: string): void;
  }
  
  class NewsPublisher {
    private subscribers: Subscriber[] = [];
  
    subscribe(subscriber: Subscriber) {
      this.subscribers.push(subscriber);
    }
  
    unsubscribe(subscriber: Subscriber) {
      this.subscribers = this.subscribers.filter(sub => sub !== subscriber);
    }
  
    publish(article: string) {
      console.log(`Publishing article: ${article}`);
      this.subscribers.forEach(subscriber => subscriber.notify(`New article: ${article}`));
    }
  }
  
  class EmailSubscriber implements Subscriber {
    notify(message: string): void {
      console.log(`Email subscriber received: ${message}`);
    }
  }
  
  class SmsSubscriber implements Subscriber {
    notify(message: string): void {
      console.log(`SMS subscriber received: ${message}`);
    }
  }
  
  // Usage
  const publisher = new NewsPublisher();
  const emailSub = new EmailSubscriber();
  const smsSub = new SmsSubscriber();
  
  publisher.subscribe(emailSub);
  publisher.subscribe(smsSub);
  
  publisher.publish('New TypeScript Features');
  