import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  formContainer: {
    paddingHorizontal: 16,
    paddingTop: 92,
    paddingBottom: 78,

    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
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

export const { formContainer, formTitle, link, loginText, navBtn } = styles;
