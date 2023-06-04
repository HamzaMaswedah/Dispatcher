import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from '@react-navigation/native';
import React, { useRef, useState, useEffect, useCallback } from 'react';
import { RegEmail, RegPassword, RegRePassword, LogedIn, LogedOut, SignUp } from '../store/slicers/AuthSlicers'

import Carousel from "react-native-snap-carousel";


import {

    StyleSheet,
    Text,
    TextInput,
    View,
    Image,
    Pressable,
    Alert,
    Dimensions,

} from 'react-native';


const width = Dimensions.get('window').width;

const height = Dimensions.get('window').height;


const images = [{
    'image': require('../Myimages/onboarding1.png'), 'txt1': 'Skip', 'txt2': 'Next >'
}, { 'image': require('../Myimages/onboarding2.png'), 'txt1': 'Skip', 'txt2': 'Next >' },
{
    'image': require('../Myimages/onboarding3.png'), 'txt1': 'Skip', 'txt2': 'Next >'
}];


const MyCrousel = () => {

    const caroselRef = useRef(null);
    const renderItem = ({ item }) => {
        return (<View>
            <Image style={{ width: width, height: height + 10 }} source={item.image}></Image>
        </View>);
    };
    return (

        <Carousel

            ref={caroselRef}
            data={images}
            renderItem={renderItem}
            sliderWidth={width}
            itemWidth={width} />

    );
}


export default MyCrousel;