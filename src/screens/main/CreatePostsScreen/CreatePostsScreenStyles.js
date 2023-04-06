import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    paddingBottom: 34,
    paddingTop: 120,
    paddingHorizontal: 16,
  },
  contentWrapper: {
    flexDirection: "column",
    gap: 32,
  },
  cameraWrapper: { borderRadius: 8, overflow: "hidden" },
  imageWrapper: {
    position: "relative",
    height: 240,

    justifyContent: "center",
    alignItems: "center",

    borderRadius: 8,
  },
  image: {
    width: "100%",
    height: 240,

    borderRadius: 8,
  },
  addImageBtn: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    padding: 18,

    borderRadius: 30,
    backgroundColor: "#fff",
  },
  imageText: {
    paddingTop: 8,

    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
  },
  inputsWrapper: {
    flexDirection: "column",
    gap: 16,
  },
  label: {
    position: "relative",
  },
  input: {
    paddingVertical: 11,

    fontSize: 16,
    lineHeight: 19,
    color: "#212121",

    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
  },
  inputIcon: {
    position: "absolute",
    bottom: 13,
    left: 0,
  },
  locationInput: {
    paddingLeft: 28,
  },
  trashIconWrapper: {
    alignItems: "center",
  },
  trashIconBtn: {
    paddingHorizontal: 23,
    paddingVertical: 8,

    backgroundColor: "#F6F6F6",
    borderRadius: 20,
  },
});

export const {
  container,
  contentWrapper,
  cameraWrapper,
  imageWrapper,
  image,
  addImageBtn,
  imageText,
  inputsWrapper,
  label,
  input,
  locationInput,
  inputIcon,
  trashIconWrapper,
  trashIconBtn,
} = styles;
