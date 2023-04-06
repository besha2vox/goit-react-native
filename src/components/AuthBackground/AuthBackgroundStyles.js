import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  bgImage: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  container: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
});

export const { bgImage, container } = styles;
