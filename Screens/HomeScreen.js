import React, { useState } from 'react';
import { Alert, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBook, faMagnifyingGlass, faCalendarDays, faClockRotateLeft, faShuffle, faInfoCircle, } from '@fortawesome/free-solid-svg-icons';
import MarqueeText from 'react-native-marquee';
import { randomWords } from '../Components/RandomWords';
import { db } from '../services/firebase';
import { collection, addDoc } from 'firebase/firestore';
import { faGooglePlay } from '@fortawesome/free-brands-svg-icons';

export function HomeScreen({ navigation }) {

    const [search, setSearch] = useState('');

    function add(item) {
        const now = new Date();
        let hr = now.getHours();
        let min = now.getMinutes();
        let day = now.getDate();
        let mon = now.getMonth() + 1;
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
            word: item,
            date: savedate,
        })
            .then(() => {
                navigation.navigate('Result', { wordSearch: search })
            })
            .catch(() => {
                Alert.alert(
                    'Error',
                    'Please check your network connectivity and try again.',
                    [{ text: 'Ok'}]
                )
            })
    }

    function check(input, dataB) {
        if (input == "") {
            return (
                <TouchableOpacity style={styles.searchIcon} disabled={true}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} size={25} color="#372948" />
                </TouchableOpacity>
            )
        }
        else {
            return (
                <TouchableOpacity style={styles.searchIcon} onPress={dataB}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} size={25} color="#372948" />
                </TouchableOpacity>
            )
        }
    }

    let index = 0
    setInterval(() => {
        index = Math.ceil(Math.random() * 10 - 1);
    }, 400);

    let agument = randomWords[index]

    const now = new Date();
    let hr = now.getHours();

    let dayWords = Math.ceil(Math.random() * 10 - 1)
    if (hr >= 0) {
        setInterval(() => {
            dayWords = Math.ceil(Math.random() * 10 - 1);
        }, 86400000);

    }


    return (
        <View style={styles.container}>
            {/* ======= Nav Bar ====== */}
            <View style={[{ backgroundColor: "#372948" }, styles.nav]}>
                <View style={{ flexDirection: 'row', gap: 3 }}>
                    <Image style={styles.logo} source={{ uri: 'https://cdn-icons-png.flaticon.com/128/8688/8688199.png' }} />
                </View>
                <View style={{ flexDirection: 'row', }}>
                    <TextInput placeholder='Search Words' style={styles.search}
                        onChangeText={(w) => setSearch(w)}
                        placeholderTextColor="white"
                        clearTextOnFocus={true}
                        onSubmitEditing={()=>add(search)}
                    />
                    {check(search, ()=>add(search))}
                </View>
            </View>
            <ScrollView> 
                <View style={styles.gbMark}>
                    <MarqueeText
                        style={styles.mark}
                        speed={0.2}
                        marqueeOnStart={true}
                        loop={true}
                        delay={100}
                    >
                        Welcome to Early Code (EC) Dictionary. A place of knowledge
                    </MarqueeText>
                </View>
                <View style={{ margin: 10 }}>

                    <View style={styles.main}>

                        <TouchableOpacity style={styles.list}
                            onPress={() => {
                                navigation.navigate('Result', { wordSearch: randomWords[dayWords] })
                            }}
                        >
                            <FontAwesomeIcon icon={faCalendarDays} size={50} color="#372948" />
                            <Text style={styles.mainText}>Word of the day</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.list}
                            onPress={add(agument)}
                        >
                            <FontAwesomeIcon icon={faShuffle} size={50} color="#372948" />
                            <Text style={styles.mainText}>Random Words</Text>
                        </TouchableOpacity>

                    </View>
                    <View style={styles.main}>
                        <TouchableOpacity style={styles.list}
                            onPress={() => {
                                navigation.navigate('History')
                            }}
                        >
                            <FontAwesomeIcon icon={faClockRotateLeft} size={50} color="#372948" />
                            <Text style={styles.mainText}>History</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.list} onPress={() =>
                            Alert.alert(
                                'More Apps',
                                'Sorry, this fuction is not available yet. Working in progress...',
                                [{ text: 'Okay',}],
                                [{ text: 'Go to Intro',}],
                            )
                        }>
                            <FontAwesomeIcon icon={faGooglePlay} size={50} color="#FD841F" />
                            <Text style={styles.mainText}>Get more EC apps</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.main}>
                        <TouchableOpacity style={styles.list} onPress={() => navigation.navigate("Help")}>
                            <FontAwesomeIcon icon={faInfoCircle} size={50} color="#372948" />
                            <Text style={styles.mainText}>Help</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    },
    logo: {
        width: 40,
        height: 40,
        borderColor: 'white',
        borderWidth: 2,
        borderRadius: 50
    },
    nav: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10
    },
    search: {
        borderColor: 'white',
        borderTopLeftRadius: 50,
        borderBottomLeftRadius: 50,
        padding: 10,
        paddingVertical: 0,
        borderWidth: 2,
        color: 'white',
        fontSize: 15,
        letterSpacing: 1,
        fontWeight: 'bold',
        width: 200
    },
    searchIcon: {
        backgroundColor: 'white',
        justifyContent: 'center',
        padding: 5,
        borderTopRightRadius: 25,
        borderBottomRightRadius: 25,
        paddingEnd: 10
    },
    list: {
        alignItems: 'center',
        // backgroundColor: '#372948',
        justifyContent: 'center',
        padding: 10,
        height: 140,
        width: '49%',
        margin: 2,
        borderColor: '#372948',
        borderWidth: 2,
        borderRadius: 40,
    },
    main: {
        flexDirection: 'row',
    },
    mainText: {
        fontSize: 18,
        marginTop: 12,
        color: '#372948',
        fontWeight: 'bold',
        textTransform: 'capitalize'
    },
    mark: {
        color: 'white',
        fontSize: 18,
        padding: 5,
        textTransform: 'capitalize',
        fontStyle: 'italic',
        paddingStart: 10,
    },
    gbMark: {
        marginVertical: 3,
        backgroundColor: '#372948',
        color: 'black'
    },
})