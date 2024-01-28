import { checkResponse } from './CheckResponse.js'

// export const BASE_URL = 'https://auth.nomoreparties.co'
export const BASE_URL = 'https://api.mesto-cookie.sbe.ru'
// export const BASE_URL = 'http://localhost:3000'

export const register = async (password, email) => {
  const response = await fetch(`${BASE_URL}/signup`, {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ password, email })
  })
  const res = await response.json()
  return checkResponse(response.ok, res)
}

export const login = async (email, password) => {
  const response = await fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    credentials: 'include',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ password, email })
  })
  const res = await response.json()
  return checkResponse(response.ok, res)
}

export const checkToken = async (userId) => {
  const response = await fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    credentials: 'include',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
  })
  const res = await response.json()
  return checkResponse(response.ok, res)
}