import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View, } from 'react-native';
import styled from 'styled-components/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBook, faMagnifyingGlass, faCalendarDays, faClockRotateLeft, faShuffle, } from '@fortawesome/free-solid-svg-icons';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';

export function HomeScreen() {
    return (
        <View style={styles.container}>
            {/* ======= Nav Bar ====== */}
            <View style={styles.nav}>
                <View style={{ flexDirection: 'row', gap: 3 }}>
                    <Image style={styles.logo} source={{ uri: 'https://cdn-icons-png.flaticon.com/128/8688/8688199.png' }} />
                </View>
                <View style={{ flexDirection: 'row', }}>
                    <TextInput placeholder='Search Words' style={styles.search} onFocus={true} />
                    <TouchableOpacity style={styles.searchIcon}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} size={25} color="#3b5998" />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{margin:30, marginHorizontal:20}}>
                <TouchableOpacity style={styles.list}>
                    <View style={styles.listIcon}>
                        <FontAwesomeIcon icon={faCalendarDays} size={30} color="#fff" />
                    </View>
                    <Text style={{fontWeight:500,fontSize:25, marginTop:12, fontFamily:'arial',}}>Word of the day</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.list}>
                    <View style={styles.listIcon}>
                        <FontAwesomeIcon icon={faShuffle} size={30} color="#fff" />
                    </View>
                    <Text style={{fontWeight:500,fontSize:25, marginTop:12, fontFamily:'arial',}}>Random Words</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.list}>
                    <View style={styles.listIcon}>
                        <FontAwesomeIcon icon={faClockRotateLeft} size={30} color="#fff" />
                    </View>
                    <Text style={{fontWeight:500,fontSize:25, marginTop:12, fontFamily:'arial',}}>History</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.list}>
                    <View style={styles.listIcon}>
                        <FontAwesomeIcon icon={faEllipsisH} size={30} color="#fff" />
                    </View>
                    <Text style={{fontWeight:500,fontSize:25, marginTop:12, fontFamily:'arial',}}>Get more EC apps</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    },
    logo: {
        width: 40,
        height: 40
    },
    nav: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#3b5998',
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
    list:{
        flexDirection:'row',
        gap:10,
        borderBottomColor:'#3b5998',
        borderBottomWidth:2,
        marginBottom:24
    },
    listIcon:{
        backgroundColor:'#3b5998',
        justifyContent: 'center',
        padding: 10,
        // borderRadius:10
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
    },
})