import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import { Searchbar } from 'react-native-paper';

export function Crypto() {

    const [word, setWord] = useState([]);
    const [coinId, setCoinId] = useState([]);
    const [currency, setCurrency] = useState([]);
    const [selected, setSelected] = useState("");
    const [selected2, setSelected2] = useState("");


    const getList = () => {
        const list = async () => {
            const response = await fetch(`https://api.coingecko.com/api/v3/coins/list`);
            const data = await response.json();
            return data
        }
        list()
            .then(returned => {
                let pushing = []
                returned.forEach(element => {
                    pushing.push({ value: element.id })
                });
                setCoinId(pushing);
            })
            // try {
            //     const response = await fetch(`https://api.coingecko.com/api/v3/coins/list`);
            //     let datas = await response.json();

            //     let pushing = []
            //     datas.forEach(element => {
            //         pushing.push({ value: element.id })
            //     });
            //     setCoinId(pushing);

            //     const response2 = await fetch(`https://api.coingecko.com/api/v3/simple/supported_vs_currencies`);
            //     let data2 = await response2.json();

            //     let getCurrency = []
            //     data2.map(element => {
            //         getCurrency.push({ value: element })
            //     });
            //     setCurrency(getCurrency);
            // } 
            .catch((error) => {
                console.log("error is " + error);
            })

    };
    getList();

    function cionCurrency() {
        const getCurrencyList = async () => {
            const response = await fetch(`https://api.coingecko.com/api/v3/coins/list`);
            const data = await response.json();
            return data
        }
        getCurrencyList()
            .then(returned => {
                let getCurrency = []
                returned.map(element => {
                    getCurrency.push({ value: element })
                });
                setCurrency(getCurrency);
            })
            .catch((error) => {
                console.log("error is " + error);
            })
    }

    cionCurrency();
    return (
        <View style={styles.con}>
            <SelectList placeholder="Select coin Id" setSelected={setSelected} data={coinId} />
            <SelectList placeholder="Select Currency" setSelected={setSelected2} data={currency} />
            <View>
                <Text style={{ fontWeight: 'bold', marginBottom: 5 }}>Coin: {selected}</Text>
                <Text style={{ fontWeight: 'bold', marginBottom: 5 }}>Currency: {selected2}</Text>
                {/* {
                    word.map(item => {
                        // console.log(item.definition);
                        return (
                            <View key={item.id}>
                                <Text>{item.id}</Text>
                            </View>
                        ) 
                    })
                } */}
            </View>

        </View>
    )
};
const styles = StyleSheet.create({
    con: {
        backgroundColor: 'white',
        padding: 10,
        flex: 1
    },

    meaning: {
        fontSize: 20,
    }
})