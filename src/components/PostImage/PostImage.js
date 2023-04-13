import { Image } from 'react-native';
import { image } from './PostImageStyles';

const PostImage = ({ photo }) => {
    return <Image source={{ uri: photo }} style={image} />;
};

export default PostImage;
