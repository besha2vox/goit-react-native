import GridIcon from "../../img/svg/GridIcon";
import CrossIcon from "../../img/svg/CrossIcon";
import UserIcon from "../../img/svg/UserIcon";
import { View, TouchableOpacity } from "react-native";

import { tabBar, button, crossButton } from "./PostsTabBarStyles";

const PostsTabBar = ({ navigation }) => {
  return (
    <View style={tabBar}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Home")}
        style={button}
      >
        <GridIcon />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("CreatePostsScreen")}
        style={crossButton}
      >
        <CrossIcon fill="#fff" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("ProfileScreen")}
        style={button}
      >
        <UserIcon />
      </TouchableOpacity>
    </View>
  );
};

export default PostsTabBar;
