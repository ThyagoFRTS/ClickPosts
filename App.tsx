import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/Home';
import { Provider } from 'react-redux'
import store from './src/storage';

{/*<View style={styles.container}>
    <Text>Open up App.tsx to start working on your app!</Text>
    <StatusBar style="auto" />
</View>*/}
export default function App() {
    return (
        <Provider store={store}>
            <Home />
        </Provider>

    );
}
