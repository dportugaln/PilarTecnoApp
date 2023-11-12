
import React, { useState } from "react";
import { StyleSheet, View, Text, SafeAreaView, Dimensions, ActivityIndicator } from "react-native";
import { Icon, Switch } from 'react-native-elements';
import MapView from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import { hasLocationPermission } from "../../services/locationPermissions";

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

const ASPECT_RATIO = width / height;
const LATITUDE = -33.3018708;
const LONGITUDE = -66.3298548;
const LATITUDE_DELTA = 0.00422;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const Maps = () => {

    const [mapRef, setMapRef] = useState(null)

    const [region, setRegion] = useState({
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
    });

    const [mapType, setMapType] = useState('standard');
    const [checked, setChecked] = useState(false);
    const [loader, setLoader] = useState(false);

    const _getLocation = async () => {
        const permiss = await hasLocationPermission();

        if (permiss) {

            await Geolocation.getCurrentPosition(
                async posicion => {
                    const longitude = posicion.coords.longitude;
                    const latitude = posicion.coords.latitude;

                    mapRef.animateToRegion(
                        {
                            latitude: latitude,
                            longitude: longitude,
                            latitudeDelta: region.latitudeDelta,
                            longitudeDelta: region.longitudeDelta
                        },
                        1000
                    );

                    setRegion({ longitude: longitude, latitude: latitude, longitudeDelta: region.longitudeDelta, latitudeDelta: region.latitudeDelta });
                    // console.log(region)
                    // console.log('posicion actual... Latitud: ' + `${JSON.stringify(latitude)}` + ' longitud:' + `${JSON.stringify(longitude)}`)
                    setLoader(false);
                },
                (error) => {
                    setLoader(false);
                    console.log(error.code, error.message);
                },
                {
                    accuracy: {
                        android: 'high',
                        ios: 'best',
                    },
                    enableHighAccuracy: true,
                    timeout: 15000,
                    maximumAge: 10000,
                    distanceFilter: 0,
                    forceRequestLocation: true,
                }
            )

        } else {
            setLoader(false);
        }
    }

    const fitCoordinates = () => {
        setLoader(true);
        _getLocation();
    }

    const handleMapType = () => {
        setChecked(!checked)
        setMapType(!checked ? 'satellite' : 'standard');
    }

    const onRegionChange = region => {
        const { latitude, longitude, latitudeDelta, longitudeDelta } = region;
        setRegion({ longitude: longitude, latitude: latitude, longitudeDelta: longitudeDelta, latitudeDelta: latitudeDelta });
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.mainContent}>

                <View>
                    <MapView
                        ref={map => {
                            setMapRef(map);
                        }}
                        mapType={mapType}
                        style={styles.map}
                        initialRegion={region}
                        region={region}
                        onRegionChangeComplete={onRegionChange}
                    />
                </View>

                <View style={styles.panel}>

                    <View style={[{ flex: 1 }, styles.panelLabels]}>
                        <Text>Lat: {region.latitude} </Text>
                        <Text>Lon: {region.longitude} </Text>
                    </View>

                    <View style={[{ flex: 1 }, styles.panelIcons]}>

                        <View style={{ flex: 1 }}>
                            <Icon
                                name="crosshairs"
                                type="font-awesome"
                                color='#00abf1'
                                size={width / 10}
                                onPress={() => fitCoordinates()}
                            />
                        </View>

                        <View style={{ flex: 1 }}>
                            <Switch
                                value={checked}
                                onValueChange={(value) => handleMapType()}
                            />
                        </View>

                    </View>

                </View>

                <View style={styles.markerFixed}>

                    {!loader ?

                        <Icon
                            name="map-marker"
                            type="font-awesome"
                            color='#00abf1'
                            size={width / 6}
                        />

                        :

                        <ActivityIndicator size="large" color="#00abf1" />

                    }
                </View>

            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    title: {
        fontSize: 24,
        alignSelf: 'center',
        fontWeight: 'bold',
        color: '#777777'
    },
    mainContent: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    map: {
        width: width,
        height: height / 2 * 1.2,
        alignSelf: 'center',
        marginTop: width / 6,
    },
    region: {
        color: '#fff',
        lineHeight: 20,
        margin: 20,
        alignSelf: 'center'
    },
    markerFixed: {
        left: '50%',
        marginLeft: -24,
        marginTop: -48,
        position: 'absolute',
        top: '50%',
    },
    marker: {
        height: 52,
        width: 52
    },
    panel: {
        position: 'relative',
        flexDirection: 'row',
        marginTop: 0,
        height: 80,
        backgroundColor: '#f0f1f3',
        opacity: 1
    },
    panelLabels: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    panelIcons: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    }
})







export default Maps;