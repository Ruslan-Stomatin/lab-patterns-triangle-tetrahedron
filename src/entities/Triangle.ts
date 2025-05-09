import { Point } from './Point2D';

// Класс Triangle описывает треугольник по 3 точкам (A, B, C)
export class Triangle {
    public readonly name: string = 'Triangle';

    constructor(
        public readonly a: Point,
        public readonly b: Point,
        public readonly c: Point,
    ) {}

    // Метод вычисляет периметр треугольника (сумма длин сторон)
    perimeter(): number {
        const ab = this.a.distanceTo(this.b);
        const bc = this.b.distanceTo(this.c);
        const ca = this.c.distanceTo(this.a);
        return ab + bc + ca;
    }

    // Метод вычисляет площадь треугольника по формуле Герона
    area(): number {
        const ab = this.a.distanceTo(this.b);
        const bc = this.b.distanceTo(this.c);
        const ca = this.c.distanceTo(this.a);
        const s = (ab + bc + ca) / 2; // полупериметр
        return Math.sqrt(s * (s - ab) * (s - bc) * (s - ca));
    }
}
