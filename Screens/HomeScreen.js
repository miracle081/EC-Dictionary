import { StyleSheet, Text, View, ScrollView } from 'react-native';
import styled from 'styled-components/native';

export function HomeScreen() {
    return(
        <ScrollView style={styles.container}>
            <Text>Welcome To Home Screen</Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{

    },
})