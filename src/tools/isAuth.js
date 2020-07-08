import axios from 'axios'
import { apiUrl } from '../apiConfig'

/*
 * Get tokens if user is recognized
 * @Params {email} string
 * @Params {password} string
 */

export function login(email, password) {
  ;(async () => {
    const result = await axios({
      method: 'post',
      url: `${apiUrl}/api/login`,
      data: {
        username: email,
        password: password,
      },
    })

    let token = result.data.tokens.token
    let refresh_token = result.data.tokens.refresh_token
    let idUser = result.data.user.id
    let userFirstName = result.data.user.firstName
    let userLastName = result.data.user.lastName
    let userImage = result.data.user.image
    let registrationDate = result.data.user.registrationDate
    let gazLimit = result.data.user.gasAverageConsumption
    let waterLimit = result.data.user.waterAverageConsumption
    let electricityLimit = result.data.user.electricityAverageConsumption
    let wasteLimit = result.data.user.wasteAverageConsumption

    // Put tokens in local storage
    localStorage.setItem('token', token)
    localStorage.setItem('refreshToken', refresh_token)

    localStorage.setItem(
      'userInfo',
      JSON.stringify({
        id: idUser,
        fistName: userFirstName,
        lastName: userLastName,
        image: userImage,
        registrationDate: registrationDate,
        limits: {
          gazLimit: gazLimit,
          waterLimit: waterLimit,
          electricityLimit: electricityLimit,
          wasteLimit: wasteLimit,
        },
      })
    )

    if (result) {
      window.location.hash = '/'
    }
  })()
}

/*
 * Get new tokens if user is recognized
 */
export async function getNewTokens() {
  let refreshToken = localStorage.getItem('refreshToken')
  let getuserId = JSON.parse(localStorage.getItem('userInfo'))
  let getToken = localStorage.getItem('token')

  if (getToken && getuserId && refreshToken) {
    let getuserId = JSON.parse(localStorage.getItem('userInfo')).id
    console.log("j'ai un token")
    try {
      const result = await axios({
        method: 'get',
        url: `${apiUrl}/api/user/update/${getuserId}`,
        headers: {
          Authorization: `Bearer ${getToken}`,
        },
      })

      if (result) {
        const refreshTokens = await axios({
          method: 'post',
          url: `${apiUrl}/api/token/refresh`,
          data: {
            refresh_token: refreshToken,
          },
        })

        console.log('jai un token')
        let token = refreshTokens.data.token
        let refresh_token = refreshTokens.data.refresh_token

        // Put tokens in local storage
        localStorage.setItem('token', token)
        localStorage.setItem('refreshToken', refresh_token)
      }
    } catch (e) {
      console.log('erreur')
      let url = window.location.hash
      localStorage.clear()
      if (url !== '/register' || url !== '/login') {
        window.location.hash = '/login'
      }
    }
  } else {
    console.log("je n'ai pas de refresh")
    let url = window.location.hash

    if (!refreshToken && (url !== '/register' || url !== '/login')) {
      window.location.hash = '/login'
    }
  }
}

/*
 * Register new user in BDD
 * @Params {lastName} string
 * @Params {firstName} string
 * @Params {email} string
 * @Params {password} string
 * @Params {agoraNumber} int
 * @Params {nbResident} int
 * @Params {livingArea} int
 * @Params {isulation} boolean
 * @Params {gas} boolean
 * @Params {navigoNumber} int
 * @Params {nifNumber} string
 */
export async function register(
  lastName,
  firstName,
  password,
  email,
  agoraNumber,
  nbResident,
  livingArea,
  gas,
  isulation,
  nifNumber,
  navigoNumber
) {
  try {
    const result = await axios({
      method: 'post',
      url: `${apiUrl}/api/signup`,
      data: {
        lastName: lastName,
        firstName: firstName,
        password: password,
        email: email,
        agoraNumber: agoraNumber,
        nbResident: nbResident,
        livingArea: livingArea,
        gas: gas,
        insulation: isulation,
        nifNumber: nifNumber,
        navigoNumber: navigoNumber,
      },
    })
    if (result) {
      return { success: true }
    }
  } catch (error) {
    let testErrorResponse = error.response
    console.log('eevev', testErrorResponse)
    return { success: false, message: testErrorResponse.data.detail }
  }
}

export function logout() {
  localStorage.clear()
  window.location.hash = '/login'
}
