import { Point3D } from './Point3D';

// Класс Tetrahedron описывает тетраэдр (пирамида с четырьмя вершинами)
export class Tetrahedron {
    public readonly name: string = 'Tetrahedron';

    constructor(
        public readonly a: Point3D,
        public readonly b: Point3D,
        public readonly c: Point3D,
        public readonly d: Point3D
    ) {}

    // Метод вычисляет объём тетраэдра по формуле через определитель
    volume(): number {
        const v = Math.abs(
            (this.a.x - this.d.x) *
            ((this.b.y - this.d.y) * (this.c.z - this.d.z) - (this.c.y - this.d.y) * (this.b.z - this.d.z))
            -
            (this.a.y - this.d.y) *
            ((this.b.x - this.d.x) * (this.c.z - this.d.z) - (this.c.x - this.d.x) * (this.b.z - this.d.z))
            +
            (this.a.z - this.d.z) *
            ((this.b.x - this.d.x) * (this.c.y - this.d.y) - (this.c.x - this.d.x) * (this.b.y - this.d.y))
        ) / 6;
        return v;
    }

    // Метод вычисляет площадь поверхности (сумма площадей 4 граней)
    surfaceArea(): number {
        const triangleArea = (p1: Point3D, p2: Point3D, p3: Point3D): number => {
            const a = p1.distanceTo(p2);
            const b = p2.distanceTo(p3);
            const c = p3.distanceTo(p1);
            const s = (a + b + c) / 2; // полупериметр
            return Math.sqrt(s * (s - a) * (s - b) * (s - c));
        };
        return (
            triangleArea(this.a, this.b, this.c) +
            triangleArea(this.a, this.b, this.d) +
            triangleArea(this.a, this.c, this.d) +
            triangleArea(this.b, this.c, this.d)
        );
    }

    // Метод проверяет, лежит ли основание ABC на одной из координатных плоскостей (XY, XZ, YZ)
    isBaseOnCoordinatePlane(): boolean {
        const allOnXY = this.a.z === 0 && this.b.z === 0 && this.c.z === 0;
        const allOnXZ = this.a.y === 0 && this.b.y === 0 && this.c.y === 0;
        const allOnYZ = this.a.x === 0 && this.b.x === 0 && this.c.x === 0;
        return allOnXY || allOnXZ || allOnYZ;
    }
}
