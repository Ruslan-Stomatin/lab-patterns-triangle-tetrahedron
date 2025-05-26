import { Point3D } from '../entities/Point3D';

// Валидатор проверяет, можно ли построить тетраэдр из 4 точек
export class TetrahedronValidator {
    static isValid(a: Point3D, b: Point3D, c: Point3D, d: Point3D): boolean {
        // Считаем объём тетраэдра по формуле 
        const v = Math.abs(
            (a.x - d.x) * ((b.y - d.y) * (c.z - d.z) - (c.y - d.y) * (b.z - d.z))
            -
            (a.y - d.y) * ((b.x - d.x) * (c.z - d.z) - (c.x - d.x) * (b.z - d.z))
            +
            (a.z - d.z) * ((b.x - d.x) * (c.y - d.y) - (c.x - d.x) * (b.y - d.y))
        ) / 6;

        // Проверяем: объём должен быть больше нуля (иначе точки лежат в одной плоскости)
        return v > 0;
    }
}
