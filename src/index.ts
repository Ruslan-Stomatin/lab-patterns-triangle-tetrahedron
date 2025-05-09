import { readFileSync } from 'fs';
import { Point } from './entities/Point2D';
import { TriangleFactory } from './factories/TriangleFactory';
import { Point3D } from './entities/Point3D';
import { TetrahedronFactory } from './factories/TetrahedronFactory';
import { logger } from './utils/logger';
import { InputValidator } from './validators/InputValidator';
import { InputValidator3D } from './validators/InputValidator3D';

// Определяем режим работы: 'triangle' или 'tetrahedron'
const MODE = (process.env.MODE || 'triangle') as 'triangle' | 'tetrahedron';

try {
    if (MODE === 'triangle') {
        // === Работа с треугольником ===
        // Читаем файл с координатами точек для треугольника
        const data = readFileSync('data/triangle_input.txt', 'utf-8');
        const lines = data.trim().split('\n'); // разбиваем файл на строки

        // Валидируем каждую строку: должна содержать два числа (x y)
        const points = lines
            .filter((line: string) => {
                const valid = InputValidator.isValidLine(line);
                if (!valid) {
                    logger.warn(`Warning: Skipped invalid line -> "${line}"`);
                }
                return valid;
            })
            .map((line: string) => {
                const [xStr, yStr] = line.trim().split(/\s+/); // разбиваем строку на x и y
                return new Point(parseFloat(xStr), parseFloat(yStr)); // создаём Point
            });

        // Проверяем, что получили ровно 3 точки
        if (points.length !== 3) {
            const errorMsg = `Error: Exactly 3 valid lines are required, but got ${points.length}.`;
            logger.error(errorMsg);
            logger.info('Please check the file data/triangle_input.txt and fix the data.');
            throw new Error(errorMsg);
        }

        // Создаём треугольник через фабрику и вычисляем параметры
        const triangle = TriangleFactory.create(points[0], points[1], points[2]);
        const perimeter = triangle.perimeter();
        const area = triangle.area();

        // Выводим результат
        logger.info('Triangle successfully created.');
        logger.info(`Perimeter: ${perimeter.toFixed(2)}`);
        logger.info(`Area: ${area.toFixed(2)}`);

    } else if (MODE === 'tetrahedron') {
        // === Работа с тетраэдром ===
        // Читаем файл с координатами точек для тетраэдра
        const data = readFileSync('data/tetrahedron_input.txt', 'utf-8');
        const lines = data.trim().split('\n');

        // Валидируем каждую строку: должна содержать три числа (x y z)
        const points3D = lines
            .filter((line: string) => {
                const valid = InputValidator3D.isValidLine(line);
                if (!valid) {
                    logger.warn(`Warning: Skipped invalid 3D line -> "${line}"`);
                }
                return valid;
            })
            .map((line: string) => {
                const [xStr, yStr, zStr] = line.trim().split(/\s+/); // разбиваем строку на x y z
                return new Point3D(
                    parseFloat(xStr),
                    parseFloat(yStr),
                    parseFloat(zStr)
                ); // создаём Point3D
            });

        // Проверяем, что получили ровно 4 точки
        if (points3D.length !== 4) {
            const errorMsg = `Error: Exactly 4 valid lines are required for the tetrahedron, but got ${points3D.length}.`;
            logger.error(errorMsg);
            logger.info('Please check the file data/tetrahedron_input.txt and fix the data.');
            throw new Error(errorMsg);
        }

        // Создаём тетраэдр через фабрику и вычисляем параметры
        const tetrahedron = TetrahedronFactory.create(
            points3D[0],
            points3D[1],
            points3D[2],
            points3D[3]
        );

        const volume = tetrahedron.volume();
        const surfaceArea = tetrahedron.surfaceArea();
        const baseOnPlane = tetrahedron.isBaseOnCoordinatePlane();

        // Выводим результат
        logger.info('Tetrahedron successfully created.');
        logger.info(`Volume: ${volume.toFixed(2)}`);
        logger.info(`Surface Area: ${surfaceArea.toFixed(2)}`);
        logger.info(`Base on coordinate plane: ${baseOnPlane}`);
    }

} catch (error) {
    // Обрабатываем все ошибки
    logger.error(
        error instanceof Error
            ? `An error occurred: ${error.message}`
            : String(error)
    );
    logger.info('Check the input data or logs for more information.');
    process.exit(1);
}
