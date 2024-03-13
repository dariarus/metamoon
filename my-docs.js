// package.json:
// "scripts": {
// ...
// "build": "rimraf dist && tsc && vite build",
// } - rimraf должен очищать dist перед каждой новой сборкой. Установлен в зависимости и применен,
// т.к. скрипт "build" вида "tsc --emptyOutDir && tsc && vite build" не работает