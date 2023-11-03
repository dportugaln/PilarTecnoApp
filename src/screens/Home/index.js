

import React from 'react';
import {
    ActivityIndicator,
    SafeAreaView,
    Dimensions,
    TouchableHighlight,
    StyleSheet,
    TouchableOpacity,
    Text,
    Alert,
    View,
} from 'react-native';
import Header from '../../components/Header';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;




const Home = (props) => {


    const handlePressProfile = () => {
        props.navigation.navigate("Profile")
    }

    const handlePressList = () => {
        props.navigation.navigate("Lists")
    }

    const handlePressMaps = () => {
        props.navigation.navigate("Map")
    }


    return (
        <SafeAreaView style={styles.container}>

            <Header />
            <View style={{ ...styles.gridContainer }}>
                <View style={{ ...styles.gridRow, flexDirection: 'row' }}>
                    <View style={{ ...styles.gridColumn, justifyContent: 'flex-end', paddingBottom: '5%' }}>

                        <TouchableOpacity style={{ ...styles.gridButton }} onPress={() => {
                            Alert.alert(
                                'Alert',
                                'You are currently in Home',
                                [
                                    { text: 'OK' },
                                ],
                                { cancelable: true },
                            );
                        }} >
                            <Text style={{ ...styles.buttonTitle }}>Home</Text>
                        </TouchableOpacity>

                    </View>
                    <View style={{ ...styles.gridColumn, justifyContent: 'flex-end', paddingBottom: '5%' }}>
                        <TouchableOpacity style={{ ...styles.gridButton }} onPress={handlePressList}>
                            <Text style={{ ...styles.buttonTitle }}>List</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ ...styles.gridRow, flexDirection: 'row' }}>
                    <View style={{ ...styles.gridColumn, justifyContent: 'flex-start', paddingTop: '5%' }}>
                        <TouchableOpacity style={{ ...styles.gridButton }} onPress={handlePressMaps}>
                            <Text style={{ ...styles.buttonTitle }}>Map</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ ...styles.gridColumn, justifyContent: 'flex-start', paddingTop: '5%' }}>
                        <TouchableOpacity style={{ ...styles.gridButton }} onPress={handlePressProfile}>
                            <Text style={{ ...styles.buttonTitle }}>Profile</Text>
                        </TouchableOpacity>
                    </View>
                </View>

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
    },
    gridColumn: {
        flex: 1,
        alignItems: 'center',
    },
    gridRow: {
        flex: 1,
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
        width: '100%'
    }

});

export default Home;