import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userInfor: null,
  accessToken: '',
  isToggle: false,
}

export const userSlice = createSlice({
  name: 'counter',
  initialState,
 
  reducers: {
    saveInforUser: (state , action) => {
      state.userInfor = action.payload.userInfor         
    },
    updateInforUser: (state , action) => {
      state.userInfor = action.payload.userInfor         
    },
    saveAccessToken: (state , action) => {
      state.accessToken = action.payload.accessToken 
      localStorage.setItem("user",action.payload.accessToken )
    },
    logOutUser: (state) => {
      state.userInfor = null; 
      state.accessToken = "";
      localStorage.clear()
    },
    setIsToggle: (state) => {
      state.isToggle = false;
    },
    setIsToggle2: (state) => {
      state.isToggle = true; 
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { saveInforUser, saveAccessToken , setIsToggle2
  , logOutUser, setIsToggle, updateInforUser } = userSlice.actions

export default userSlice.reducer