## To the Metamoon

*Описание и функциональность*: Приложение для минтинга токенов NFT

*Используемые технологии*: React, TSX, flexbox, БЭМ, JavaScript, TypeScript, Vite, normalize.css, eslint, stylelint, classnames

*Инструкция по запуску приложения*:

#### - Node.js: v20.11.1
#### - npm: v10.2.4

1). Клонировать репозиторий :
```
git clone git@github.com:dariarus/metamoon.git
```

2). Перейти в папку с проектом:
```shell
cd metamoon
```

3). Запустить приложение в режиме разработки:
```shell
npm install
npm run dev
```

4). Открыть приложение в браузере по адресу:
http://127.0.0.1:5173/

*Основные команды для разработки*:

1). Запустить сборку:
```shell
npm run build
```

2). Запустить линтер:
```shell
npm run lint
```

3). Запустить исправление ошибок линтера:
```shell
npm run lint:fix
```

4). Запустить проверку на наличие ошибок в css-модулях*:
```shell
npm run lint:styles
```
*Ошибки исправляются автоматически при перезапуске проекта в режиме разработки благодаря плагину vite-plugin-stylelint