import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Searchbar } from 'react-native-paper';


export function Result({ navigation, route }) {
    const { wordSearch } = route.params;

    const [searchQuery, setSearchQuery] = useState('');
    const [noWord, setNoWord] = useState('');

    const onChangeSearch = query => setSearchQuery(query);

    const [whole, setWhole] = useState([]);
    function show(search) {
        const dictionaryapis = async () => {
            const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${search}`);
            const data = await response.json();
            return data
        }
        dictionaryapis()
            .then(returned => {
                let word = returned[0].meanings[0].definitions[0].definition;
                setWhole(word);
            })
            .catch(() => {
                setNoWord("word not Found")
            })
    };
    show(wordSearch);

    return (
        <View style={styles.con}>
            <Searchbar
                placeholder="Search word"
                onChangeText={onChangeSearch}
                value={searchQuery}
                onSubmitEditing={() => navigation.navigate('Result', { wordSearch: searchQuery })}
            />

            <View>
                <Text>{wordSearch}</Text>
            </View>

            <Text>{whole}</Text>

            {
                noWord
            }
        </View>
    )
};
const styles = StyleSheet.create({
    con: {
        // backgroundColor: 'rgba(128,128,128, 0.3)',
        padding: 10,
    },
})