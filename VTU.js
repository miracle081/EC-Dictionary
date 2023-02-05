import React, { useState } from 'react';
import { StyleSheet, Text, View,  } from 'react-native';
import { Searchbar } from 'react-native-paper';

export function VTU() {
    
    const [searchQuery, setSearchQuery] = useState('');
    const [noWord, setNoWord] = useState('');
    const [wordColor, setColor] = useState('#372948');
    const [whole, setWhole] = useState([]);

    const onChangeSearch = query => setSearchQuery(query);

    const [wordPhonetic, setPhonetic] = useState([]);
 
    function show() {
        const dictionaryapis = async () => {
            const response = await fetch(` https://sandbox.vtpass.com/api/service-variations?serviceID=mtn-data`);
            const data = await response.json();
            return data
        }
        dictionaryapis()
            .then(returned => {
                console.log(returned);
            })
            .catch((e) => {
                console.log(e);
            })
    };
    show();



    return (
        <View style={styles.con}>
            <Searchbar
                placeholder="Search word"
                onChangeText={onChangeSearch}
                value={searchQuery}
            />

            {/* <ScrollView horizontal style={styles.wordHeader}>
                <Text style={styles.mainWord}>{wordSearch} : </Text>
                <Text style={styles.mainWord}>{wordPhonetic} </Text>
            </ScrollView>

            <View style={styles.dicMeaning}>
                <Text style={{fontWeight:'bold', marginBottom:5}}>Meaning:</Text>
                <Text onLongPress={()=> setColor("red")} style={[{color: wordColor},styles.meaning]}>{whole}</Text>
                <Text style={styles.meaning}>{noWord}</Text>
            </View> */}
            
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