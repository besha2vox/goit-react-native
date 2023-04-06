import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: "row",
    justifyContent: "center",
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
  crossButton: {
    marginHorizontal: 21,
    paddingHorizontal: 29,
    paddingVertical: 14,

    backgroundColor: "#FF6C00",
    borderRadius: 20,
  },
});

export const { tabBar, button, crossButton } = styles;
