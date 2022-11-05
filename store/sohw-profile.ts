import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Information {
    username: string,
    email: string,
    isHicetnuncUser: boolean,
    fullName: string | null,
}

export type ShowType = {
    userInfo: Information,
    loading: boolean
}

const showProfile = createSlice({
    name: 'show',
    initialState: {
        userInfo: {},
        loading: true,
    } as ShowType,
    reducers: {

        showResult: (state, action: PayloadAction<Information>) => {
            state.userInfo = action.payload
        }
        ,
        setLoading: (state , action:PayloadAction<boolean>)=>{
            state.loading = action.payload
        }
    }

})
export default showProfile;
export const {showResult} = showProfile.actions