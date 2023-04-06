import * as Location from "expo-location";
import MainView from "../../../module/MainView/MainView";
import MapIcon from "../../../img/svg/MapIcon";
import TrashIcon from "../../../img/svg/TrashIcon";
import CameraActiveBtn from "../../../components/CameraActiveBtn/CameraActiveBtn";
import Button from "../../../components/Button/Button";
import { View, Image, TouchableOpacity, Text, TextInput } from "react-native";
import { useState } from "react";
import { initialValues } from "./initialsValues";
import { useDispatch } from "react-redux";
import { addPost } from "../../../redux/posts/postsSlice";
import { getRandomInt } from "../../../helpers/randomNumberFunc";
import { Camera } from "expo-camera";

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
} from "./CreatePostsScreenStyles";

const CreatePostsScreen = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const [post, setPost] = useState(initialValues);
  const activeBtn = Boolean(post.image && post.name && post.location);
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState("");

  const takePhoto = async () => {
    const photo = await camera.takePictureAsync();
    const location = await Location.getCurrentPositionAsync({});
    const coordinates = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    };
    const locationRegion = await Location.reverseGeocodeAsync(coordinates);
    const region = locationRegion[0].region;
    const country = locationRegion[0].country;

    setPhoto(photo.uri);
    setPost((state) => ({
      ...state,
      image: { uri: photo.uri, coordinates, region, country },
    }));
  };

  const onChangePhoto = () => {
    setPhoto("");
    setPost((state) => ({ ...state, image: "" }));
  };

  const onInputChange = (value) => {
    setPost((state) => ({ ...state, ...value }));
  };

  const formSubmitHandler = () => {
    const newPost = {
      ...post,
      id: getRandomInt(5, 10000000),
    };

    dispatch(addPost(newPost));
    navigation.navigate("Home");
  };

  return (
    <MainView route={route} navigation={navigation}>
      <View style={container}>
        <View style={contentWrapper}>
          <View>
            {!photo && (
              <View style={cameraWrapper}>
                <Camera ref={setCamera} style={imageWrapper}>
                  <CameraActiveBtn pressHandler={takePhoto} isActive={photo} />
                </Camera>
              </View>
            )}
            {photo && (
              <View style={imageWrapper}>
                <Image style={image} source={{ uri: photo }} />
                <View style={{ position: "absolute" }}>
                  <CameraActiveBtn
                    pressHandler={onChangePhoto}
                    isActive={photo}
                  />
                </View>
              </View>
            )}
            <Text style={imageText}>
              {photo ? "Редагувати фото" : "Завантажте фото"}
            </Text>
          </View>
          <View style={inputsWrapper}>
            <View style={label}>
              <TextInput
                style={input}
                placeholder="Назва..."
                placeholderTextColor="#BDBDBD"
                value={post.name}
                onChangeText={(value) => onInputChange({ name: value })}
              />
            </View>
            <View style={label}>
              <TextInput
                style={[input, locationInput]}
                placeholder="Локація..."
                placeholderTextColor="#BDBDBD"
                value={post.location}
                onChangeText={(value) => onInputChange({ location: value })}
              />
              <TouchableOpacity
                style={inputIcon}
                onPress={() => navigation.navigate("MapScreen")}
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
            onPress={() => navigation.navigate("Home")}
          >
            <TrashIcon />
          </TouchableOpacity>
        </View>
      </View>
    </MainView>
  );
};

export default CreatePostsScreen;
