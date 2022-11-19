import React, { useState, useEffect } from 'react';
import { Alert, Image, Platform, StyleSheet, Text, View, } from 'react-native';
import { Button } from 'react-native-paper';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import * as ImagePicer from "expo-image-picker";
import { faFile } from '@fortawesome/free-regular-svg-icons';
import { firebase} from "./services/firebase2"

export function Upload({ navigation }) {

    const [image, setImage] = useState(null);
    const [upleading, setUploading] = useState(false);

    const pickImage = async () => {
        let result = await ImagePicer.launchImageLibraryAsync({
            mediaType: ImagePicer.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 4],
            quality: 1,
        });
        // console.log(result);
        if (!result.cancelled) {
            setImage(result.uri)
        }
    }

    const upLoadImage = async () => {
        // setUploading(true);
        const response = await fetch(image)
        const blob = await response.blob();
        console.log(blob);
        const fileName = image.substring(image.lastIndexOf('/')+1);
        let ref = firebase.storage().ref().child(fileName).put(blob);

        try {
            await ref;
        } catch (error) {
         console.log(error);   
        }
        setUploading(faFile);
        Alert.alert(
            "Photo uploaded!"
        );
        setImage(null)
    }
    

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', marginBottom: 30 }}>
                <FontAwesomeIcon icon={faFile} size={40} color="white" />
                <Text style={styles.header}>Files</Text>
            </View>
            <Button
                icon={{ uri: 'https://cdn-icons-png.flaticon.com/128/151/151773.png' }}
                mode='contained'
                style={styles.btn}
                onPress={pickImage}
            >
                Select Image
            </Button>
            {
                image && <Image source={{ uri: image }} style={{ width: 200, height: 200, marginTop:20, borderRadius:500 }} />
            }
            <Button
                icon={{ uri: 'https://cdn-icons-png.flaticon.com/128/151/151773.png' }}
                mode='contained'
                style={{marginTop:20}}
                onPress={upLoadImage} 
                
            >
                Upload Image
            </Button>
            
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
