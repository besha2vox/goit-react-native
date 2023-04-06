import GridIcon from "../../img/svg/GridIcon";
import CrossIcon from "../../img/svg/CrossIcon";
import UserIcon from "../../img/svg/UserIcon";
import { View, TouchableOpacity } from "react-native";

import { tabBar, button, userButton } from "./ProfileTabBarStyles";

const ProfileTabBar = ({ navigation }) => {
  return (
    <View style={tabBar}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Home")}
        style={button}
      >
        <GridIcon />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("ProfileScreen")}
        style={userButton}
      >
        <UserIcon fill="#fff" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("CreatePostsScreen")}
        style={button}
      >
        <CrossIcon fill="#000" />
      </TouchableOpacity>
    </View>
  );
};

export default ProfileTabBar;
