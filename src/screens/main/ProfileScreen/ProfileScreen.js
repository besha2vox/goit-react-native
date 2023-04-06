import Post from "../../../components/Post/Post";
import ProfileTabBar from "../../../components/ProfileTabBar/ProfileTabBar";
import Avatar from "../../../components/Avatar/Avatar";
import LogOutIcon from "../../../img/svg/LogOutIcon";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectPosts } from "../../../redux/posts/postsSelectors";
import { selectUser } from "../../../redux/auth/authSelectors";
import { logOutUser } from "../../../redux/auth/authSlice";
import {
  ImageBackground,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from "react-native";

import {
  scrollContainer,
  container,
  avatarWrapper,
  logOutBtn,
  userName,
} from "./ProfileScreenStyles";

const ProfileScreen = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const { posts } = useSelector(selectPosts);
  const [isAvatarShown, setIsAvatarShown] = useState(true);

  if (!user) return;

  const logoutBtnPressHandler = () => {
    navigation.navigate("SignUp");
    dispatch(logOutUser());
  };

  const avatarToggle = () => {
    setIsAvatarShown((state) => !state);
  };

  return (
    <>
      <View
        style={{ position: "absolute", top: 0, bottom: 0, left: 0, right: 0 }}
      >
        <ImageBackground
          source={require("../../../img/authBackground.jpg")}
          style={{
            flex: 1,
          }}
        />
      </View>
      <ScrollView
        contentContainerStyle={[
          scrollContainer,
          posts.length < 2 && { flex: 1 },
        ]}
      >
        <View style={[container, posts.length < 2 && { flex: 1 }]}>
          <View style={avatarWrapper}>
            <Avatar isAvatarShown={isAvatarShown} avatarToggle={avatarToggle} />
            <TouchableOpacity
              onPress={() => logoutBtnPressHandler()}
              style={logOutBtn}
            >
              <LogOutIcon />
            </TouchableOpacity>
          </View>
          <Text style={userName}>{user.name}</Text>
          {posts.map((post) => (
            <Post
              key={post.id}
              post={post}
              commentsCount={post.comments.length}
              navigation={navigation}
              route={route}
            />
          ))}
          <ProfileTabBar navigation={navigation} />
        </View>
      </ScrollView>
    </>
  );
};

export default ProfileScreen;
