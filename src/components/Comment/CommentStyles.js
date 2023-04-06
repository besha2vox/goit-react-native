import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 16,
  },
  avatar: {
    width: 28,
    height: 28,
    borderRadius: 14,
  },
  messageWrapper: {
    minWidth: 320,
    padding: 16,
    backgroundColor: "rgba(0, 0, 0, 0.03)",
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    borderTopRightRadius: 6,
  },
  message: {
    maxWidth: 300,
    fontSize: 13,
  },
  date: {
    paddingTop: 8,

    fontSize: 10,
    color: "#BDBDBD",
    textAlign: "right",
  },
});

export const { container, avatar, messageWrapper, message, date } = styles;
