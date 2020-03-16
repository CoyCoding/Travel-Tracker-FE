export const buildUsernameUrl = (username) => {
   return '/u/' + username.replace(/ /g, '_');
}

export const decodeUsernameUrl = (param) => {
  return param.replace(/_/g, ' ');
}