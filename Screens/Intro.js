import React, { useState, useEffect } from 'react';
import { Image, Platform, StyleSheet, Text, View, } from 'react-native';
import { Button } from 'react-native-paper';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import * as ImagePicer from "expo-image-picker";
import { Constants } from 'expo-constants';


export function Intro({ navigation }) {

    // const [image, setImage] = useState();

    // useEffect( () => {
    //     async function  doo  () {
    //         if (Platform.OS !== "web") {
    //             const { status } = await ImagePicer.requestMediaLibraryPermissionsAsync();
    //             if (status !== "granted") {
    //                 alert('Permission denied');
    //             }
    //         }

    //     }
    //     doo();

    // }, [])

    // const pickImage = async () => {
    //     let result = await ImagePicer.launchImageLibraryAsync({
    //         mediaType: ImagePicer.MediaTypeOptions.All,
    //         allowsEditing: true,
    //         aspect: [4, 4],
    //         quality: 2,
    //     });
    //     // console.log(result);
    //     if (!result.cancelled) {
    //         setImage(result.uri)
    //     }
    // }

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', marginBottom: 30 }}>
                <FontAwesomeIcon icon={faBook} size={40} color="white" />
                <Text style={styles.header}>EC Dictionary</Text>
            </View>
            <Button
                icon={{ uri: 'https://cdn-icons-png.flaticon.com/128/151/151773.png' }}
                mode='contained'
                style={styles.btn}
                onPress={() => navigation.navigate("HomeScreen")}
                // onPress={pickImage}
            >
                {/* Search for words */}
                Select Image
            </Button>
            {/* <Image source={{ uri: image }} style={{ width: 200, height: 200, marginTop:20, borderRadius:500 }} /> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#372948',
    },
    header: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 30,
        color: 'white'
    },
});
