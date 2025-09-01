import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  UserName: '',
  UserEmail: ''
}

export const UserInfoSlice = createSlice({
  name: 'UserInfo',
  initialState,
  reducers: {
    SetInfoUser: (state, action) => {
      state.UserName = action.payload.name
      state.UserEmail = action.payload.email
    },
  },
})

export const { SetInfoUser } = UserInfoSlice.actions

export default UserInfoSlice.reducer
