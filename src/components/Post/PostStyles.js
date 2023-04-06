import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  title: {
    marginTop: 8,
    fontFamily: "Roboto-Medium",
    fontSize: 16,
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",

    marginTop: 8,
  },
  infoWrapper: {
    flexDirection: "row",
    gap: 6,
  },
  positioning: {
    flexDirection: "row",
    gap: 24,
  },
  counts: {
    fontSize: 16,
  },
  locationText: {
    fontSize: 16,
    textDecorationLine: "underline",
  },
});

export const {
  title,
  infoContainer,
  infoWrapper,
  positioning,
  counts,
  locationText,
} = styles;
