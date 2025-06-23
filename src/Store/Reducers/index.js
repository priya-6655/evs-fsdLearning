import { combineReducers } from '@reduxjs/toolkit';
import userSlice from './userReducer';
import voterSlice from './voterReducer'


const rootReducer = combineReducers({
    user: userSlice,
    voter: voterSlice
})

export default rootReducer;