import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Pressable,
  Animated,
} from 'react-native';
import { Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';

const PopMenu = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  const translateY = useRef(new Animated.Value(-100)).current;

  const showMenu = () => {
    setModalVisible(true);
    Animated.spring(translateY, {
      toValue: 0,
      useNativeDriver: false,
    }).start();
  };

  const hideMenu = () => {
    Animated.timing(translateY, {
      toValue: -100,
      duration: 300,
      useNativeDriver: false,
    }).start(() => setModalVisible(false));
  };

  return (
    <View style={{ width: 25, height: 25, marginTop: 5 }}>
      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => hideMenu()}
      >
        <Pressable onPress={() => hideMenu()}>
          <Animated.View
            style={[
              styles.popUpMenu,
              {
                transform: [{ translateY }],
              },
            ]}
          >
            <TouchableOpacity
              onPress={() => {
                hideMenu();
                navigation.navigate('Profile');
              }}
            >
              <Text style={styles.popUpMenuText}>Profile</Text>
            </TouchableOpacity>
          </Animated.View>
        </Pressable>
      </Modal>
      <TouchableOpacity onPress={showMenu}>
        <Icon name="user" type="font-awesome" color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  popUpMenu: {
    position: 'absolute',
    backgroundColor: 'grey',
    width: 100,
    top: 35,
    right: 5,
    elevation: 10,
    borderRadius: 3,
  },
  popUpMenuText: {
    color: 'white',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 20,
  },
});

export default PopMenu;
