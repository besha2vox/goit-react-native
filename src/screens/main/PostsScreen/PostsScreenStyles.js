import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  avatarWrapper: {
    maxWidth: 60,
    maxHeight: 60,

    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  avatar: {
    maxWidth: 60,
    maxHeight: 60,

    borderRadius: 16,
  },
  userName: {
    fontFamily: "Roboto-Bold",
    fontSize: 13,
    lineHeight: 15,
  },
  userEmail: {
    fontSize: 11,
    lineHeight: 13,
    color: "rgba(33, 33, 33, 0.8)",
  },
});

export const { container, avatarWrapper, avatar, userName, userEmail } = styles;
