import * as Location from 'expo-location';
import MainView from '../../../module/MainView/MainView';
import MapIcon from '../../../img/svg/MapIcon';
import TrashIcon from '../../../img/svg/TrashIcon';
import CameraActiveBtn from '../../../components/CameraActiveBtn/CameraActiveBtn';
import Button from '../../../components/Button/Button';
import uuid from 'react-native-uuid';
import { View, Image, TouchableOpacity, Text, TextInput } from 'react-native';
import { useState, useEffect } from 'react';
import { initialValues } from './initialsValues';
import { useDispatch, useSelector } from 'react-redux';
import { selectUID } from '../../../redux/auth/authSelectors';
import { addPost } from '../../../redux/posts/postsOperations';
import { Camera } from 'expo-camera';

import {
    container,
    contentWrapper,
    cameraWrapper,
    imageWrapper,
    image,
    imageText,
    inputsWrapper,
    label,
    input,
    inputIcon,
    locationInput,
    trashIconWrapper,
    trashIconBtn,
} from './CreatePostsScreenStyles';

const CreatePostsScreen = ({ route, navigation }) => {
    const dispatch = useDispatch();
    const uid = useSelector(selectUID);
    const [post, setPost] = useState(initialValues);
    const activeBtn = Boolean(post.image && post.name && post.location);
    const [camera, setCamera] = useState(null);

    useEffect(() => {
        const getLocation = async () => {
            try {
                const location = await Location.getCurrentPositionAsync({});
                const coordinates = {
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude,
                };
                const locationRegion = await Location.reverseGeocodeAsync(
                    coordinates
                );
                const region = locationRegion[0].region;
                const country = locationRegion[0].country;

                setPost((state) => ({
                    ...state,
                    location: { coordinates, region, country },
                }));
            } catch (error) {
                console.log('error: ', error, message);
            }
        };

        getLocation();
    }, []);

    const takePhoto = async () => {
        const photo = await camera.takePictureAsync();

        setPost((state) => ({
            ...state,
            image: photo.uri,
        }));
    };

    const onChangePhoto = () => {
        setPost((state) => ({ ...state, image: '', location: null }));
    };

    const onInputChange = (value) => {
        setPost((state) => ({ ...state, ...value }));
    };

    const formSubmitHandler = () => {
        const newPost = {
            ...post,
            id: uuid.v4(8),
        };
        dispatch(addPost({ uid, newPost }));
        navigation.navigate('Home');
    };

    return (
        <MainView route={route} navigation={navigation}>
            <View style={container}>
                <View style={contentWrapper}>
                    <View>
                        {!post.image && (
                            <View style={cameraWrapper}>
                                <Camera ref={setCamera} style={imageWrapper}>
                                    <CameraActiveBtn
                                        pressHandler={takePhoto}
                                        isActive={post.image}
                                    />
                                </Camera>
                            </View>
                        )}
                        {post.image && (
                            <View style={imageWrapper}>
                                <Image
                                    style={image}
                                    source={{ uri: post.image }}
                                />
                                <View style={{ position: 'absolute' }}>
                                    <CameraActiveBtn
                                        pressHandler={onChangePhoto}
                                        isActive={post.image}
                                    />
                                </View>
                            </View>
                        )}
                        <Text style={imageText}>
                            {post.image ? 'Редагувати фото' : 'Завантажте фото'}
                        </Text>
                    </View>
                    <View style={inputsWrapper}>
                        <View style={label}>
                            <TextInput
                                style={input}
                                placeholder="Назва..."
                                placeholderTextColor="#BDBDBD"
                                value={post.name}
                                onChangeText={(value) =>
                                    onInputChange({ name: value })
                                }
                            />
                        </View>
                        <View style={label}>
                            <TextInput
                                style={[input, locationInput]}
                                placeholder="Локація..."
                                placeholderTextColor="#BDBDBD"
                                value={
                                    post.location
                                        ? `${post.location.region}, ${post.location.country}`
                                        : ''
                                }
                                editable={false}
                            />
                            <TouchableOpacity
                                style={inputIcon}
                                onPress={() => navigation.navigate('MapScreen')}
                            >
                                <MapIcon />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Button
                        title="Опублікувати"
                        pressHandler={formSubmitHandler}
                        activeBtn={activeBtn}
                    />
                </View>
                <View style={trashIconWrapper}>
                    <TouchableOpacity
                        style={trashIconBtn}
                        onPress={() => navigation.navigate('Home')}
                    >
                        <TrashIcon />
                    </TouchableOpacity>
                </View>
            </View>
        </MainView>
    );
};

export default CreatePostsScreen;
