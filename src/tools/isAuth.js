import axios from 'axios'

/*
 * Get tokens if user is recognized
 * @Params {email} string
 * @Params {password} string
 */
export function login(email, password) {
  ;(async () => {
    const result = await axios({
      method: 'post',
      url: 'http://127.0.0.1:8000/api/login_check',
      data: {
        username: email,
        password: password,
      },
    })

    let token = result.data.token
    let refresh_token = result.data.refresh_token

    //Put tokens in local storage
    localStorage.setItem('token', token)
    localStorage.setItem('refreshToken', refresh_token)

    if (result) {
      window.location.href = 'http://localhost:3000/'
    }
  })()
}

/*
 * Get new tokens if user is recognized
 */
export function getNewTokens() {
  //get refresh_token in local storage
  let getRefreshToken = localStorage.getItem('refreshToken')

  //check if refresh token exist in local storage
  if (getRefreshToken) {
    //Get new refresh token and token
    ;(async () => {
      const result = await axios({
        method: 'post',
        url: 'http://127.0.0.1:8000/api/token/refresh',
        data: {
          refresh_token: getRefreshToken,
        },
      })

      let token = result.data.token
      let refresh_token = result.data.refresh_token

      //Put tokens in local storage
      localStorage.setItem('token', token)
      localStorage.setItem('refreshToken', refresh_token)
    })()
  }
}
