import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  formContainer: {
    paddingHorizontal: 16,
    paddingTop: 32,
    paddingBottom: 144,

    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  formTitle: {
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    letterSpacing: 0.16,
  },
  navBtn: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
  },
  loginText: {
    fontSize: 16,
    color: "#1B4371",
    textAlign: "center",
  },
  link: {
    fontSize: 16,
    color: "#1B4371",
  },
});

export const { formContainer, formTitle, navBtn, loginText, link } = styles;
