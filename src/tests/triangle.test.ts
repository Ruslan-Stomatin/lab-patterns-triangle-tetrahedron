import { TriangleFactory } from '../factories/TriangleFactory';
import { Point } from '../entities/Point2D';

describe('Triangle', () => {
    test('correctly calculates perimeter', () => {
        // Создаем треугольник с координатами (0,0), (0,3), (4,0) 
        // - это прямоугольный треугольник со сторонами 3, 4, 5
        const a = new Point(0, 0);
        const b = new Point(0, 3);
        const c = new Point(4, 0);
        const triangle = TriangleFactory.create(a, b, c);

        // Вычисляем периметр (3 + 4 + 5 = 12)
        const perimeter = triangle.perimeter();

        expect(perimeter).toBeCloseTo(12, 2);
    });

    test('correctly calculates area', () => {
        // Создаем тот же треугольник (0,0), (0,3), (4,0)
        const a = new Point(0, 0);
        const b = new Point(0, 3);
        const c = new Point(4, 0);
        const triangle = TriangleFactory.create(a, b, c);

        // Вычисляем площадь ((3 * 4) / 2 = 6)
        const area = triangle.area();

        expect(area).toBeCloseTo(6, 2);
    });

    test('throws error for collinear points', () => {
        // Пробуем создать треугольник с точками, лежащими на одной прямой (0,0), (1,1), (2,2)
        const a = new Point(0, 0);
        const b = new Point(1, 1);
        const c = new Point(2, 2);

        // Ожидаем, что будет выброшена ошибка с текстом 'The points lie on the same line'
        expect(() => {
            TriangleFactory.create(a, b, c);
        }).toThrow('The points lie on the same line');
    });
});
