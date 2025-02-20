import { createSlice } from "@reduxjs/toolkit";

const intialState = {
    likeList:[],
}

export const LikeSlice = createSlice({
    name:"likes",
    intialState,
    reducers:{
        saveLikeList:(state,action) => {
            likeList:[...state.likeList,action.payload]
        },
        removeLikeList:(state,action) => {
            
        }
    }
})

export const {saveLikeList,removeLikeList} = LikeSlice.actions