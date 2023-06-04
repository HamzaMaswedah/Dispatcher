
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';


interface initialState {
    News: Array<any>;
    status: string;
    error: string;
    Favs: Array<boolean>;
}


export const fetchNews = createAsyncThunk('News/fetchNews', async (thunkAPI) => {


    const response = await axios.get('https://newsapi.org/v2/everything?q=bitcoin&apiKey=fa283153d7ce4913bcda3065fc10ca31');
    try {
        // console.log('called');
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
        error: "",
        Favs: [],

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
                for (let i = 0; i < state.News.length; i++) {

                    state.News[i]["id"] = i;
                    state.Favs.push(false);
                  }

                console.log(state.Favs);
                // state.Favs = new Array<boolean>(state.News.length);
            })
            .addCase(fetchNews.rejected, (state: any, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }

})

// Action creators are generated for each case reducer function


export default NewsSlice.reducer;