import { createSlice } from '@reduxjs/toolkit'
import { USER_TYPES } from '../ActionTypes/UserTypes'

const userSlice = createSlice({
    name: 'user',
    initialState: {
        userData: {
            userName: '',
            role: ''
        }
    },
    extraReducers: (builder => {
        builder.addCase(USER_TYPES.USER_LOGIN, (state, action) => {
            state.userData = {
                userName: action.payload.userName,
                role: action.payload.role
            }
        })
        builder.addCase(USER_TYPES.USER_LOGOUT, (state) => {
            state.userData = {
                userName: '',
                role: ''
            }
        })
    }),
    reducers: {}
})

export default userSlice.reducer;