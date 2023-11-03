import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  SafeAreaView,
  Pressable,
} from 'react-native';
import {Icon} from '@rneui/themed';
import {useNavigation} from '@react-navigation/native';

const Popmenu = () => {
  const [modalVisible, setModalVisible] = React.useState(false);
  const navigation = useNavigation();
  return (

    <View style={{width: 25, height: 25, marginTop: 5}}>

      {modalVisible && (
        <Pressable onPress={(event) => event.target == event.currentTarget && setModalVisible(false)}>
          <View style={styles.popUpMenu}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Profile');
              }}>
              <Text style={styles.popUpMenuText}>Perfil</Text>
            </TouchableOpacity>
          </View>
        </Pressable>
      )}
      <TouchableOpacity>
        <Icon
          onPress={() => setModalVisible(prev => !prev)}
          name="user"
          type="font-awesome"
          color="white"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  popUpMenu: {
    position: 'absolute',
    backgroundColor: 'white',
    width: 100,
    top: 35,
    right: 5,
    elevation: 10,
  },
  popUpMenuText: {
    color: 'white',
    fontSize: 20,
  },
});

export default Popmenu;