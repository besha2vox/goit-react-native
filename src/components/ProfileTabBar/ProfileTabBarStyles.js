import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  tabBar: {
    position: "absolute",
    bottom: 0,
    left: -16,
    right: -16,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 9,
    paddingBottom: 34,

    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "rgba(0, 0, 0, 0.2)",
  },
  button: {
    paddingHorizontal: 18,
    paddingVertical: 8,

    borderRadius: 20,
  },
  userButton: {
    marginHorizontal: 21,
    paddingHorizontal: 23,
    paddingVertical: 8,

    backgroundColor: "#FF6C00",
    borderRadius: 20,
  },
});

export const { tabBar, button, userButton } = styles;
