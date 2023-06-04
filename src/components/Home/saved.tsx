import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect, useCallback } from 'react';
import SavedSlice from "../../store/slicers/Favorite";
import { fetchFav } from "../../store/slicers/Favorite";
// import { RegEmail,RegPassword,RegRePassword,LogedIn,LogedOut,SignUp } from '../store/slicers/AuthSlicers'


import {

    StyleSheet,
    Text,
    View,
    Image,
    Pressable,
    ActivityIndicator,
    ScrollView,
    Linking,
    FlatList,
} from 'react-native';


const SavedScreen = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchFav());
      }, []);

    const Fav = useSelector((state: any) => state.saved.Saved);

    console.log(Fav);

    const renderItem = ({ item }: any) => (
        <View>
            <View style = {styles.saveItem}>

                <Image style={{ width: 155, height: 145, top: 1, left: 10, borderRadius: 20 }} source={item.urlToImage ? {uri: item.urlToImage }:require('../../Myimages/Empty.png')} />
                <Text style={{ width: 180, height: 150, left: 18, fontSize: 15, fontWeight: '700', top: 10, color: '#14142B' }}>{item.description}</Text>
                <Pressable>
                    <Image style={{ width: 37, height: 37,right:330, top: -50  }} source={require('../../Myimages/fullFav.png')} />
                </Pressable>
            </View>
           
        </View>
    );

    return (
        <View style={{backgroundColor: '#FFFFFF' }}>
            <View style={styles.topHomeCon}>
                <Image style={{ width: 65, height: 65, left: 15, }} source={require('../../Myimages/tmp.png')} />
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: 25, right: 25 }}>
                    <Image style={{ width: 23, height: 23, top: 5 }} source={require('../../Myimages/search.png')} />
                    <Image style={{ width: 23, height: 27, top: 3 }} source={require('../../Myimages/Notification.png')} />
                </View>
            </View >
            <View style={styles.filterbar}>
                <Text style = {{left : 20,fontSize:30,fontFamily:'Roboto',fontWeight:'700',color:'#262146'}}>Saved articles</Text>
            </View>
            <View>
            <FlatList style={{ backgroundColor:'#FFFFFF',top: 145 ,marginBottom:1}} data={Fav} renderItem={renderItem} />
            </View>
            <View style = {{height:40,bottom:1,width:400}}></View>
        </View>
    );
}


const styles = StyleSheet.create({

    saveItem :{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        gap:8,

        width:369,
        height:158,

        left : 22,
        marginBottom:15 ,
        borderWidth : 1,
        borderColor : '#D9DBE9',
        borderRadius : 20 ,
        borderStyle : 'solid'
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
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

    dispatcher: {
        position: 'absolute',
        height: 200,
        width: 200,
        left: '22.01%',
        right: '22.14%',
        top: '75%',
        bottom: '0%',
        fontWeight: '700',
        fontSize: 40,
        color: '#FFFFFF',
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

    loadingBox:
    {
        marginTop: 100,
        width: 200,
        height: 150,
        fontSize: 15,
        paddingLeft: 150,
        paddingTop: 5,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },

    profileBox: {
        position: 'absolute',
        width: 450,
        height: 80,
        backgroundColor: '#FFFFFF',
        shadowOffset: { width: -2, height: 2 },
        shadowColor: '#171717',
        shadowOpacity: 0.2,


    },

    HiHamza: {
        // position: 'absolute',  
        width: 343,
        height: 32,
        left: 25,
        top: 15,

        fontWeight: '500',
        fontSize: 24,
        color: '#262146'


    },

    editmy: {
        width: 343,
        height: 45,
        left: 25,
        marginTop: 10,
    },

    profileImage:
    {
        position: 'absolute',
        left: 320,
        height: 50,
        top: 15,

    },
    topHomeCon:
    {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // padding:0 ,16,

        position: 'absolute',

        width: 420,
        height: 90,
        backgroundColor: '#262146'
    },

    filterbar:
    {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // padding:0 ,16,

        position: 'absolute',

        width: 420,
        height: 50,
        top: 90,
        backgroundColor: '#FFFFFF'
    },
    goToSite:
    {
        width: 311,
        height: 50,
        backgroundColor: '#0058B9',
        borderRadius: 30,
        left: 25,
        bottom: 10,
        alignItems: 'center',
        paddingTop: 15,
    },
    textProfTab:
    {
        marginLeft: 5,
        fontFamily: 'Roboto',
        fontWeight: '400',
        fontSize: 15,
        color: '#262146'
    }

});

export default SavedScreen;