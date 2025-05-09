import { Point3D } from '../entities/Point3D';
import { Tetrahedron } from '../entities/Tetrahedron';
import { TetrahedronValidator } from '../validators/TetrahedronValidator';

// Фабрика создаёт экземпляры Тэтраедра с проверкой корректности точек
export class TetrahedronFactory {
    static create(a: Point3D, b: Point3D, c: Point3D, d: Point3D): Tetrahedron {
        // Проверяем, можно ли построить тетраэдр из 4 точек
        const isValid = TetrahedronValidator.isValid(a, b, c, d);

        if (!isValid) {
            throw new Error('Invalid Tetrahedron: points are coplanar');
        }

        // Если проверка пройдена, создаём новый экземпляр Tetrahedron
        return new Tetrahedron(a, b, c, d);
    }
}
