
import React, { useState } from 'react';
import {
    SafeAreaView,
    Dimensions,
    StyleSheet,
    Text,
    View,
    Box,
    FormControl,

} from 'react-native';
import { Input, Button } from '@rneui/themed';
import { useDispatch } from 'react-redux';
import { appActions } from '../../redux/AppRedux';



const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;




const Login = () => {
    const dispatch = useDispatch();
    const [email, setEmail  ] = useState("");
    const [pw, setPW] = useState("");

    handlerChangeEmail = (value) => {
        setEmail(value)
    }

    handlerChangePW = (value) => {
        setPW(value)
    }

    handlePress = () =>{
        dispatch(appActions.setToken(true))
    }



    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.formContainer}>
                
            <View>
                    <Input
                        containerStyle={styles.input}
                        value={email}
                        onChangeText={handlerChangeEmail}
                        placeholder="Email"
                        placeholderTextColor="white"
                        keyboardType='email-address'                        
                    />
                    
                    </View>


                
                  <View>
                    <Input
                        containerStyle={styles.input}
                        value={pw}
                        onChangeText={handlerChangePW}
                        placeholder="Password"
                        placeholderTextColor="white"
                        keyboardType='default'
                        secureTextEntry={true}                 
                    />
                    
                    



            </View>
            <View style={styles.buttons}>
                <Button onPress={handlePress}>
                        Log in
                    </Button>
                    <Text>!</Text>
                    <Button onPress={()=>console.log('register')}>
                        Sign in
                    </Button></View>
            
            </View>
                    

{/*             <Box alignItems="center">
                <Box w="100%" maxWidth="300px">
                    <FormControl isRequired>
                        <Stack mx="4">
                            <FormControl.Label>Password</FormControl.Label>
                            <Input type="password" defaultValue="12345" placeholder="password" />
                            <FormControl.HelperText>
                                Must be atleast 6 characters.
                            </FormControl.HelperText>
                            <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                                Atleast 6 characters are required.
                            </FormControl.ErrorMessage>
                        </Stack>
                    </FormControl>
                </Box>
            </Box>; */}





        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    formContainer: {
        flex: 1,
        backgroundColor: 'black',
        width: WIDTH,
        height: HEIGHT,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        backgroundColor: 'grey',
        color: 'white',
        height: 100,
        width: WIDTH*.9,
        borderBottomColor: 'white',
      },
      buttons:{
        flexDirection: 'row',
        marginTop: '15%',
        justifyContent: 'center',
        alignItems: 'left',
        widt: WIDTH*.9

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

export default Login;