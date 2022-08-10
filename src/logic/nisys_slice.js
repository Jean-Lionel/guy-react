import { createSlice } from '@reduxjs/toolkit'
import Internationalisation from '../providers/internationalisation';

export const nisysSlice = createSlice({
    name: 'nisys',
    initialState: {
        currentLanguage: new Internationalisation().getLanguageByCode('fr'),
    },
    reducers: {
        copyWith: (state, action) => {
            state.currentLanguage = action.payload.currentLanguage ?? state.currentLanguage;
        },
    },
})

export const { copyWith } = nisysSlice.actions;


export default nisysSlice.reducer;