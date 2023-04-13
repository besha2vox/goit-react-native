import RegistrationScreen from './screens/auth/RegistrationScreen/RegistrationScreen';
import LoginScreen from './screens/auth/LoginScreen/LoginScreen';
import HomeScreen from './screens/main/HomeScreen/HomeScreen';
import CreatePostsScreen from './screens/main/CreatePostsScreen/CreatePostsScreen';
import ProfileScreen from './screens/main/ProfileScreen/ProfileScreen';
import CommentsScreen from './screens/main/CommentsScreen/CommentsScreen';
import MapScreen from './screens/main/MapScreen/MapScreen';
import { createStackNavigator } from '@react-navigation/stack';

const MainStack = createStackNavigator();

const useRoute = (stateChange) => {
    if (!stateChange) {
        return (
            <MainStack.Navigator
                screenOptions={{ headerShown: false }}
                initialRouteName="LogIn"
            >
                <MainStack.Screen
                    name="SignUp"
                    component={RegistrationScreen}
                />
                <MainStack.Screen name="LogIn" component={LoginScreen} />
            </MainStack.Navigator>
        );
    }

    return (
        <MainStack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName="Home"
        >
            <MainStack.Screen name="Home" component={HomeScreen} />
            <MainStack.Screen
                name="CreatePostsScreen"
                component={CreatePostsScreen}
            />
            <MainStack.Screen name="ProfileScreen" component={ProfileScreen} />
            <MainStack.Screen
                name="CommentsScreen"
                component={CommentsScreen}
            />
            <MainStack.Screen name="MapScreen" component={MapScreen} />
        </MainStack.Navigator>
    );
};

export default useRoute;
