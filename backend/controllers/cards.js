const { constants } = require('http2')
const Card = require('../models/card')
const { ForbiddenError, NotFoundError } = require('../errors')

const getCards = (req, res, next) => {
  Card.find({})
    .then((cards) => res.send(cards))
    .catch(next)
}

const createCard = (req, res, next) => {
  const { name, link } = req.body
  Card.create({ name, link, owner: req.user._id })
    .then((card) => res.status(constants.HTTP_STATUS_CREATED).send(card))
    .catch(next)
}

// eslint-disable-next-line consistent-return
const handleErrors = async (req, res, func, mes, errorMessage, next) => {
  try {
    const { cardId } = req.params
    const result = await func(cardId)
    if (!result) {
      throw new NotFoundError(errorMessage)
    }
    res.status(constants.HTTP_STATUS_OK).json(result)
  } catch (err) {
    return next(err)
  }
}

// eslint-disable-next-line consistent-return
const deleteCardById = (req, res, next) => {
  Card.findById(req.params.cardId).orFail(new NotFoundError('Карточка с указанным id не существует'))
    // eslint-disable-next-line consistent-return
    .then((card) => {
      if (card.owner.toString() !== req.user._id) {
        return Promise.reject(new ForbiddenError('Нельзя удалять карточку другого пользователя'))
      }
      const func = (cardId) => Card.findByIdAndDelete(cardId)
      const errorMessage = 'Удаление карточки с несуществующим в БД id'
      const mes = 'Карточка удалена'
      handleErrors(req, res, func, mes, errorMessage, next)
    })
    .catch(next)
}

const likeCardById = (req, res, next) => {
  const func = (cardId) => Card.findByIdAndUpdate(
    cardId,
    { $addToSet: { likes: req.user._id } }, // добавить _id в массив, если его там нет
    { new: true },
  )
  const errorMessage = 'Id карточки не существует'
  const mes = 'Поставили лайк'
  handleErrors(req, res, func, mes, errorMessage, next)
}

const dislikeCardById = (req, res, next) => {
  const func = (cardId) => Card.findByIdAndUpdate(
    cardId,
    { $pull: { likes: req.user._id } }, // убрать _id из массива
    { new: true },
  )
  const mes = 'Убрали лайк'
  const errorMessage = 'Удаление лайка у карточки с несуществующим в БД id'
  handleErrors(req, res, func, mes, errorMessage, next)
}

// eslint-disable-next-line object-curly-newline
module.exports = { getCards, createCard, deleteCardById, likeCardById, dislikeCardById }