import React, { useState, useEffect } from 'react'
import MapView, { Marker } from 'react-native-maps'
import { StyleSheet, Image } from 'react-native'
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location'

function Main() {
    const { currentRegion, setCurrentRegion } = useState('')

    useEffect(() => {
        async function loadInitialPosition() {
            const { granted } = await requestPermissionsAsync()

            if (granted) {
                const { coords } = await getCurrentPositionAsync({
                    enableHighAccuracy: false
                })

                const { latitude, longitude } = coords

                console.log(latitude, longitude)

                setCurrentRegion({
                    latitude,
                    longitude,
                    latitudeDelta: 0.04,
                    longitudeDelta: 0.04
                })
            }
        }

        loadInitialPosition()
    }, [])

    if (!currentRegion) {
        return null
    }

    return (
        <MapView initialRegion={currentRegion} style={ styles.map }>
            <Marker coordinate={{ latitude: -23.5172697, longitude: -51.6939688 }} >
                <Image style={styles.avatar} source={{ uri: 'https://avatars3.githubusercontent.com/u/13842365?s=460&v=4' }}/>
            </Marker>    
        </MapView>
    )
}

const styles = StyleSheet.create({
    map: {
        flex: 1
    },
    avatar: {
        width: 54,
        height: 54,
        borderRadius: 4,
        borderWidth: 4,
        borderColor: '#FFF'
    }
})

export default Main