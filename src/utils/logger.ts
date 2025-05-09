// Импортируем библиотеки: pino для логирования, pino-pretty для красивого консольного вывода и fs для работы с файлами
import pino from 'pino';
import pretty from 'pino-pretty';
import fs from 'fs';

// Создаем поток записи для логов, файл logs/app.log будет дополняться при каждом запуске
const logStream = fs.createWriteStream('logs/app.log', { flags: 'a' });

// Экспортируем логгер с двумя потоками:
// 1. Логирование в консоль с цветами (для удобного чтения)
// 2. Логирование в файл (для сохранения истории)
export const logger = pino(
    {
        level: 'info', // уровень логирования: info и выше
    },
    pino.multistream([
        { stream: pretty({ colorize: true }) }, // поток для красивого вывода в консоль
        { stream: logStream },                  // поток для записи логов в файл
    ])
);
