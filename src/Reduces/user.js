import {userActionTypes} from '../Actions/user';

const initialState = {
  userName: 'user 1',
  contactNumber: 'Abc'
}

const user = (state=initialState, action) => {
  switch(action.type){
    case userActionTypes.CHANGE_USER_NAME:
      return {
        ...state,
        userName: action.value
      }
    case userActionTypes.CHANGE_USER_CONTACT_NUMBER: 
      return {
        ...state,
        contactNumber:action.value
      }
    default: 
      return state
  }
}

export default user;