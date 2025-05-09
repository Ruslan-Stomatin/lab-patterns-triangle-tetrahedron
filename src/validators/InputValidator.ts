// Класс InputValidator проверяет корректность строковых данных для 2D-точек
export class InputValidator {
    // Метод isValidLine проверяет строку из файла: должна содержать ровно два числовых значения (x и y)
    static isValidLine(line: string): boolean {
        const parts = line.trim().split(/\s+/); // разбиваем строку по пробелам

        // Проверка: строка должна содержать ровно два значения
        if (parts.length !== 2) {
            return false;
        }

        const [xStr, yStr] = parts;
        const x = parseFloat(xStr);
        const y = parseFloat(yStr);

        // Проверка: оба значения должны быть корректными числами
        if (isNaN(x) || isNaN(y)) {
            return false;
        }

        // Если все проверки прошли, возвращаем true
        return true;
    }
}
