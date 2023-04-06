import PostsTabBar from "../../../components/PostsTabBar/PostsTabBar";
import PostsScreen from "../PostsScreen/PostsScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const MainTab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <MainTab.Navigator
      tabBar={(props) => <PostsTabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="PostsScreen"
    >
      <MainTab.Screen
        name="PostsScreen"
        component={PostsScreen}
        options={{
          title: "Публікації",
          headerShown: false,
        }}
      />
    </MainTab.Navigator>
  );
};

export default HomeScreen;
