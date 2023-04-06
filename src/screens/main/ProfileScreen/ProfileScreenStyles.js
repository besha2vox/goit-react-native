import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  scrollContainer: {
    paddingTop: 147,
  },
  container: {
    position: "relative",
    flexDirection: "column",
    gap: 32,
    paddingTop: 92,
    paddingBottom: 115,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  avatarWrapper: {
    position: "absolute",
    left: 0,
    right: 0,
    height: "100%",
  },
  logOutBtn: {
    position: "absolute",
    right: 16,
    top: 22,
  },
  userName: {
    textAlign: "center",
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    lineHeight: 35,
  },
});

export const {
  scrollContainer,
  container,
  avatarWrapper,
  logOutBtn,
  userName,
} = styles;
