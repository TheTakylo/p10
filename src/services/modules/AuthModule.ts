import axios from 'axios'

const API_URL = 'http://localhost:8000/api'

class AuthModule {
  login (user: { email: string, password: string }) {
    return axios
      .post(API_URL + '/login_check', {
        username: user.email,
        password: user.password
      })
      .then((response) => {
        if (response.data.token) {
          localStorage.setItem('token', response.data.token)
          localStorage.setItem('refresh_token', response.data.refresh_token)

          return true
        }

        return false
      })
  }

  refreshToken () {
    return axios
      .post(API_URL + '/token/refresh', {
        refresh_token: this.getRefreshToken()
      })
      .then((response) => {
        if (response?.data.token) {
          localStorage.setItem('token', response.data.token)
          localStorage.setItem('refresh_token', response.data.refresh_token)
        }
        return response
      }).catch()
  }

  isAuthenticated (): boolean {
    return localStorage.getItem('token') !== null
  }

  logout () {
    localStorage.removeItem('token')
    localStorage.removeItem('refresh_token')
  }

  getToken (): string | null {
    return localStorage.getItem('token')
  }

  getRefreshToken (): string | null {
    return localStorage.getItem('refresh_token')
  }
}

export default new AuthModule()
