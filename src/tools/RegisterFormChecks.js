/*
 * Check if first part input of register form are valid
 * @Params {name} string
 * @Params {firstName} string
 * @Params {email} string
 * @Params {pswd} string
 * @Params {confirmePswd} string
 */
export const checkGeneralFormInfo = (
  name,
  firstName,
  email,
  pswd,
  confirmePswd
) => {
  const expressionEmail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/

  const state = {
    state: {
      lastName: '',
      firstName: '',
      email: '',
      pswd: '',
      confirmePswd: '',
    },
  }

  const memo = {
    state: {
      lastName: false,
      firstName: false,
      email: false,
      pswd: false,
      confirmePswd: false,
    },
  }

  //Check if last name is valid
  if (!name) {
    state.state.lastName = 'Le champs "Nom" n\'est pas rempli'
  } else if (name.length < 2 || name.length > 50) {
    state.state.lastName =
      'Le champs "Nom" doit contenir entre 2 et 50 caractères'
  } else {
    state.state.lastName = false
  }

  //Check if first name is valid
  if (!firstName) {
    state.state.firstName = 'Le champs "Prènom" n\'est pas rempli'
  } else if (firstName.length < 2 || firstName.length > 50) {
    state.state.firstName =
      'Le champs "Prènom" doit contenir entre 2 et 50 caractères'
  } else {
    state.state.firstName = false
  }

  //Check if email is valid
  if (!email) {
    state.state.email = 'Le champs "Email" n\'est pas rempli'
  } else if (!expressionEmail.test(String(email).toLowerCase())) {
    state.state.email = 'Le champs "Email" ne correspond pas à un email'
  } else if (email < 4 || email > 255) {
    state.state.email =
      'Le champs "Email" doit contenir entre 4 et 255 caractères'
  } else {
    state.state.email = false
  }

  // Check if password is valid
  if (!pswd) {
    state.state.pswd = 'Le champs "Mot de passe" n\'est pas rempli'
  } else if (pswd.length < 8 || pswd.length > 255) {
    state.state.pswd =
      'Le champs "Mot de passe" doit contenir entre 8 et 255 caractères'
  } else {
    state.state.pswd = false
  }

  // Check if confirme password is valid
  if (!confirmePswd) {
    state.state.confirmePswd =
      "Le mot de passe de confirmation n'est pas rempli"
  } else if (confirmePswd !== pswd) {
    state.state.confirmePswd = 'Les mots de passe saisis ne sont pas identiques'
  } else {
    state.state.confirmePswd = false
  }

  if (JSON.stringify(state) !== JSON.stringify(memo)) {
    return state
  } else {
    return false
  }
}

/*
 * Check if Second part input of register form are valid
 * @Params {nbAgora} string
 * @Params {nbResident} string
 * @Params {livingSpace} string
 * @Params {nbNavigo} string
 * @Params {nbNIF} string
 */
export const checkAgoraForm = (
  nbAgora,
  nbResident,
  livingSpace,
  nbNavigo,
  nbNIF
) => {
  const expressionAgora = /^\d{8}$/
  const numberOnly = /^[0-9]+$/
  const expressionNIF = /^[0-3]\d{12}$/

  const state = {
    state: {
      nbAgora: '',
      nbResident: '',
      livingSpace: '',
      nbNavigo: '',
      nbNIF: '',
    },
  }

  const memo = {
    state: {
      nbAgora: '',
      nbResident: '',
      livingSpace: '',
      nbNavigo: '',
      nbNIF: '',
    },
  }

  // Check if nb Agora is valid
  if (!nbAgora) {
    state.state.nbAgora = "Le numéro d'Agora n'est pas rempli"
  } else if (
    !expressionAgora.test(String(nbAgora).toLowerCase()) ||
    nbAgora.length !== 8
  ) {
    state.state.nbAgora =
      "Le numéro d'Agora n'est pas valide. Il doit contenir 8 numéros."
  } else {
    state.state.nbAgora = false
  }

  //Check if nb resident is valid
  if (!nbResident) {
    state.state.nbResident = 'Le champ "Nombre de résidents" n\'est pas rempli'
  } else if (!numberOnly.test(String(nbResident).toLowerCase())) {
    state.state.nbResident =
      'Le champ "Nombre de résidents" doit contenir uniquement des chiffres.'
  } else {
    state.state.nbResident = false
  }

  //Check if livingSpace is valid
  if (!livingSpace) {
    state.state.livingSpace =
      'Le champ "Surface de l’habitat" n\'est pas rempli'
  } else if (!numberOnly.test(String(livingSpace).toLowerCase())) {
    state.state.livingSpace =
      'Le champ "Surface de l’habitat" doit contenir uniquement des chiffres.'
  } else {
    state.state.livingSpace = false
  }

  //check if nb navigo is valid
  if (
    nbNavigo &&
    (numberOnly.test(String(nbNavigo).toLowerCase()) === false ||
      nbNavigo.length !== 8)
  ) {
    state.state.nbNavigo =
      'Le champ "Numéro carte Navigo" doit contenir uniquement des chiffres et doit être composé de 8 numéros'
  } else {
    state.state.nbNavigo = false
  }

  //check if nb nif is valid
  if (!nbNIF) {
    state.state.nbNIF = 'Le champ "Numéro NIF" n\'est pas rempli'
  } else if (
    expressionNIF.test(String(nbNIF).toLowerCase()) === false ||
    nbNIF.length !== 13
  ) {
    state.state.nbNIF =
      'Le champ "Numéro NIF" doit contenir uniquement des chiffres et doit être composé de 13 numéros'
  } else {
    return false
  }

  if (JSON.stringify(state) !== JSON.stringify(memo)) {
    return state
  } else {
    return false
  }
}
