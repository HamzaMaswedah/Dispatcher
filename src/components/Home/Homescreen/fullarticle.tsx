import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { fetchNews } from '../../../store/slicers/News';
import { addSaved, getSaved } from '../../../store/slicers/Favorite';


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


const Fullart = () => {

    const item = useSelector((state: any) => state.article.Article);

    // console.log(JSON.stringify(article));

    const navg = useNavigation();

    const back = 'ᐸ   Back';

    return (
        <View style={{ backgroundColor: '#E5E5E5'}}>

            <View style={styles.topHomeCon}>
            <Pressable  onPress={() => navg.navigate('articles') }>
                    <View style={{  flexDirection: 'row' ,top:5  }}>
                        <Text style={{ color: '#FFFFFF', fontSize: 29, fontWeight: '400', left: 15, }}> ᐸ  </Text>
                        <Text style={{ color: '#FFFFFF', fontSize: 17, fontWeight: '300', left: 9, top: 7 }}> Back  </Text>
                    </View>
            </Pressable>
            </View>

            <Image style={{ width: 412, height: 180,marginTop:80}} source={{ uri: item.urlToImage }} />
            <Image style={{ width: 35, height: 35, top: -160, left: 360 }} source={require('../../../Myimages/emptyFav.png')} />
            <ScrollView style={{ backgroundColor: '#FFFFFF', width: 415,height: 360 ,top:-34 }}>

                <Text style={{ left: 20, top: 18, fontFamily: 'Roboto' }}>{item.publishedAt}</Text>
                <Text style={{ width: 355, height: 70, left: 20, fontWeight: '700',fontSize:15, paddingTop: 5, top: 18, color: '#14142B' }}>{item.title}</Text>
                <Text style={{ left: 20,paddingTop:8, fontFamily: 'Roboto' }}>{item.author}</Text>
                <Text style={{ width: 355, height: 130, left: 20, fontSize: 14, fontWeight: '400', top: 8, color: '#5A5A89' }}>{item.content}</Text>
                <Text style={{ width: 355, height: 130, left: 20, fontSize: 14, fontWeight: '400', top: 8, color: '#5A5A89' }}>{item.content}</Text>
                <Text style={{ width: 355, height: 130, left: 20, fontSize: 14, fontWeight: '400', top: 8, color: '#5A5A89' }}>{item.content}</Text>
                <Text style={{ width: 355, height: 130, left: 20, fontSize: 14, fontWeight: '400', top: 8, color: '#5A5A89' }}>{item.content}</Text>
                <Text style={{ width: 355, height: 130, left: 20, fontSize: 14, fontWeight: '400', top: 8, color: '#5A5A89' }}>{item.content}</Text>

            </ScrollView>


        </View >

    );
}

const styles = StyleSheet.create({
    topHomeCon:
    {
        flexDirection: 'row',
        alignItems: 'center',
        // padding:0 ,16,
        position: 'absolute',
        width: 420,
        height: 80,
        backgroundColor: '#262146'
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
});


export default Fullart;