import MainView from "../../../module/MainView/MainView";
import Post from "../../../components/Post/Post";
import { View, ScrollView, Text, Image } from "react-native";
import { useSelector } from "react-redux";
import { selectUser } from "../../../redux/auth/authSelectors";
import { selectPosts } from "../../../redux/posts/postsSelectors";
import {
  container,
  avatarWrapper,
  avatar,
  userName,
  userEmail,
} from "./PostsScreenStyles";

const PostsScreen = ({ route, navigation }) => {
  const user = useSelector(selectUser);
  const { posts } = useSelector(selectPosts);

  if (!user) return;

  return (
    <MainView route={route} navigation={navigation}>
      <ScrollView
        contentContainerStyle={{
          gap: 32,
          paddingBottom: 10,
          paddingTop: 120,
          paddingHorizontal: 16,
        }}
      >
        <View style={container}>
          <View style={avatarWrapper}>
            <Image
              style={avatar}
              source={require("../../../img/userImage.jpg")}
            />
          </View>
          <View>
            <Text style={userName}>{user.name}</Text>
            <Text style={userEmail}>{user.email}</Text>
          </View>
        </View>
        {posts.map((post) => (
          <Post
            key={post.id}
            post={post}
            commentsCount={post.comments.length}
            navigation={navigation}
            route={route}
          />
        ))}
      </ScrollView>
    </MainView>
  );
};

export default PostsScreen;
