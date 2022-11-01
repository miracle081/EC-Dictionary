import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { db } from '../services/firebase';
import { collection, addDoc } from 'firebase/firestore';

export function Result({ navigation, route }) {
    
    const { wordSearch } = route.params;
    const [searchQuery, setSearchQuery] = useState('');
    const [noWord, setNoWord] = useState('');
    const [wordColor, setColor] = useState('#372948');
    const [whole, setWhole] = useState([]);

    const onChangeSearch = query => setSearchQuery(query);

    let visible = true
    if (whole == null) {
        
    }
    const [wordPhonetic, setPhonetic] = useState([]);
    function add() {
        const now = new Date();
        let hr = now.getHours();
        let min = now.getMinutes();
        let day = now.getDate();
        let mon = now.getMonth();
        let yr = now.getFullYear();
        let amp = "am";

        if (min.lenght === 1) {
            min = `0${min}`;
        }
        
        if (hr > 12) {
            hr = hr - 12;
            amp = "pm";
        }
        const savedate = `${day}/${mon}/${yr} ~ ${hr}:${min} ${amp}`;

        addDoc(collection(db, 'histories'), {
            word: searchQuery,
            date: savedate,
        })
            .then(() => {
                navigation.navigate('Result', { wordSearch:  searchQuery})
            })
            .catch(() => {
                Alert.alert(
                    'Error',
                    'Please check your network connectivity and try again.',
                    [{ text: 'Ok'}]
                )
            })
    }

    function show(search) {
        const dictionaryapis = async () => {
            const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${search}`);
            const data = await response.json();
            return data
        }
        dictionaryapis()
            .then(returned => {
                let word = returned[0].meanings[0].definitions[0].definition;
                // console.log(returned);
                setWhole(word);
                setPhonetic(returned[0].phonetic);
                setNoWord("")
            })
            .catch(() => {
                setNoWord("word not Found")
                setWhole(null)
                setPhonetic(null)
            })
    };
    show(wordSearch);



    return (
        <View style={styles.con}>
            <Searchbar
                placeholder="Search word"
                onChangeText={onChangeSearch}
                value={searchQuery}
                onSubmitEditing={add}
            />

            <ScrollView horizontal style={styles.wordHeader}>
                <Text style={styles.mainWord}>{wordSearch} : </Text>
                <Text style={styles.mainWord}>{wordPhonetic} </Text>
            </ScrollView>

            <View style={styles.dicMeaning}>
                <Text style={{fontWeight:'bold', marginBottom:5}}>Meaning:</Text>
                <Text onLongPress={()=> setColor("red")} style={[{color: wordColor},styles.meaning]}>{whole}</Text>
                <Text style={styles.meaning}>{noWord}</Text>
            </View>
            
        </View>
    )
};
const styles = StyleSheet.create({
    con: {
        // backgroundColor: 'rgba(128,128,128, 0.3)',
        padding: 10,
    },
    wordHeader: {
        flexDirection: 'row',
        gap: 20,
        padding: 10,
        borderBottomColor: '#B2B2B2',
        backgroundColor: '#EDEDED',
        borderBottomWidth: 2,
        paddingBottom: 0,
        marginTop: 10,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10
    },
    mainWord: {
        fontWeight: "bold",
        fontSize: 28,
        textTransform: 'capitalize'
    },
    dicMeaning: {
        borderRadius: 10,
        backgroundColor: '#D8D8D8',
        marginTop: 10,
        padding: 10,
    },
    meaning: {
        fontSize: 20,
    }
})