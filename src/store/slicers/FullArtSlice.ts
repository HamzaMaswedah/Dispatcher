import { createSlice } from '@reduxjs/toolkit'


export const ArticleSlice = createSlice({

    name: 'Article',

    initialState: {

        Article: null,


    },

    reducers: {

        changeArticle: (state, action) => {
            state.Article = action.payload;
        }
    },
});


export const {changeArticle} = ArticleSlice.actions

export default ArticleSlice.reducer 