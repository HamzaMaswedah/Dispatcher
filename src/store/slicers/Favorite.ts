import { Action, createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import { State } from 'react-native-gesture-handler'
import { Alert } from 'react-native'
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';







const storeFavData = async (value: any) => {
    try {
        const jsonValue = JSON.stringify(value)
        const jsonSaved = await AsyncStorage.getItem('@storage_Favs')


        if (jsonSaved !== null) {
            await AsyncStorage.setItem('@storage_Favs', JSON.stringify([...jsonSaved, jsonValue]))
        }
        else {
            await AsyncStorage.setItem('@storage_Favs', jsonValue)
        }

    } catch (e) {
        // saving error
    }
}



const getFavData = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem('@storage_Favs');
        return jsonValue != null ? JSON.parse(jsonValue) : null;

    } catch (e) {
        // error reading value
    }
}



export const fetchFav = createAsyncThunk('Favs/fetchFav', async (thunkAPI) => {

    try{
        const jsonValue = await AsyncStorage.getItem('@storage_Favs');
        return jsonValue; 
    }
    catch(error){            
        console.log(error.message);
        return thunkAPI.rejectWithValue(error);
    }

});



const SavedSlice = createSlice({

    name: 'Saved',

    initialState: {

        Saved: [],
        counter: 0,
        status:'',
        error: "",

    },

    reducers: {

        addSaved: (state, action) => {

            console.log('saving');
            state.Saved = state.Saved.concat(action.payload);
            storeFavData(action.payload);
            state.counter += 1;
        },

        removeSaved: (state, action) => {
        }
    },

    
    extraReducers(builder) {
        builder.addCase(fetchFav.pending, (state: any, action) => {
            state.status = 'loading'
        })
            .addCase(fetchFav.fulfilled, (state: any, action) => {
                state.status = 'succeeded'
                state.Saved = JSON.parse(action.payload)
            })
            .addCase(fetchFav.rejected, (state: any, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    },

})



export const { addSaved, removeSaved} = SavedSlice.actions

export default SavedSlice.reducer 