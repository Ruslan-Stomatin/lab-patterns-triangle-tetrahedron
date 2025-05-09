import { Point } from '../entities/Point2D';
import { Triangle } from '../entities/Triangle';
import { TriangleValidator } from '../validators/TriangleValidator';
import { InvalidTriangleError } from '../exceptions/InvalidTriangleError';

// Фабрика создаёт треугольники и проверяет, можно ли их построить из заданных точек
export class TriangleFactory {
    static create(a: Point, b: Point, c: Point): Triangle {
        // Проверяем, образуют ли эти точки треугольник
        const isValid = TriangleValidator.isValid(a, b, c);

        if (!isValid) {
            // Если все 3 точки лежат на одной прямой, выдаём ошибку
            throw new InvalidTriangleError('The points lie on the same line');
        }

        // Если проверка прошла, создаём и возвращаем триугольник
        return new Triangle(a, b, c);
    }
}
