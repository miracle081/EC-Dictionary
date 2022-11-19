import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-native-paper';
import { db } from '../services/firebase';
import { onSnapshot, collection, doc, deleteDoc } from "firebase/firestore";

export function History({ navigation }) {
    const [search, setSearch] = useState(''); 

    useEffect(() => {
        onSnapshot(collection(db, 'histories'), (querySnapshot) => {
            const allsearch = [];
            querySnapshot.forEach((doc) => {
                const document = doc.data();
                document.id = doc.id
                allsearch.push(document);
            })
            setSearch(allsearch);
        },
            (error) => alert(error));
    }), [];

    function deleteSearch (wordId) {
        //delete a search
        deleteDoc(doc(db, "histories", `${wordId}`))
        .then()
        .catch(() => {
            Alert.alert(
                'Error',
                'An error occored. Please try again.',
                [{text:'Ok'}]
            )
        })
    }
    return (
        <View style={styles.container}>
            <FlatList showsVerticalScrollIndicator data={search} renderItem={({ item }) => {
                return (
                    <TouchableOpacity style={styles.main}
                        onPress={() => {
                            navigation.navigate('Result', { wordSearch: item.word })
                        }}
                    >
                        <View>
                            <Text style={styles.mainWord}>{item.word}</Text>
                            <Text style={styles.date}>{item.date}</Text>
                        </View>
                        <Button icon={'delete'} mode='outlined'
                            onPress={()=>deleteSearch(item.id)}
                            textColor="#372948"
                        >Delete</Button>
                    </TouchableOpacity>
                );
            }} key={({ item }) => { item.id }} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 5
    },
    main: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 4,
        borderColor: '#372948',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10
    },
    mainWord: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#372948',
        textTransform: 'capitalize',
    },
    date: {
        fontStyle: 'italic'
    }
});
