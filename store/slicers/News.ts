
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';


interface initialState {
    News: Array<any>;
    status: string;
    error: string;
}


export const fetchNews = createAsyncThunk('News/fetchNews', async (thunkAPI) => {


    // const response = await axios.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=fa283153d7ce4913bcda3065fc10ca31');

    try {
        console.log('called');
        const response = await axios.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=fa283153d7ce4913bcda3065fc10ca31');

        // console.log(response.data.articles);
        return response.data.articles;
    }
    catch (error) {
        console.log('some error');
        return thunkAPI.rejectWithValue(error);
    }

});


const NewsSlice = createSlice({

    name: 'News',

    initialState: {

        News: [],
        status: 'idle',
        error: ""

    },

    reducers: {
    },

    extraReducers(builder) {
        builder.addCase(fetchNews.pending, (state: any, action) => {
            state.status = 'loading'
        })
            .addCase(fetchNews.fulfilled, (state: any, action) => {
                state.status = 'succeeded'
                state.News = state.News.concat(action.payload)
            })
            .addCase(fetchNews.rejected, (state: any, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }

})

// Action creators are generated for each case reducer function


export default NewsSlice.reducer;