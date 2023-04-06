import { View, Text, Image } from "react-native";

import {
  container,
  avatar,
  messageWrapper,
  message,
  date,
} from "./CommentStyles";

const Comment = ({ comment }) => {
  const isUserAuthor = comment.author === "user" ? true : false;

  return (
    <View style={[container, isUserAuthor && { flexDirection: "row-reverse" }]}>
      <Image
        source={
          isUserAuthor
            ? require("../../img/userImage.jpg")
            : require("../../img/guestAvatar.jpg")
        }
        style={avatar}
      />
      <View
        style={[
          messageWrapper,
          isUserAuthor && { borderTopRightRadius: 0, borderTopLeftRadius: 6 },
        ]}
      >
        <Text style={message}>{comment.message}</Text>
        <Text style={[date, isUserAuthor && { textAlign: "left" }]}>
          09 червня, 2020 | 08:40
        </Text>
      </View>
    </View>
  );
};

export default Comment;
