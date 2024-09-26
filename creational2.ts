// Factory Pattern Implementation
interface Shape {
    draw(): void;
  }
  
  class Circle implements Shape {
    draw(): void {
      console.log('Drawing a Circle');
    }
  }
  
  class Square implements Shape {
    draw(): void {
      console.log('Drawing a Square');
    }
  }
  
  class ShapeFactory {
    createShape(shapeType: string): Shape | null {
      if (shapeType === 'circle') {
        return new Circle();
      } else if (shapeType === 'square') {
        return new Square();
      }
      return null;
    }
  }
  
  // Usage
  const factory = new ShapeFactory();
  const shape1 = factory.createShape('circle');
  shape1?.draw();
  
  const shape2 = factory.createShape('square');
  shape2?.draw();
  