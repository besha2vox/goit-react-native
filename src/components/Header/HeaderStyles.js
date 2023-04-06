import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    minWidth: 88,
    paddingTop: 55,
    paddingBottom: 11,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
    borderBottomColor: "rgba(0, 0, 0, 0.2)",
    borderBottomWidth: 1,

    zIndex: 1,
  },
  screenTitle: {
    fontFamily: "Roboto-Medium",
    fontSize: 17,
    lineHeight: 22,
  },
  icon: {
    minWidth: 24,
  },
});

export const { container, screenTitle, icon } = styles;
