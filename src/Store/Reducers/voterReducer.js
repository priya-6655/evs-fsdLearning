import { createSlice } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from 'redux-persist/lib/storage';

import { VOTER_TYPES } from "../ActionTypes/VoterTypes";

const voterSlice = createSlice({
    name: 'voter',
    initialState: {
        voterForm: [],
        voterData: {
            name: "",
            role: "",
        },
        userData: {
            name: "",
            role: "",
            userid: "",
            email: ""
        }
    },
    extraReducers: (builder => {
        // Voter request update state and action
        builder.addCase(VOTER_TYPES.SET_VOTER_FORM, (state, action) => {
            state.voterForm = [
                ...state.voterForm,
                {
                    ...action.payload, passedStatus: 'New Request', approvedStatus: '', voterId: ''
                }
            ]
        }),
            builder.addCase(VOTER_TYPES.UPDATE_VOTER_INFO, (state, action) => {
                state.voterForm = action.payload
            })
        // Voter Login/Logout state
        builder.addCase(VOTER_TYPES.VOTER_LOGIN, (state, action) => {
            console.log('reduux update', action.payload.userid)
            state.userData = {
                name: action.payload.name,
                role: action.payload.role,
                userid: action.payload.userid,
                email: action.payload.email
            }
        })
        builder.addCase(VOTER_TYPES.VOTER_LOGOUT, (state) => {
            state.userData = {
                name: "",
                role: '',
                userid: "",
                email: ""
            }
        })
    })
})

const persistConfig = {
    key: 'voter',
    storage,
    whitelist: ['voterForm', 'userData'], // only persist token
}

const persistedUserReducer = persistReducer(persistConfig, voterSlice.reducer)


export default persistedUserReducer 