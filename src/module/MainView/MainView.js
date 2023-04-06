import MainHeader from "../../components/Header/Header";
import { View } from "react-native";
import { useState, useEffect } from "react";

import { container } from "./MainViewStyles";

const MainView = ({ children, route, navigation }) => {
  const [title, setTitle] = useState("");

  useEffect(() => {
    const initTitle = () => {
      switch (route.name) {
        case "PostsScreen":
          return "Публікації";
        case "CreatePostsScreen":
          return "Створити публікацію";
        case "ProfileScreen":
          return "Профіль";
        case "MapScreen":
          return "Локація";
        case "CommentsScreen":
          return "Коментарі";
      }
    };

    setTitle(initTitle());
  }, [route, setTitle]);

  return (
    <View style={container}>
      {route.name !== "ProfileScreen" && (
        <MainHeader title={title} route={route} navigation={navigation} />
      )}
      {children}
    </View>
  );
};

export default MainView;
