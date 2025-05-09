import { Point } from '../entities/Point2D';

// Валидатор проверяет, можно ли построить треугольник из 3 точек
export class TriangleValidator {
    static isValid(a: Point, b: Point, c: Point): boolean {
        // Вычисляем площадь треугольника по формуле (через координаты вершин)
        const area = 0.5 * Math.abs(
            a.x * (b.y - c.y) +
            b.x * (c.y - a.y) +
            c.x * (a.y - b.y)
        );

        // Проверяем: если площадь равна 0, точки лежат на одной прямой (не треугольник)
        return area !== 0;
    }
}
