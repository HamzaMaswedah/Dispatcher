
// import { createSlice } from '@reduxjs/toolkit'
// import { State } from 'react-native-gesture-handler'
// import { Alert } from 'react-native'
// import auth from '@react-native-firebase/auth';


// export const AuthSlice = createSlice({

// name: 'Auth',

// initialState: {

// Email: '',
// Password:'',
// RePassword:'',
// Login: false

// },

// reducers: {

// RegEmail: (state,action) => {

// //Redux Toolkit allows us to write "mutating" logic in reducers. It doesn't //actually
// //mutate the state because it uses the Immer library,which detects changes to a "draft
// //state" and produces a brand new immutable state based off changes

//     state.Email = action.payload

// },

// RegPassword: (state,action) => {

//     state.Password = action.payload

// },

// RegRePassword: (state,action) => {

//     state.RePassword = action.payload

// },

// LogedIn: state => {

//     state.Login = true

// },

// LogedOut: state => {

//     state.Login = false
    
// },

// SignUp : (state) =>
// {
//     console.log(state.Email);
//     console.log(state.Password);

//     console.log(state.RePassword);


//     if(state.Email.length !== 0 && state.Password.length !== 0 && state.RePassword.length !== 0)
//     {
//       if(state.Password === state.RePassword)
//       {
//         auth().createUserWithEmailAndPassword(state.Email,state.Password)
//                .then(() => {
//                    console.log('User created & signed in!');
//                })
//                .catch((error:any) => {
//                    if (error.code === 'auth/email-already-in-use')
//                     Alert.alert("Try Again!", 'That email address is already in use!');
                       
//                    if (error.code === 'auth/invalid-email')
//                       Alert.alert("Try Again!", 'That email address is invalid!');
//                });
//       }
//       else
//       {
//         console.log('err')
//         Alert.alert("Try Again!", "Password and Re-Password are not equal try again!");
//       }
      
//   }

// }


// }

// })

// // Action creators are generated for each case reducer function

// export const { RegEmail, RegPassword,RegRePassword, LogedIn,LogedOut,SignUp } = AuthSlice.actions

// export default AuthSlice.reducer 
