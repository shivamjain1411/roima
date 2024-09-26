// Command Pattern Implementation
interface Command {
    execute(): void;
  }
  
  class Light {
    turnOn() {
      console.log('Light is On');
    }
    turnOff() {
      console.log('Light is Off');
    }
  }
  
  class TV {
    turnOn() {
      console.log('TV is On');
    }
    turnOff() {
      console.log('TV is Off');
    }
  }
  
  class TurnOnLightCommand implements Command {
    constructor(private light: Light) {}
  
    execute(): void {
      this.light.turnOn();
    }
  }
  
  class TurnOffTVCommand implements Command {
    constructor(private tv: TV) {}
  
    execute(): void {
      this.tv.turnOff();
    }
  }
  
  // Usage
  const light = new Light();
  const tv = new TV();
  
  const turnOnLight = new TurnOnLightCommand(light);
  const turnOffTV = new TurnOffTVCommand(tv);
  
  turnOnLight.execute();
  turnOffTV.execute();
  