import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 70,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,

    paddingBottom: 16,

    backgroundColor: "#fff",
  },
  inputWrapper: {
    position: "relative",
  },
  input: {
    maxHeight: 50,
    padding: 16,

    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
    borderWidth: 1,
    borderRadius: 100,
  },
  pushBtn: {
    position: "absolute",
    bottom: 8,
    right: 8,
    justifyContent: "center",
    alignItems: "center",
    maxWidth: 34,
    maxHeight: 34,
    paddingHorizontal: 16,
    paddingVertical: 10,

    backgroundColor: "#FF6C00",
    borderRadius: 20,
  },
});

export const { container, footer, inputWrapper, input, pushBtn } = styles;
