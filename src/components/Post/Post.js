import MessageIcon from '../../img/svg/MessageIcon';
import ThumbsUpIcon from '../../img/svg/ThumbsUpIcon';
import MapIcon from '../../img/svg/MapIcon';
import PostImage from '../PostImage/PostImage';
import { View, TouchableOpacity, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { addLike } from '../../redux/posts/postsOperations';
import { setCurrentPostId } from '../../redux/posts/postsSlice';

import {
    title,
    infoContainer,
    infoWrapper,
    positioning,
    counts,
    locationText,
} from './PostStyles';

const Post = ({ post, commentsCount, navigation, route }) => {
    const { id, image, name, likesCount, location } = post;
    const dispatch = useDispatch();

    const messagePressHandler = () => {
        dispatch(setCurrentPostId(id));
        navigation.navigate('CommentsScreen');
    };

    const mapPressHandler = () => {
        navigation.navigate('MapScreen', location.coordinates);
    };

    return (
        <View>
            <PostImage photo={image} />
            <Text style={title}>{name}</Text>
            <View style={infoContainer}>
                <View style={positioning}>
                    <View style={infoWrapper}>
                        <TouchableOpacity onPress={messagePressHandler}>
                            <MessageIcon commentsCount={commentsCount} />
                        </TouchableOpacity>
                        <Text
                            style={[
                                counts,
                                !commentsCount && { color: '#BDBDBD' },
                            ]}
                        >
                            {commentsCount}
                        </Text>
                    </View>
                    {route.name === 'ProfileScreen' && (
                        <View style={infoWrapper}>
                            <TouchableOpacity
                                onPress={() => dispatch(addLike(id))}
                            >
                                <ThumbsUpIcon likesCount={likesCount} />
                            </TouchableOpacity>
                            <Text
                                style={[
                                    counts,
                                    !likesCount && { color: '#BDBDBD' },
                                ]}
                            >
                                {likesCount}
                            </Text>
                        </View>
                    )}
                </View>
                <View style={infoWrapper}>
                    <TouchableOpacity onPress={() => mapPressHandler(id)}>
                        <MapIcon />
                    </TouchableOpacity>
                    <Text style={locationText}>
                        {route.name === 'ProfileScreen'
                            ? `${location.country}`
                            : `${location.region}, ${location.country}`}
                    </Text>
                </View>
            </View>
        </View>
    );
};

export default Post;
