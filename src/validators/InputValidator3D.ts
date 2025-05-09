// Проверяет корректность строки для 3D-точки (X Y Z)
export class InputValidator3D {
    static isValidLine(line: string): boolean {
        const parts = line.trim().split(/\s+/); // делим строку по пробелам

        // Проверяем, что есть ровно 3 значения (X Y Z)
        if (parts.length !== 3) {
            return false;
        }

        const [xStr, yStr, zStr] = parts;
        const x = parseFloat(xStr);
        const y = parseFloat(yStr);
        const z = parseFloat(zStr);

        // Проверяем, что все значения являются числами
        return !isNaN(x) && !isNaN(y) && !isNaN(z);
    }
}
