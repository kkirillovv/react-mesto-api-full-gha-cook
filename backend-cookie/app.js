require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const { errors } = require('celebrate')
const cors = require('cors')

const usersRouter = require('./routes/users')
const loginUser = require('./routes/signin')
const createUser = require('./routes/signup')
const cardsRouter = require('./routes/cards')
const auth = require('./middlewares/auth')
const { requestLogger, errorLogger } = require('./middlewares/logger')
const { NotFoundError, handleErrors } = require('./errors')

// Слушаем 3000 порт
const { PORT = 3000, DB_URL = 'mongodb://127.0.0.1:27017/mestodb' } = process.env

// подключаемся к серверу mongo
mongoose.connect(DB_URL, {
  useNewUrlParser: true,
  // useCreateIndex: true,
  // useFindAndModify: false,
  useUnifiedTopology: true,
})

const app = express()
app.use(cors({
  origin: [
    'http://localhost:3001',
    'http://mesto-cookie.sbe.ru/',
    'https://mesto-cookie.sbe.ru/',
  ],
  credentials: true,
  maxAge: 3600000,
}))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(requestLogger) // подключаем логгер запросов

// за ним идут все обработчики роутов
app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт')
  }, 0)
})

app.use('/signin', loginUser)
app.use('/signup', createUser)
app.use(auth)
app.use('/users', usersRouter)
app.use('/cards', cardsRouter)
// eslint-disable-next-line no-unused-vars
app.use('*', (req, res) => {
  const isPageNotFoundError = 'Запрашиваемая страница не найдена'
  throw new NotFoundError(isPageNotFoundError)
})

app.use(errorLogger) // подключаем логгер ошибок

app.use(errors()) // обработчик ошибок celebrate
app.use(handleErrors) // централизованный обработчик ошибок

app.listen(PORT)