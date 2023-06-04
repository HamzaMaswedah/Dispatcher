import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import { logout } from "../../../store/slicers/AuthSlicers";
// import { RegEmail,RegPassword,RegRePassword,LogedIn,LogedOut,SignUp } from '../store/slicers/AuthSlicers'


import {

    StyleSheet,
    Text,
    View,
    Image,
    Pressable,

} from 'react-native';

const MainProfileScreen = () => {

    const navig = useNavigation();

    const dispatch = useDispatch();

    const logMeout = () => {

        dispatch(logout());
        navig.navigate('login');

    };

    return (
        <View style={[{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }]}>


            <View style={[styles.profileBox]}>
                <Text style={styles.HiHamza} >Hi Hamza </Text>
                <Text style={styles.editmy} >Edit my profile</Text>
                <Image source={require('../../../Myimages/profileImage.png')} resizeMode="contain" style={styles.profileImage} />

            </View>
            <View style={{ marginTop: 100, marginLeft: 20, display: 'flex', flexDirection: 'row' }}>
                <Image source={require('../../../Myimages/settings.png')} style={{ height: 28, width: 25 }} />
                <Text style={styles.textProfTab}> Settings</Text>
            </View>
            <View style={[styles.line, { marginTop: 5, marginLeft: 20, borderBottomColor: '#E3E3E3' }]} />

            <View style={{ marginTop: 10, marginLeft: 20, display: 'flex', flexDirection: 'row' }}>
                <Image source={require('../../../Myimages/terms.png')} style={{ height: 28, width: 25 }} />
                <Text style={styles.textProfTab} > Terms & privacy</Text>
            </View>
            <View style={[styles.line, { marginLeft: 20, borderBottomColor: '#E3E3E3' }]} />

            <Pressable onPress={() => logMeout()}>
                <View style={{ marginTop: 10, marginLeft: 20, display: 'flex', flexDirection: 'row' }}>
                    <Image source={require('../../../Myimages/ic_round-logout.png')} style={{ height: 30, width: 30 }} />
                    <Text style={styles.textProfTab} > Logout</Text>
                </View>
                <View style={[styles.line, { marginLeft: 20, borderBottomColor: '#E3E3E3' }]} />
            </Pressable>


        </View>
    )
}


const styles = StyleSheet.create({

    line: {

        borderBottomColor: 'black',
        borderBottomWidth: StyleSheet.hairlineWidth,
        width: 370,
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
    textProfTab:
    {
        marginLeft: 5,
        fontFamily: 'Roboto',
        fontWeight: '400',
        fontSize: 15,
        color: '#262146'
    }

});

export default MainProfileScreen;