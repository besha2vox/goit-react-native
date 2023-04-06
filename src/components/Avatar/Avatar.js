import CrossIcon from "../../img/svg/CrossIcon";
import { View, Image, TouchableOpacity } from "react-native";

import { avatarWrapper, avatarBG, avatar, avatarAddBtn } from "./AvatarStyles";

const Avatar = ({ isAvatarShown, avatarToggle }) => {
  return (
    <View style={avatarWrapper}>
      <View style={avatarBG}>
        {isAvatarShown && (
          <Image style={avatar} source={require("../../img/userImage.jpg")} />
        )}
        <TouchableOpacity
          onPress={() => avatarToggle()}
          style={{
            ...avatarAddBtn,
            borderColor: isAvatarShown ? "#E8E8E8" : "#FF6C00",
            transform: [{ rotate: isAvatarShown ? "45deg" : "0deg" }],
          }}
        >
          <CrossIcon fill={isAvatarShown ? "#BDBDBD" : "#FF6C00"} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Avatar;
