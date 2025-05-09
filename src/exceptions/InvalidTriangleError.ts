// Класс ошибки для ситуации, когда точки не могут образовать треугольник
export class InvalidTriangleError extends Error {
  constructor(message: string) {
      super(message); // передаём сообщение в родительский класс Error
      this.name = 'InvalidTriangleError'; // задаём имя ошибки для идентификации
  }
}
