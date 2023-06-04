import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect, useCallback } from 'react';
import { RegEmail, RegPassword, RegRePassword, SignUp, LogIn } from '../store/slicers/AuthSlicers'
import auth from '@react-native-firebase/auth';

import {LoginMeup} from '../store/slicers/AuthSlicers'



import {

  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Pressable,
  Alert,
  KeyboardAvoidingView,


} from 'react-native';

const LoginScreen = () => {

  const navig = useNavigation();
  const Email = useSelector((state: any) => state.auth.Email);
  const Login = useSelector((state: any) => state.auth.Login);
  const Password = useSelector((state: any) => state.auth.Password);
  const dispatch = useDispatch();

  const [showPass, switcher] = useState(true)
  const [showPassImg, switcherImg] = useState(require('../Myimages/hidePass.png'))

  const PassSwitcher = () => {

    if (showPass === true) {
      switcher(false);
      switcherImg(require('../Myimages/showPass.png'))
    }

    else {
      switcher(true)
      switcherImg(require('../Myimages/hidePass.png'))
    }

  }

  useEffect(()=>
  {

    if(Login === true )
    {
      navig.navigate("HomePage");
    }
  },[Login])

  const Checker = () => {
    dispatch(LoginMeup({Email,Password}));
  };

  return (
    <KeyboardAvoidingView
      behavior={'position'} style={{ flex: 0.9 }}
    >
      <View style={styles.upperBack}>
        <Image source={require('../Myimages/tmp.png')} style={styles.icon} />
        <View style={styles.lowerBack}>
          <Text style={styles.TextSignUp}>Login</Text>
          <TextInput style={[styles.SignUpBox, { marginTop: 10 }]} onChangeText={newText => dispatch(RegEmail(newText))} placeholder="Your email ">
          </TextInput>
          <TextInput secureTextEntry={showPass} onChangeText={newText => dispatch(RegPassword(newText))} style={[styles.SignUpBox, { marginTop: 5 }]} placeholder="Password " />
          <Pressable onPress={() => { PassSwitcher() }}>
            <Image source={showPassImg} style={{ width: 28, height: 20, top: -57, left: 315 }} ></Image>
          </Pressable>
          <View style={[styles.line, { marginTop: -20 }]} />
          <Pressable onPress={() => {Checker()}} style={[styles.SignUpFillBox, { marginTop: 20 }]}  >
            <Text style={styles.textBox}>
              {"LOGIN  ➲ "}
            </Text>
          </Pressable>

          <View>
            <Pressable onPress={() => navig.navigate('signup')} style={[styles.SignUpFillBox, { backgroundColor: "#F1F1F9" }]}  >
              <Text style={[styles.textBox, { color: '#5A5A89', paddingLeft: 160 }]}>
                {"SIGNUP"}
              </Text>
            </Pressable>
          </View>

        </View>



      </View>
    </KeyboardAvoidingView>

  );
};








const styles = StyleSheet.create({



  backGround:
  {
    position: 'absolute',
    width: 450,
    height: 700,
    left: 0,
    top: 0,
    backgroundColor: '#262146',
  },

  icon: {
    position: 'absolute',
    height: 150,
    width: 150,
    left: '30%',
    right: '22.14%',
    top: '15%',
    bottom: '0%',
  },

  upperBack:
  {
    position: 'absolute',
    height: 220,
    width: 450,
    backgroundColor: '#262146',
  },

  lowerBack:
  {
    flex: 1,
    flexDirection: 'column',

    padding: 20,
    paddingTop: 4,
    gap: 24,

    position: 'absolute',
    width: 450,
    height: 500,
    left: 0,
    top: 222,
    backgroundColor: '#F8F8FF',

  },

  SignUpBox:
  {
    flexDirection: "row",
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 12,
    paddingRight: 16,

    width: 370,
    height: 50,

    backgroundColor: "#FFFFFF",
    borderRadius: 8,


  },

  TextSignUp:
  {

    fontWeight: 'bold',
    fontSize: 30,
    color: "#5A5A89",
  },

  line: {

    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
    width: 370,
  },

  SignUpFillBox:
  {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 12,
    paddingRight: 16,
    width: 370,
    height: 35,
    backgroundColor: "#0058B9",
    borderRadius: 8,


  },

  textBox:
  {
    width: 370,
    height: 35,
    fontSize: 15,
    paddingLeft: 150,
    paddingTop: 5,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },

});


export default LoginScreen;