import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Searchbar } from 'react-native-paper';


export function Result({ navigation, route }) {
    // const { wordSearch } = route.params;

    const [searchQuery, setSearchQuery] = useState('');
    const [whole, setWhole] = useState([]);
    const [noWord, setNoWord] = useState('');

    const onChangeSearch = query => setSearchQuery(query);

    function show() {
        const dictionaryapis = async () => {
            const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/miracle`);
            const data = await response.json();
            return data
        }
        dictionaryapis()
            .then(returned => {
                let word = returned[0].meanings[0].definitions;
                let means = []
                // console.log(word);
                word.forEach(element => {
                    means.push(element)
                });
                setWhole(means);
                
            })
            .catch(() => {
                setNoWord("word not Found")
            });
    };
    // show(wordSearch);
    show();
    

    return (
        <View style={styles.con}>
            {/* <Searchbar
                placeholder="Search word"
                onChangeText={onChangeSearch}
                value={searchQuery}
                onSubmitEditing={() => navigation.navigate('Result', { wordSearch: searchQuery })}
            /> */}
            {
                whole
            }
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