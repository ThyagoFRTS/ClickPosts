import { Provider } from 'react-redux'
import store from './src/storage';
import { useFonts } from 'expo-font'
import LoadingIndicator from './src/components/LoadingIndicator';
import { SafeAreaView } from 'react-native-safe-area-context';
import Routes from './src/routes/Routes';
{/*<View style={styles.container}>
    <Text>Open up App.tsx to start working on your app!</Text>
    <StatusBar style="auto" />
</View>*/}
export default function App() {
    const [fontsLoaded] = useFonts({
        'Handlee': require('./assets/fonts/Handlee-Regular.ttf'),
        'Exo2': require('./assets/fonts/Exo2-VariableFont_wght.ttf'),
    })
    if (!fontsLoaded) {
        return <LoadingIndicator />
    }
    return (
        <Provider store={store}> 
            <SafeAreaView style={{flex: 1}}>
                <Routes/>
            </SafeAreaView>
        </Provider>

    );
}
