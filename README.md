![2024-02-18_16-49-05](https://github.com/kkirillovv/react-mesto-api-full-gha-cookie/assets/122016948/33b74465-ad6d-4c41-b5de-d4695576eb31)


# react-mesto-api-full
Репозиторий для приложения проекта `Mesto`, включающий фронтенд и бэкенд части приложения со следующими возможностями: авторизации и регистрации пользователей, операции с карточками и пользователями. 
Бэкенд расположите в директории `backend/`, а фронтенд - в `frontend/`.
Бэкенд расположите в директории `backend-cookie/`, а фронтенд - в `frontend-cookie/` (версия с cookie). 
  
Адрес репозитория: https://github.com/kkirillovv/react-mesto-api-full-gha

Ветка backend-cookie: https://github.com/kkirillovv/react-mesto-api-full-gha-cookie/tree/backend-cookie

Ветка frontend-cookie: https://github.com/kkirillovv/react-mesto-api-full-gha-cookie/tree/frontend-cookie

## Структура проекта
IP 79.174.91.193 - сайт размещен на Рег.Облаке:
<ul>
  <li>Frontend https://mesto.sbe.ru</li>
  <li>Backend https://api.mesto.sbe.ru</li>
</ul>  
Вариант через cookie:
<ul>
  <li>Frontend https://mesto-cookie.sbe.ru</li>
  <li>Backend https://api.mesto-cookie.sbe.ru</li>
</ul>

## Что сделал
<ul>
  <li>настроил инфраструктуру и создал сервер на Express в Node.js.</li>
  <li>подключил базу данных MongoDB, создал схемы и модели ресурсов API</li>
  <li>реализовал логирование, аутентификацию и авторизацию на сервере</li>
  <li>задеплоил back-end на Рег.Облако</li>
  <li>сверстал компоненты на React и портировал разметку в его формат</li>
  <li>реализовал ассинхронные запросы к API</li>
  <li>проработал логику роутов для авторизованных и неавторизованных пользователей</li>
</ul>

## Задействованные технологии
<ul>
  <li>React, React Router, Hooks (useState, useEffect, useContext), использование кастомных хуков (валидация форм)</li>
  <li>работа с API, БЭМ</li>
</ul>

## Инструкция по запуску
Для запуска проекта необходимо сделать следующие шаги:

* Создать папку, зайти туда и склонировать репозиторий:
`git clone https://github.com/kkirillovv/react-mesto-api-full-gha`
* Установить все зависимости через
`yarn или npm install`
*Запустить сперва back-end, а затем front-end через
`yarn или npm start`

## Системные требования
Для запуска потребуется Node.js версии 16.13.2
