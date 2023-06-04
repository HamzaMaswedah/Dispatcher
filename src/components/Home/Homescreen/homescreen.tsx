import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { fetchNews } from '../../../store/slicers/News';
import { addSaved } from '../../../store/slicers/Favorite';
import { changeArticle } from '../../../store/slicers/FullArtSlice';
import { logout } from "../../../store/slicers/AuthSlicers";


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
    BackHandler,
    Alert,
} from 'react-native';


const HomeScreen = () => {

    useEffect(() => {
        const backAction = () => {
            Alert.alert("Stop", "Are you sure you want to Exit", [
                {
                    text: "Cancel",
                    onPress: () => null,
                    style: "cancel",
                },
                {
                    text: "Yes",
                    onPress: () => {
                        dispatch(logout());
                        // console.log('Exit')
                        BackHandler.exitApp()}
                }
            ]
            );
            return true;
        }

        const backHandler = BackHandler.addEventListener("hardwareBackPress",backAction)
    },[])

    const dispatch = useDispatch()

    const navg = useNavigation();

    const data = useSelector((state: any) => state.News.News);
    const status = useSelector((state: any) => state.News.status);
    const err = useSelector((state: any) => state.News.error);
    const favs = useSelector((state:any)=> state.News.Favs);



    const [image, setImage] = useState(require("../../../Myimages/emptyFav.png"));

    function Switcher(item:any) {

        console.log(item);
        console.log(favs);

        if (favs[item.id] === true) {
            
            favs[item.id] = false;
            return require('../../../Myimages/emptyFav.png');
        }
        else {
            favs[item.id] = true;
            console.log(favs);
            return require('../../../Myimages/fullFav.png')
        }
    }

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchNews());
        }
    }, [])

    // Linking.openURL(item.url)
    const renderItem = ({ item }: any) => (

        // console.log(item),
        <View>
            <View>

                <Image style={{ width: 370, height: 150, top: 15, left: 20, borderTopLeftRadius: 20, borderTopRightRadius: 20 }} source={item.urlToImage ? {uri: item.urlToImage }:require('../../../Myimages/Empty.png')} />
                <Pressable onPress={() => { setImage(Switcher(item)); dispatch(addSaved(item)) }} onHoverOut={() => { setImage(require('../../../Myimages/fullFav.png')) }}>
                    <Image style={{ width: 33, height: 33, top: -115, left: 345 }} source={image} />
                </Pressable>
            </View>
            <View style={{ borderBottomLeftRadius:20,borderBottomRightRadius:20,backgroundColor: '#FFFFFF', width: 370, height: 300, left: 20, top: -20 }}>

                <Text style={{ left: 20, top: 18, fontFamily: 'Roboto' }}>{item.publishedAt}</Text>
                <Text style={{ width: 355, height: 70, left: 20, fontWeight: '700', paddingTop: 5, top: 18, color: '#14142B' }}>{item.title}</Text>
                <Text style={{ left: 20, fontFamily: 'Roboto' }}>{item.author}</Text>
                <Text style={{ width: 355, height: 130, left: 20, fontSize: 14, fontWeight: '400', top: 18, color: '#5A5A89' }}>{item.content}</Text>
                <Pressable onPress={() => { dispatch(changeArticle(item)); navg.navigate('fullart') }}>
                    <View style={styles.goToSite}>
                        <Text style={{ width: 170, fontSize: 13, fontWeight: '500', color: '#FFFFFF' }}>NAVIGATE TO DISPATCH  ➲</Text>
                    </View>
                </Pressable>
            </View>
        </View>
    );


    let content;

    if (status === 'loading') {
        content =
            <View style={{ top: 150 }}>
                <ActivityIndicator size='large' />
                <Text style={{ left: 177, marginTop: 7, fontWeight: '700', fontFamily: 'Roboto' }}>LOADING</Text>
            </View>
    } else if (status === 'succeeded') {

        content = <FlatList style={{ height: 490 }} data={data} renderItem={renderItem} />;

    }
    else if (status === 'failed') {
        content = <Image style ={{width:410,height:500,top:-4,left:3}}  source={require("../../../Myimages/fail.png")}></Image>
    }



    return (
        <View style={{ backgroundColor: '#E5E5E5' }}>
            <View style={styles.topHomeCon}>
                <Image style={{ width: 65, height: 65, left: 15, }} source={require('../../../Myimages/tmp.png')} />
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: 25, right: 25 }}>
                    <Image style={{ width: 23, height: 23, top: 5 }} source={require('../../../Myimages/search.png')} />
                    <Image style={{ width: 23, height: 27, top: 3 }} source={require('../../../Myimages/Notification.png')} />
                </View>
            </View >
            <View style={styles.filterbar}>
                <View>
                    <Text style={{ left: 15, fontSize: 21, fontWeight: '400', color: '#5A5A89', top: 2 }}>Sort by  ▼</Text>
                </View>

                <View style={{ right: 25 }}>
                    <Image style={{ width: 32, height: 32, top: 3 }} source={require('../../../Myimages/filter.png')} />

                </View>


            </View>
            <View style={{ top: 145 }}>
                {content}
            </View>
        </View>
    );
}
    ;







const styles = StyleSheet.create({

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
});
export default HomeScreen;