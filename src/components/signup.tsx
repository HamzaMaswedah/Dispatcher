
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect, useCallback } from 'react';
import { RegEmail, RegPassword, RegRePassword, SignUp } from '../store/slicers/AuthSlicers'

import { signMeup } from '../store/slicers/AuthSlicers'


import {

  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Pressable,
  Platform,
  Alert,
  KeyboardAvoidingView,


} from 'react-native';

const SignUpScreen = () => {
  const navig = useNavigation();
  const ERR = useSelector((state: any) => state.auth.error)
  const status = useSelector((state: any) => state.auth.status)
  const Login = useSelector((state: any) => state.auth.Login)
  const Email = useSelector((state: any) => state.auth.Email)
  const Password = useSelector((state: any) => state.auth.Password)
  const RePassword = useSelector((state: any) => state.auth.RePassword)

  const [showPass, switcher] = useState(true)
  const [showPassImg, switcherImg] = useState(require('../Myimages/hidePass.png'))
  

  const [showRePass, switcherRe] = useState(true)
  const [showRePassImg, switcherImgRe] = useState(require('../Myimages/hidePass.png'))

  const dispatch = useDispatch()

  useEffect(()=>{
    // console.log(Login);
    if(Login === true)
    {
      navig.navigate('HomePage');
    }
  },[Login])

  const Checker = () => {

    if (Email.length !== 0 && Password.length !== 0 && RePassword.length !== 0) {
      if (Password === RePassword) {

        dispatch(signMeup({ Email, Password, RePassword }))
          .then(() => {
            console.log('Here');

            if (Login === true) {
              console.log('User created & signed in!');
              // navig.navigate('HomePage');
            }
            else {
              console.log(ERR);
            }
          })
      }
      else {
        Alert.alert("Try Again!", "Password and Re-Password are not equal try again!");
      }
    }
    else {
      Alert.alert("Try Again!", "You need to fill all filed inorder to sign up !");
    }
  }

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


  const RePassSwitcher = () => {

    if (showRePass === true) {
      switcherRe(false);
      switcherImgRe(require('../Myimages/showPass.png'))
    }

    else {
      switcherRe(true)
      switcherImgRe(require('../Myimages/hidePass.png'))
    }

  }

  return (
    <KeyboardAvoidingView
      behavior={'position' } style={{flex: 0.9}} 
    >
      <View style={styles.upperBack}>
        <Image source={require('../Myimages/tmp.png')} style={styles.icon} />
        <View style={styles.lowerBack}>
          <Text style={styles.TextSignUp}>Signup</Text>
          <TextInput style={styles.SignUpBox} onChangeText={newText => dispatch(RegEmail(newText))} placeholder="Your email ">
          </TextInput>
          <View>
            <TextInput clearButtonMode='always' secureTextEntry={showPass} onChangeText={newText => dispatch(RegPassword(newText))} style={styles.SignUpBox} placeholder="Password " />
            <Pressable onPress={() => { PassSwitcher() }}>
              <Image source={showPassImg} style={{ width: 28, height: 20, top: -35, left: 315 }} ></Image>
            </Pressable>
          </View>
          <View style={{ top: -20, }}>
            <TextInput clearButtonMode='always' secureTextEntry={showRePass} onChangeText={newText => dispatch(RegRePassword(newText))} style={styles.SignUpBox} placeholder="Re-Enter Password " />
            <Pressable onPress={() => { RePassSwitcher() }}>
              <Image source={showRePassImg} style={{ width: 28, height: 20, top: -35, left: 315 }} ></Image>
            </Pressable>
          </View>
          <View style={[styles.line, { top: -28 }]} />
          <Pressable onPress={() => { Checker() }} style={[styles.SignUpFillBox, { top: -28 }]}  >
            <Text style={styles.textBox}>
              {"SIGNUP  ➲ "}
            </Text>
          </Pressable>


          <Pressable onPress={() => navig.navigate('login')} style={[styles.SignUpFillBox, { backgroundColor: "#F1F1F9", top: -28 }]}  >
            <Text style={[styles.textBox, { color: '#5A5A89', paddingLeft: 160 }]}>
              {"LOGIN"}
            </Text>
          </Pressable>


        </View>



      </View>
    </KeyboardAvoidingView>
  );
};


export default SignUpScreen;


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