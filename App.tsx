import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/Home';

{/*<View style={styles.container}>
    <Text>Open up App.tsx to start working on your app!</Text>
    <StatusBar style="auto" />
</View>*/}
export default function App() {
    return (
        <>
            <StatusBar style="auto" />
            <Home />
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
