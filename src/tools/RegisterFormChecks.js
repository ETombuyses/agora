export const checkGeneralFormInfo = (
  name,
  firstName,
  email,
  pswd,
  confirmePswd
) => {
  const expressionEmail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/

  //Check if name is valid
  if (!name) {
    return 'Le champs "Nom" n\'est pas rempli'
  } else if (name.length < 2 || name.length > 50) {
    return 'Le champs "Nom" doit contenir entre 2 et 50 caractères'

    //Check if firstname is valid
  } else if (!firstName) {
    return 'Le champs "Prènom" n\'est pas rempli'
  } else if (firstName.length < 2 || firstName.length > 50) {
    return 'Le champs "Prénom" doit contenir entre 2 et 50 caractères'

    //Check if email is valid
  } else if (!email) {
    return 'Le champs "Email" n\'est pas rempli'
  } else if (!expressionEmail.test(String(email).toLowerCase())) {
    return 'Le champs "Email" ne correspond pas à un email'
  } else if (email.length < 4 || pswd.length > 255) {
    return 'Le champs "Email" doit contenir entre 4 et 255 caractères'

    //Check if password is valid
  } else if (!pswd) {
    return 'Le champs "Mot de passe" n\'est pas rempli'
  } else if (pswd.length < 8 || pswd.length > 255) {
    return 'Le champs "Mot de passe" doit contenir entre 8 et 255 caractères'
  } else if (pswd !== confirmePswd) {
    return 'Les mots de passe saisis ne sont pas identiques'
  } else {
    return false
  }
}

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

  // Check if nb Agora is valid
  if (!nbAgora) {
    return "Le numéro d'Agora n'est pas rempli"
  } else if (
    !expressionAgora.test(String(nbAgora).toLowerCase()) ||
    nbAgora.length !== 8
  ) {
    return "Le numéro d'Agora n'est pas valide. Il doit contenir 8 numéros."

    //Check if nb resident is valid
  } else if (!nbResident) {
    return 'Le champ "Nombre de résidents" n\'est pas rempli'
  } else if (!numberOnly.test(String(nbResident).toLowerCase())) {
    return 'Le champ "Nombre de résidents" doit contenir uniquement des chiffres.'
  } else if (!livingSpace) {
    return 'Le champ "Surface de l’habitat" n\'est pas rempli'
  } else if (!numberOnly.test(String(livingSpace).toLowerCase())) {
    return 'Le champ "Surface de l’habitat" doit contenir uniquement des chiffres.'
  } else if (
    nbNavigo &&
    (numberOnly.test(String(nbNavigo).toLowerCase()) === false ||
      nbNavigo.length !== 8)
  ) {
    return 'Le champ "Numéro carte Navigo" doit contenir uniquement des chiffres et doit être composé de 8 numéros'
  } else if (!nbNIF) {
    return 'Le champ "Numéro NIF" n\'est pas rempli'
  } else if (
    expressionNIF.test(String(nbNIF).toLowerCase()) === false ||
    nbNIF.length !== 13
  ) {
    return 'Le champ "Numéro NIF" doit contenir uniquement des chiffres et doit être composé de 13 numéros'
  } else {
    return false
  }
}
