import MainView from "../../../module/MainView/MainView";
import UpArrowIcon from "../../../img/svg/UpArrowIcon";
import PostImage from "../../../components/PostImage/PostImage";
import Comment from "../../../components/Comment/Comment";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectPosts,
  selectCurrentPostId,
} from "../../../redux/posts/postsSelectors";
import { addComment } from "../../../redux/posts/postsSlice";
import { getRandomInt } from "../../../helpers/randomNumberFunc";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import {
  container,
  footer,
  inputWrapper,
  input,
  pushBtn,
} from "./CommentsScreenStyles";

const CommentsScreen = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const currentPostId = useSelector(selectCurrentPostId);
  const { posts } = useSelector(selectPosts);
  const currentPost = posts.find((post) => post.id === currentPostId);
  const [message, setMessage] = useState("");

  const pushBtnPressHandler = () => {
    if (!message) {
      alert("Ви не ввели коментар.");
      return;
    }

    const newComment = {
      id: getRandomInt(10, 10000000),
      author: "user",
      addedOn: Date.now(),
      message,
    };

    dispatch(addComment({ id: currentPostId, comment: newComment }));
    setMessage("");
  };

  if (!currentPost) return;

  const areComments = Boolean(currentPost.comments.length);

  const elements = currentPost.comments.map((comment) => (
    <Comment key={comment.id} comment={comment} />
  ));

  return (
    <MainView route={route} navigation={navigation}>
      <ScrollView
        style={container}
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
          gap: 32,
          paddingBottom: 70,
          paddingTop: 120,
          paddingHorizontal: 16,
        }}
      >
        <PostImage source={currentPost.image} />
        {!areComments && (
          <Text style={{ color: "#BDBDBD" }}>
            Під цим постом поки що немає коментарів.
          </Text>
        )}
        {areComments && elements}
      </ScrollView>
      <View style={footer}>
        <View style={inputWrapper}>
          <TextInput
            onChangeText={(value) => setMessage(value)}
            style={input}
            placeholder="Коментувати..."
            placeholderTextColor="#BDBDBD"
            value={message}
          />
          <TouchableOpacity onPress={pushBtnPressHandler} style={pushBtn}>
            <UpArrowIcon />
          </TouchableOpacity>
        </View>
      </View>
    </MainView>
  );
};

export default CommentsScreen;
