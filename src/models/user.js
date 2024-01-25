import { proxy } from 'valtio';


const userState = proxy({

  userInfo: {}
})

export const setUserInfo = (data) => {
  userState.userInfo = data
}

export {userState}
