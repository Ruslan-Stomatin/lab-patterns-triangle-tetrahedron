import { Point3D } from '../entities/Point3D';
import { Tetrahedron } from '../entities/Tetrahedron';

describe('Tetrahedron', () => {
    // Здесь мы создаем стандартный тетраэдр с вершинами в начале координат
    // и по одной вершине на каждой координатной оси
    const a = new Point3D(0, 0, 0);
    const b = new Point3D(1, 0, 0);
    const c = new Point3D(0, 1, 0);
    const d = new Point3D(0, 0, 1);
    const tetrahedron = new Tetrahedron(a, b, c, d);

    test('correctly calculates volume', () => {
        // Вызываем метод volume() для вычисления объема
        const volume = tetrahedron.volume();

        // Проверяем, что объем положительный и примерно равен 0.1667 (1/6)
        expect(volume).toBeGreaterThan(0);
        expect(volume).toBeCloseTo(1 / 6, 2);
    });

    test('correctly calculates surface area', () => {
        // Вызываем метод surfaceArea() для вычисления площади поверхности
        const surfaceArea = tetrahedron.surfaceArea();

        // Проверяем, что площадь поверхности больше 1 (примерное значение зависит от точек)
        expect(surfaceArea).toBeGreaterThan(1);
    });

    test('detects if the base lies on a coordinate plane', () => {
        // Проверяем, что основание ABC лежит на координатной плоскости XY
        const isOnPlane = tetrahedron.isBaseOnCoordinatePlane();

        expect(isOnPlane).toBe(true);
    });

    test('has the correct shape name', () => {
        // Проверяем, что свойство name возвращает строку 'Tetrahedron'
        const name = tetrahedron.name;

        expect(name).toBe('Tetrahedron');
    });
});
