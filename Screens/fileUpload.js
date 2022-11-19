import React, { useState, useEffect } from 'react';
import { Alert, Image, Platform, StyleSheet, Text, View, } from 'react-native';
import { Button } from 'react-native-paper';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import * as ImagePicer from "expo-image-picker";
import { faFile } from '@fortawesome/free-regular-svg-icons';
import { storage } from '../services/firebase';
import { ref, uploadBytes, uploadBytesResumable } from 'firebase/storage';

export function FileUpload({ navigation }) {

    const [image, setImage] = useState(null);

    const pickImage = async () => {
        let result = await ImagePicer.launchImageLibraryAsync({
            mediaType: ImagePicer.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 4],
            quality: 1,
        });
        console.log(result);
        if (!result.cancelled) {
            setImage(result.uri)
        }
    }

    const uploadImage = async () => {
        // setUploading(true);
        if (image == null) return;
        
        const imageRef = ref(storage,`images/kjaiujbiusd`);
        uploadBytes(imageRef,image).then(()=>{
            alert('image uploaded');
            // setImage(null);
        })
    };
    

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
                onPress={uploadImage} 
                
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
