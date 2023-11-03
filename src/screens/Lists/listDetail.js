import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  Dimensions,
  View,
  TouchableOpacity,
} from 'react-native';
import Header from '../../components/Header';
import {Icon} from '@rneui/themed';


const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const ListDetails = (props) => {
  
  return (
    <SafeAreaView style={styles.container}>
      <Header leftComponent ={(
        
        <View>
          <TouchableOpacity style={{marginTop:5}} onPress={()=>props.navigation.goBack()}>
            <Icon  type='font-awesome-5' name="arrow-left" color={"white"}/>
          </TouchableOpacity>
        </View>
        
      )} />
      <View style={{...styles.gridContainer}}>
      <View style={{...styles.gridRow, flexDirection: 'row'}}>
        <Text style={{fontSize:20, ...styles.detailText}}>
            Details List
        </Text>
      </View>
      </View>
    </SafeAreaView>
  );
};

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
    },

    detailText :{
        fontSize:20,
        color:'white',
        textAlign:'center'
      },

});

export default ListDetails;