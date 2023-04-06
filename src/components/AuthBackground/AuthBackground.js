import { useState, useEffect } from "react";

import {
  TouchableWithoutFeedback,
  View,
  ImageBackground,
  Keyboard,
} from "react-native";
import { bgImage, container } from "./AuthBackgroundStyles";

const AuthBackground = ({ children }) => {
  const [isKeybordShown, setIsKeybordShown] = useState(false);

  useEffect(() => {
    const keyboardDidShowSubscription = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setIsKeybordShown(true);
      }
    );
    const keyboardDidHideSubscription = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setIsKeybordShown(false);
      }
    );

    return () => {
      keyboardDidShowSubscription.remove();
      keyboardDidHideSubscription.remove();
    };
  }, []);

  return (
    <TouchableWithoutFeedback
      style={[isKeybordShown && { marginBottom: -200 }]}
      onPress={Keyboard.dismiss}
    >
      <>
        <ImageBackground
          source={require("../../img/authBackground.jpg")}
          style={[bgImage, isKeybordShown && { marginBottom: -300 }]}
        />
        <View style={[container, isKeybordShown && { marginBottom: -200 }]}>
          {children}
        </View>
      </>
    </TouchableWithoutFeedback>
  );
};

export default AuthBackground;