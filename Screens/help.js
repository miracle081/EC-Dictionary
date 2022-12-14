import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBook, faHomeAlt, faMagnifyingGlass, faCalendarDays, faClockRotateLeft, faShuffle, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-native-paper';
import { faGooglePlay } from '@fortawesome/free-brands-svg-icons';

export function Help({ navigation }) {

    return (
        <ScrollView style={styles.container}>
            <View style={[{ width: 140 }, styles.view]}>
                <FontAwesomeIcon icon={faHomeAlt} style={styles.icon} size={23} />
                <Text style={styles.header}>Home</Text>
            </View>
            <Text style={styles.text}>The initial page of the dictionary shows the icons related to common features:</Text>
            <View style={styles.ul}>
                <View style={styles.li}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} style={styles.icon} />
                    <Text style={styles.liContents}>Search</Text>
                </View>
                <View style={styles.li}>
                    <FontAwesomeIcon icon={faCalendarDays} style={styles.icon} />
                    <Text style={styles.liContents}>Word of the day</Text>
                </View>
                <View style={styles.li}>
                    <FontAwesomeIcon icon={faClockRotateLeft} style={styles.icon} />
                    <Text style={styles.liContents}>Random Words</Text>
                </View>
                <View style={styles.li}>
                    <FontAwesomeIcon icon={faShuffle} style={styles.icon} />
                    <Text style={styles.liContents}>History</Text>
                </View>
                <View style={styles.li}>
                    <FontAwesomeIcon icon={faGooglePlay} style={styles.icon} />
                    <Text style={styles.liContents}>Get more EC apps</Text>
                </View>
                <View style={styles.li}>
                    <FontAwesomeIcon icon={faInfoCircle} style={styles.icon} />
                    <Text style={styles.liContents}>Help</Text>
                </View>
            </View>
            <Image style={styles.page} source={require("../assets/page.png")} />

            <View style={[{ width: 250, marginTop:15, }, styles.view]}>
                <FontAwesomeIcon icon={faMagnifyingGlass} style={styles.icon} size={23} />
                <Text style={styles.header}>How to search</Text>
            </View>
            <Text style={styles.text}>
                The top bar contians the search icon and main menu. By touching the search box you can get the software keyboard: here you can start to search words.
            </Text>

            <View style={[{ width: 150, marginTop:15, }, styles.view]}>
                <FontAwesomeIcon icon={faClockRotateLeft} style={styles.icon} size={23} />
                <Text style={styles.header}>History</Text>
            </View>
            <Text style={styles.text}>
                This panel contians the most recent searched words. You can select one recent word, sort the list based on chronological order, 
            </Text>
            <Image style={[{ marginTop:15, }, styles.page]} source={require("../assets/his.png")} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10
    },
    view: {
        flexDirection: 'row',
        borderBottomColor: 'red',
        borderBottomWidth: 2,
        padding: 5,
        alignItems: 'center'
    },
    header: {
        fontSize: 25,
        fontWeight: 'bold',
        paddingLeft: 5
    },
    icon: {
        paddingLeft: 20
    },
    text: {
        fontSize: 18,
        marginTop: 10,
        paddingStart: 5
    },
    ul: {
        backgroundColor: '#D8D8D8',
        borderRadius: 20,
        padding: 15,
        margin: 15
    },
    li: {
        flexDirection: 'row',
        marginVertical: 5,
        alignItems: "center"
    },
    liContents: {
        fontSize: 18
    },
    page: {
        height: 350,
        width: "60%",
        marginHorizontal: 60,
        borderRadius: 10,
        borderColor: 'red',
        borderWidth: 1
    }
});
