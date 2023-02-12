## Настройка проекта

1. Открываем пустую папку в VSC
2. В терминале вводим команду `npm install --save-dev jest` , заполняем все необходимые поля
3. В файле package.json в свойстве "test" прописываем "jest"
4. Создаем папку .gitignore и прописываем /node_modules. В дальнейшем также прописываем 
все файлы которые не должны попась на удаленный репозиторий.
5. Создаем файл (напр. **test_01**) для тестируемой функции. Важно прописать
`module.exports = имя функции`
6. Создать файл для проверок. (напр. **reverse_string.test.js** !Важно! выделять слово 
.test. точками) Прописать `const example = require("./test_01"`)
7. Вносим необходимые тестовые данные
8. Запускаем тесты командой `npm run test`

