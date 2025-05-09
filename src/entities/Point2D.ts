// Класс Point описывает точку в 2D пространстве с координатами (x, y)
export class Point {
  constructor(public x: number, public y: number) {}

  // Метод вычисляет расстояние от этой точки до другой точки
  distanceTo(other: Point): number {
      const dx = this.x - other.x;
      const dy = this.y - other.y;
      return Math.sqrt(dx * dx + dy * dy); // формула расстояния между двумя точками
  }
}
