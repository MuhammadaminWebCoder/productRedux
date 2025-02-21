import { createSlice } from "@reduxjs/toolkit";

const getInitialLikeList = () => {
    const storedLikes = localStorage.getItem("likeList");
    return storedLikes ? JSON.parse(storedLikes) : [];
};

const initialState = {
    likeList: getInitialLikeList(),
};

export const LikeSlice = createSlice({
    name: "likes",
    initialState,
    reducers: {
        saveLikeList: (state, action) => {
            state.likeList.push(action.payload);
            localStorage.setItem("likeList", JSON.stringify(state.likeList));
        },
        removeLikeList: (state, action) => {
            state.likeList = state.likeList.filter(item => item.id !== action.payload.id);
            localStorage.setItem("likeList", JSON.stringify(state.likeList));
        }
    }
});

export const { saveLikeList, removeLikeList } = LikeSlice.actions;
export default LikeSlice.reducer;
