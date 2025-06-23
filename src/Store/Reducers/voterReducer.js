import { createSlice } from "@reduxjs/toolkit";
import { VOTER_TYPES } from "../ActionTypes/VoterTypes";

const voterSlice = createSlice({
    name: 'voter',
    initialState: {
        voterForm: [],

        voterData: {
            name: "",
            role: ""
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
            state.voterData = {
                name: action.payload.name,
                role: action.payload.role
            }
        })
        builder.addCase(VOTER_TYPES.VOTER_LOGOUT, (state) => {
            state.voterData = {
                name: "",
                role: ''
            }
        })
    })
})

export default voterSlice.reducer