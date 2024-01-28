class Api {
  constructor(options) { // инициировали this, сконструировали и вернули его
    this._url = options.baseUrl
    this._headers = options.headers
  }

  _getStatusData(res) {
    if (res.ok) {
      return res.json() // если все окей, забираем данные в формате json
    } else {
      return Promise.reject(`Ошибка: ${res.status}`) // если ошибка, отклоняем промис
    }
  }

  async getInitialCards() { // получаем карточки с БД сервера
    const res = await fetch(`${this._url}/cards`, {
      method: 'GET',
      credentials: 'include',
    })
    return this._getStatusData(res)
  }

  async addNewCard(card) { // добавляем карточку в БД сервера
    const res = await fetch(`${this._url}/cards`, {
      method: 'POST',
      credentials: 'include',
      headers: this._headers,
      body: JSON.stringify({
        name: card.name,
        link: card.link,
      })
    })
    return this._getStatusData(res)
  }

  async deleteCard (cardId) { // удаляем карточку из БД сервера
    const res = await fetch(`${this._url}/cards/${cardId}`, {
      method: 'DELETE',
      credentials: 'include',
    })
    return this._getStatusData(res)
  }

  async changeLike (cardId, status) { // изменяем лайк в карточке в БД сервера
    const method = (status) ? 'PUT' : 'DELETE'
    const res = await fetch(`${this._url}/cards/${cardId}/likes`, {
      method: `${method}`,
      credentials: 'include',
    })
    return this._getStatusData(res)
  }

  async getUserInfo () { // загрузка информации о пользователе из БД сервера
    const res = await fetch(`${this._url}/users/me`, {
      method: 'GET',
      credentials: 'include',
    })
    return this._getStatusData(res)
  }

  async editUserInfo (user) { // редактирование профиля пользователя в БД сервера
    const res = await fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      credentials: 'include',
      headers: this._headers,
      body: JSON.stringify({
        name: user.name,
        about: user.about,
      })
    })
    return this._getStatusData(res)
  }

  async editUserAvatar (user) { // редактирование аватарки пользователя в БД сервера
    const res = await fetch(`${this._url}/users/me/avatar`, {
      method: 'PATCH',
      credentials: 'include',
      headers: this._headers,
      body: JSON.stringify({
        avatar: user.avatar,
      })
    })
    return this._getStatusData(res)
  }

  getPageData () {
    return Promise.all([this.getUserInfo(), this.getInitialCards()])
  }
}

// C. Объявляем Api --------------------------------------------------------

const api = new Api({
  // baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-71',
  baseUrl: 'https://api.mesto-cookie.sbe.ru',
  // baseUrl: 'http://localhost:3000',
    headers: {
    'Content-Type': 'application/json'
  }
})

export default api