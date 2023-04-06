import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  inputWrapper: {
    marginTop: 16,
  },
  input: {
    position: "relative",

    paddingHorizontal: 16,
    paddingVertical: 10,

    fontSize: 16,
    lineHeight: 19,

    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
  },
  showPassBtn: {
    position: "absolute",
    top: 10,
    right: 16,
  },
  showPassBtnTxt: {
    fontSize: 16,
    color: "#1B4371",
  },
});

export const { inputWrapper, input, showPassBtn, showPassBtnTxt } = styles;
