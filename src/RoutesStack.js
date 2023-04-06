import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import RegistrationScreen from "./screens/auth/RegistrationScreen/RegistrationScreen";
import LoginScreen from "./screens/auth/LoginScreen/LoginScreen";
import HomeScreen from "./screens/main/HomeScreen/HomeScreen";
import CreatePostsScreen from "./screens/main/CreatePostsScreen/CreatePostsScreen";
import ProfileScreen from "./screens/main/ProfileScreen/ProfileScreen";
import CommentsScreen from "./screens/main/CommentsScreen/CommentsScreen";
import MapScreen from "./screens/main/MapScreen/MapScreen";

const MainStack = createStackNavigator();

const RoutesStack = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator screenOptions={{ headerShown: false }}>
        <MainStack.Screen name="SignUp" component={RegistrationScreen} />
        <MainStack.Screen name="LogIn" component={LoginScreen} />
        <MainStack.Screen name="Home" component={HomeScreen} />
        <MainStack.Screen
          name="CreatePostsScreen"
          component={CreatePostsScreen}
        />
        <MainStack.Screen name="ProfileScreen" component={ProfileScreen} />
        <MainStack.Screen name="CommentsScreen" component={CommentsScreen} />
        <MainStack.Screen name="MapScreen" component={MapScreen} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default RoutesStack;
