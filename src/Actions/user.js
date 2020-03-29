export const userActionTypes = {
  CHANGE_USER_NAME: 'changeUserName',
  CHANGE_USER_CONTACT_NUMBER: 'changeUserContactNumber'
}

export const changeUserName = (name) => {
  return {
    type: userActionTypes.CHANGE_USER_NAME,
    value: name
  }
}

export const changeUserContactNumber = (contactNumber) => {
  return {
    type: userActionTypes.CHANGE_USER_CONTACT_NUMBER,
    value: contactNumber
  }
}