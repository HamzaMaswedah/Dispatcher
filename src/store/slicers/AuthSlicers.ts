
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { State } from 'react-native-gesture-handler'
import { Alert } from 'react-native'
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';



export const signMeup = createAsyncThunk('AUth/signMe', async ({ Email, Password, RePassword }: { Email: string, Password: string, RePassword: string }, { rejectWithValue }) => {

    console.log(Email);
    console.log(Password);
    
    try {
        const response = await auth().createUserWithEmailAndPassword(Email, Password);
        return response.user;
    }


    catch (error) {

        return rejectWithValue(error)
    }
}


);





export const LoginMeup = createAsyncThunk('AUth/LoginMe', async ({ Email, Password }: { Email: string, Password: string }, { rejectWithValue }) => {

    console.log(Email);
    console.log(Password);
    
    try {
        const response = await auth().signInWithEmailAndPassword(Email, Password);
        // console.log(response);
        return response.user;
    }


    catch (error) {

        return rejectWithValue(error)
    }
}


);



export const AuthSlice = createSlice({

    name: 'Auth',

    initialState: {

        Email: '',
        Password: '',
        RePassword: '',
        error: '',
        Login: false,

    },

    reducers: {

        RegEmail: (state, action) => {


            state.Email = action.payload

        },

        RegPassword: (state, action) => {

            state.Password = action.payload

        },

        RegRePassword: (state, action) => {

            state.RePassword = action.payload

        },

        LogIn: (state) => {
            auth().signInWithEmailAndPassword(state.Email, state.Password).then(() => {
                console.log('User signed in!');
                state.Login = true;
                // navig.navigate('HomePage');

            }).catch(error => {
                if (error.code === 'auth/invalid-email') {
                    Alert.alert("Try Again!", 'Email address is invalid!');
                }
                if (error.code === 'auth/wrong-password') {
                    Alert.alert("Try Again!", 'Wrong password !');

                }

                if (error.code === 'auth/user-not-found') {
                    Alert.alert("Sign Up Now!", 'This Email need to be signed up first', [
                        {
                            text: 'Sign Up =>',
                            style: 'cancel',
                        }]);
                }

            })
        },

        SignUp: (state) => {

            if (state.Email.length !== 0 && state.Password.length !== 0 && state.RePassword.length !== 0) {
                if (state.Password === state.RePassword) {


                    auth().createUserWithEmailAndPassword(state.Email, state.Password)
                        .then(() => {
                            console.log('User created & signed in!');
                            state.Login = true;
                        })
                        .catch((error: any) => {
                            if (error.code === 'auth/email-already-in-use')
                                Alert.alert("Try Again!", 'That email address is already in use!');

                            if (error.code === 'auth/invalid-email')
                                Alert.alert("Try Again!", 'That email address is invalid!');
                        });
                }
                else {
                    Alert.alert("Try Again!", "Password and Re-Password are not equal try again!");

                }


            }
            else {
                Alert.alert("Try Again!", "You need to fill all filed inorder to sign up !");
            }

        },
        logout: (state) => {
            state.Login = false,
                auth().signOut().then(() => console.log('User is now signed out'))
        },

    },

    extraReducers(builder) {
        builder.addCase(signMeup.pending, (state: any, action) => {
            state.status = 'loading'
            console.log('loading')
        })
            .addCase(signMeup.fulfilled, (state: any, action) => {
                state.status = 'succeeded'
                state.Login = true
            })
            .addCase(signMeup.rejected, (state: any, action) => {
                state.status = 'failed'
                state.error = action.error.message
            }).addCase(LoginMeup.fulfilled,(state:any,action)=>{
                state.Login = true;
            })
    }

}

)

// Action creators are generated for each case reducer function

export const { RegEmail, RegPassword, RegRePassword, SignUp, LogIn, logout } = AuthSlice.actions

export default AuthSlice.reducer 
