import * as Location from 'expo-location';
import RoutesStack from './src/RoutesStack';
import { useFonts } from 'expo-font';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import { useEffect } from 'react';

export default function App() {
    const [fontsLoaded] = useFonts({
        'Roboto-Bold': require('./src/img/fonts/Roboto/Roboto-Bold.ttf'),
        'Roboto-Medium': require('./src/img/fonts/Roboto/Roboto-Medium.ttf'),
        'Roboto-Regular': require('./src/img/fonts/Roboto/Roboto-Regular.ttf'),
    });

    useEffect(() => {
        (async () => {
            const { status } =
                await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }
        })();
    }, []);

    if (!fontsLoaded) {
        return null;
    }

    return (
        <Provider store={store}>
            <RoutesStack />
        </Provider>
    );
}
