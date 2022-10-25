import { StyleSheet, Text, View, } from 'react-native';
import { Button } from 'react-native-paper';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components/native';

const Bg = styled.View`
background-image: linear-gradient(140deg, #FB2576, #372948 60% );
`

export function Intro({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', marginBottom:30 }}>
                <FontAwesomeIcon icon={faBook} size={40} color="white" />
                <Text style={styles.header}>EC Dictionary</Text>
            </View>
            <Button
                icon={{ uri: 'https://cdn-icons-png.flaticon.com/128/151/151773.png' }}
                mode='contained'
                style={styles.btn}
                onPress={() => navigation.navigate("HomeScreen")}
            >
                Search for words
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#372948',
    },
    header: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 30,
        color: 'white'
    },
});
