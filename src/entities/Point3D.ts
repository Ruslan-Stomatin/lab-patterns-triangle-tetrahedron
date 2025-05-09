// Класс Point3D описывает точку в 3D пространстве с координатами (x, y, z)
export class Point3D {
    constructor(
        public readonly x: number,
        public readonly y: number,
        public readonly z: number
    ) {}

    // Метод вычисляет расстояние до другой 3D-точки
    distanceTo(other: Point3D): number {
        return Math.sqrt(
            Math.pow(this.x - other.x, 2) +
            Math.pow(this.y - other.y, 2) +
            Math.pow(this.z - other.z, 2)
        ); // стандартная формула для расстояния между точками в 3D
    }
}
