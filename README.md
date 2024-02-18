[![Статус тестов](../../../react-mesto-api-full-gha/actions/workflows/tests.yml/badge.svg)](../../../react-mesto-api-full-gha/actions/workflows/tests.yml)
![2024-02-18_16-49-05](https://github.com/kkirillovv/react-mesto-api-full-gha-cookie/assets/122016948/33b74465-ad6d-4c41-b5de-d4695576eb31)

# react-mesto-api-full
Репозиторий для приложения проекта `Mesto`, включающий фронтенд и бэкенд части приложения со следующими возможностями: авторизация и регистрация пользователей, операции с карточками и пользователями. 

Бэкенд расположите в директории `backend/`, а фронтенд - в `frontend/`.
  
Адрес репозитория: https://github.com/kkirillovv/react-mesto-api-full-gha

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
  <li>установил nginx, настроил роутинг на стороне сервера, подключил ssl-сертификат</li>
</ul>

## Планы по дороботке (выполнены 👍)
Реализована версия c использованием cookie:

Бэкенд расположите в директории `backend-cookie/`, а фронтенд - в `frontend-cookie/`. 

## Задействованные технологии
<ul>
  <li>React, React Router, Hooks (useState, useEffect, useContext), использование кастомных хуков (валидация форм)</li>
  <li>работа с API, БЭМ</li>
</ul>

## Стек технологий
<div align="center">
  <img alt="Block, element, model" src="https://img.shields.io/badge/BEM-grey?logoColor=black&labelColor=f0b354" height=30>
  <img alt="HTML" src="https://img.shields.io/badge/HTML-grey?logo=HTML5&logoColor=black&labelColor=f0b354" height=30>
  <img alt="CSS" src="https://img.shields.io/badge/CSS-grey?logo=CSS3&logoColor=black&labelColor=f0b354" height=30>
  <img alt="Adaptive layout" src="https://img.shields.io/badge/Adaptive%20layout-grey?logoColor=black&labelColor=f0b354" height=30>
  <img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-grey?logo=JavaScript&logoColor=black&labelColor=f0b354" height=30>
  <img alt="React" src="https://img.shields.io/badge/React-grey?logo=React&logoColor=black&labelColor=f0b354" height=30>
  <img alt="Node.js" src="https://img.shields.io/badge/Node.js-grey?logo=Node.js&logoColor=black&labelColor=f0b354" height=30>
  <img alt="Express" src="https://img.shields.io/badge/Express-grey?logo=Express&logoColor=black&labelColor=f0b354" height=30>
  <img alt="MongoDB" src="https://img.shields.io/badge/MongoDB-grey?logo=MongoDB&logoColor=black&labelColor=f0b354" height=30>
  <img alt="Nginx" src="https://img.shields.io/badge/Nginx-grey?logo=Nginx&logoColor=black&labelColor=f0b354" height=30>
  <img alt="GitHub" src="https://img.shields.io/badge/GitHub-grey?logo=GitHub&logoColor=black&labelColor=f0b354" height=30>
</div>

## Инструкция по запуску
Для запуска проекта необходимо сделать следующие шаги:

1. Создать папку, зайти туда и склонировать репозиторий
   > `git clone https://github.com/kkirillovv/react-mesto-api-full-gha`
2. Установить все зависимости через
   > `yarn или npm install`
3. Запустить сперва back-end, а затем front-end через
   > `yarn или npm start`

## Системные требования
Для запуска потребуется Node.js версии 16.13.2

<div align="right">
  <p align="right">
    <img src="https://api.visitorbadge.io/api/visitors?path=https%3A%2F%2Fgithub.com%2Fkkirillovv%2Freact-mesto-api-full-gha-cookie&countColor=%23f0b354" alt="Visitors Badge" />
  </p>
</div>
