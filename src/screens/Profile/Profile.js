/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
    SafeAreaView,
    Dimensions,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { Icon } from '@rneui/themed';
import Header from '../../components/Header';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;




const Profile = () => {



    return (
        <SafeAreaView style={styles.container}>

            <Header />
            <View style={{ ...styles.gridContainer}}>
                <Text style={{fontSize: 20, color: 'white',}}>
                    Profile
                </Text>

            </View>





        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    gridContainer: {
        flex: 1,
        backgroundColor: 'black',
        width: WIDTH,
        height: HEIGHT,
        justifyContent: 'center',
        alignItems: 'center',
    },
    gridColumn: {
        flex: 1,
        justifyContent: 'center',
    },
    gridRow: {
        flex: 1,
        justifyContent: 'center',
    },
    gridButton: {
        backgroundColor: 'grey',
        width: WIDTH * .4,
        height: WIDTH * .4,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        elevation: 3,
    },
    buttonTitle: {
        fontSize: 18,
        color: 'white',
        elevation: 3,
    },
    container: {
        flex: 1,
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    }

});

export default Profile;