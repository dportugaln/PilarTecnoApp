import React from 'react';
import {
StyleSheet,
View,
TouchableOpacity,
Linking,
StyleProp,
TextStyle,
ViewStyle,
StatusBar,
} from 'react-native';
import { Header as HeaderRNE, HeaderProps, Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import PopMenu from './PopMenu';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { HomeStackScreen } from '../routes/HomeStack';
import { ProfileStackScreen } from '../routes/ProfileStack';
import { ListsStackScreen } from '../routes/ListsStack';
import { MapStackScreen } from '../routes/MapStack';

const Drawer = createDrawerNavigator();


const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

const Header = (props) => {
    const {title='Pilar Tecno', leftComponent, rightComponent } = props
    const navigation = useNavigation();



  return (
    <HeaderRNE 
    leftComponent={
        <TouchableOpacity onPress={openDrawer}>
          <Icon name="menu" color="#fff" />
        </TouchableOpacity>
      }
      rightComponent={rightComponent? rightComponent:(
        <PopMenu/>
      ) 
      }
      centerComponent={{ text: title, style: styles.heading }}
    />
  );
}

const styles = StyleSheet.create({
    headerContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#397af8',
      marginBottom: 20,
      width: '100%',
      paddingVertical: 15,
    },
    heading: {
      color: 'white',
      fontSize: 22,
      fontWeight: 'bold',
    },
    headerRight: {
      display: 'flex',
      flexDirection: 'row',
      marginTop: 5,
    },
    subheaderText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
    },
    });
    
    export default Header;