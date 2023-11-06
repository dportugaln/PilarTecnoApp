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
import CustomDrawer from './Drawer'; // Import the CustomDrawer component




const Header = (props) => {
    const {title='Pilar Tecno', leftComponent, rightComponent } = props
    const navigation = useNavigation();

    const openDrawer = () => {
      navigation.openDrawer();
    };
    
    

  return (
    <HeaderRNE 
    leftComponent={leftComponent ? leftComponent : { // Add a button to open the drawer
      icon: 'menu',
      color: '#fff',
      onPress: openDrawer, // Call the openDrawer function
    }}
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