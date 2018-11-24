const type = {
  addData: "dress/addData",
  Delete: "dress/Logut"
}

const initialState = []

export default (state = initialState, action) => {
  const newState = { ...state }
  switch (action.type) {
    case type.addData:
      newState.push(action.payload)
      return newState
    case type.LOGOUT:
      localStorage.removeItem("token")
      localStorage.removeItem("user")
      return {
        token: "",
        id: "",
        isAuth: false
      }
    default:
      return state
  }
}


export const addData = authData => ({ type: type.LOGIN, payload: authData })