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
      url: 'http://127.0.0.1:8000/api/login',
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
    localStorage.setItem('idUser', idUser)

    localStorage.setItem(
      'userPersonalData',
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
export function register(
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
  ;(async () => {
    const result = await axios({
      method: 'post',
      url: 'http://127.0.0.1:8000/api/signup',
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
      window.location.pathname = '/login'
    }
  })()
}

export function logout() {
  localStorage.clear()
  window.location.pathname = '/login'
}
