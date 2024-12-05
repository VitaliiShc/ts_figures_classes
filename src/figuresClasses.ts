type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
}

export class Triangle implements Figure {
  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error(`the side can't be less than or equal to 0`);
    }

    if (a >= b + c || b >= a + c || c >= a + b) {
      throw new Error(`sides 1, 2 and 3 can't form a triangle`);
    }
  }

  shape: Shape = 'triangle';

  getArea(): number {
    const semiperimeter = (this.a + this.b + this.c) / 2;
    const triangleArea = Math.sqrt(
      semiperimeter *
        (semiperimeter - this.a) *
        (semiperimeter - this.b) *
        (semiperimeter - this.c),
    );
    const roundedArea = Number(
      (Math.floor(triangleArea * 100) / 100).toFixed(2),
    );

    return roundedArea;
  }
}

export class Circle implements Figure {
  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error(`the radius can't be less than or equal to 0`);
    }
  }

  shape: Shape = 'circle';

  getArea(): number {
    const circleArea = Math.PI * this.radius ** 2;
    const roundedArea = Number((Math.floor(circleArea * 100) / 100).toFixed(2));

    return roundedArea;
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error(`the side can't be less than or equal to 0`);
    }
  }

  shape: Shape = 'rectangle';

  getArea(): number {
    const rectangleArea = this.width * this.height;
    const roundedArea = Number(
      (Math.floor(rectangleArea * 100) / 100).toFixed(2),
    );

    return roundedArea;
  }
}

export function getInfo(figure: object): string {
  // return typeof figure;
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
