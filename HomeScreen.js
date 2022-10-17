import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View, } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBook, faMagnifyingGlass, faCalendarDays, faClockRotateLeft, faShuffle, faInfoCircle, faSmileBeam, } from '@fortawesome/free-solid-svg-icons';
import { faEllipsisH, faPalette } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components/native';
import MarqueeText from 'react-native-marquee';
import { Button } from 'react-native-paper';

export function HomeScreen() {

    const [theme1, setTheme1] = useState('#FB2576');
    const [theme2, setTheme2] = useState('#372948');

    const Grid = styled.View`
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap:3px;
    `;
    const Bg = styled.TouchableOpacity`
        background-image: linear-gradient(140deg, ${theme1}, ${theme2} 60% );
        color: white;
    `;
    const Bg2 = styled.TouchableOpacity`
        background-image: linear-gradient(140deg, #3C4048, #181818 60% );
        color: white;
    `;
    const Bg3 = styled.TouchableOpacity`
        background-image: linear-gradient(140deg, #FB2576, #372948 60% );
        color: white;
    `;
    const Marquee = styled.Text`
        background-image: linear-gradient(140deg, ${theme1}, ${theme2} 60% );
    `;

    function pallet(color) {
        if (color == "#FB2576") {
            return (
                <Bg2 style={styles.themeBtn} onPress={() => {
                    setTheme1('#3C4048');
                    setTheme2('#181818');
                }
                }>
                    <FontAwesomeIcon icon={faPalette} size={30} color="#fff" />
                </Bg2>
            )
        }
        else {
            return (
                <Bg3 style={styles.themeBtn} onPress={() => {
                    setTheme1('#FB2576');
                    setTheme2('#372948');
                }
                }>
                    <FontAwesomeIcon icon={faPalette} size={30} color="#fff" />
                </Bg3>
            )
        }
    }

    return (
        <View style={styles.container}>
            {/* ======= Nav Bar ====== */}
            <Bg style={styles.nav}>
                <View style={{ flexDirection: 'row', gap: 3 }}>
                    <Image style={styles.logo} source={{ uri: 'https://cdn-icons-png.flaticon.com/128/8688/8688199.png' }} />
                </View>
                <View style={{ flexDirection: 'row', }}>
                    <TextInput placeholder='Search Words' style={styles.search} onFocus={true} />
                    <TouchableOpacity style={styles.searchIcon}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} size={25} color={theme1} />
                    </TouchableOpacity>
                </View>
            </Bg>
            <Bg style={styles.gbMark}>
                <MarqueeText
                    style={styles.mark}
                    speed={0.2}
                    marqueeOnStart={true}
                    loop={true}
                    delay={100}
                >
                    <FontAwesomeIcon icon={faSmileBeam} size={23} color="#fff" />
                    <Text> </Text> Welcome to Eealy Code (EC) Dictionary. A place of knowledge
                    <Text> </Text><FontAwesomeIcon icon={faSmileBeam} size={23} color="#fff" />
                </MarqueeText>
            </Bg>
            <Grid style={styles.main}>
                <Bg style={styles.list}>
                    <FontAwesomeIcon icon={faCalendarDays} size={50} color="#fff" />
                    <Text style={styles.mainText}>Word of the day</Text>
                </Bg>

                <Bg style={styles.list}>
                    <FontAwesomeIcon icon={faShuffle} size={50} color="#fff" />
                    <Text style={styles.mainText}>Random Words</Text>
                </Bg>

                <Bg style={styles.list}>
                    <FontAwesomeIcon icon={faClockRotateLeft} size={50} color="#fff" />
                    <Text style={styles.mainText}>History</Text>
                </Bg>

                <Bg style={styles.list}>
                    <FontAwesomeIcon icon={faEllipsisH} size={50} color="#fff" />
                    <Text style={styles.mainText}>Get more EC apps</Text>
                </Bg>

                <Bg style={styles.list}>
                    <FontAwesomeIcon icon={faInfoCircle} size={50} color="#fff" />
                    <Text style={styles.mainText}>Help</Text>
                </Bg>


            </Grid>
            {
                pallet(theme1)
            }


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
        backgroundColor: '#FB2576',
        padding: 10
    },
    search: {
        borderColor: 'white',
        borderTopLeftRadius: 50,
        borderBottomLeftRadius: 50,
        padding: 10,
        borderWidth: 2,
        color: 'white',
        fontSize: 15,
        letterSpacing: 1,
        fontWeight: 'bold'
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
        textAlign: 'center',
        gap: 10,
        borderBottomColor: '#3b5998',
        borderBottomWidth: 2,
        backgroundColor: '#3b5998',
        justifyContent: 'center',
        padding: 10,
        height: 140
    },
    main: {
        margin: 3,
        marginTop: 3,
    },
    mainText: {
        fontWeight: 500,
        fontSize: 25,
        marginTop: 12,
        fontFamily: 'arial',
        color: 'white'
    },
    mark: {
        color: 'white',
        fontSize: 22,
        fontFamily: 'arial',
        padding: 5,
        textTransform: 'capitalize',
        // fontStyle:'italic',
        paddingStart: 10
    },
    gbMark: {
        marginTop: 4
    },
    themeBtn: {
        width: "fit-content", color: 'white', padding: 15, borderRadius: 50,
        position: 'absolute',
        top: '100%',
        right: 10,
    }
})