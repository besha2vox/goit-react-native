import { Image } from "react-native";
import { image } from "./PostImageStyles";

const PostImage = ({ source }) => {
  return <Image source={{ uri: source.uri }} style={image} />;
};

export default PostImage;
