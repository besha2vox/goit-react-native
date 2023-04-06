import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  avatarWrapper: {
    position: "absolute",
    left: 0,
    right: 0,
    transform: [{ translateY: -60 }],
    justifyContent: "center",
    alignItems: "center",
  },
  avatarBG: {
    position: "relative",

    minWidth: 120,
    minHeight: 120,

    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  avatar: {
    borderRadius: 16,
  },
  avatarAddBtn: {
    position: "absolute",
    bottom: 14,
    right: -13,

    flex: 1,
    justifyContent: "center",
    alignItems: "center",

    width: 25,
    height: 25,

    backgroundColor: "#fff",
    borderWidth: 1,
    borderRadius: 13,
  },
});

export const { avatarWrapper, avatarBG, avatar, avatarAddBtn } = styles;
