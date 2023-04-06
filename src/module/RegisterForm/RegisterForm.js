import Avatar from "../../components/Avatar/Avatar";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import {
  TouchableWithoutFeedback,
  View,
  Text,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import { useState } from "react";
import { initialCredentials } from "./initialCredentials";

import {
  formContainer,
  formTitle,
  link,
  navBtn,
  loginText,
} from "./RegisterFormStyles";

const RegisterForm = ({ onFormSubmit, navigation }) => {
  const [isAvatarShown, setIsAvatarShown] = useState(false);
  const [userCredentials, setUserCredentials] = useState(initialCredentials);

  const avatarToggle = () => {
    setIsAvatarShown((state) => !state);
  };

  const onInputChange = (value) => {
    setUserCredentials((state) => ({ ...state, ...value }));
  };

  const formSubmitHandler = () => {
    Keyboard.dismiss();

    if (
      !userCredentials.email ||
      !userCredentials.password ||
      !userCredentials.name
    ) {
      alert("All fields must be filled.");
      return;
    }

    if (userCredentials.name) setIsAvatarShown(false);

    onFormSubmit(userCredentials);
    setUserCredentials(initialCredentials);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={formContainer}>
        <Text style={formTitle}>Реєстрація</Text>
        <Avatar isAvatarShown={isAvatarShown} avatarToggle={avatarToggle} />
        <Input
          name="name"
          onInputChange={onInputChange}
          value={userCredentials.name}
          inputMode="text"
          placeholder="Логін"
        />
        <Input
          onInputChange={onInputChange}
          name="email"
          value={userCredentials.email}
          inputMode="email"
          keyboardType="email-address"
          placeholder="Адреса електронної пошти"
        />
        <Input
          onInputChange={onInputChange}
          name="password"
          value={userCredentials.password}
          placeholder="Пароль"
        />
        <Button
          title="Зареєструватись"
          pressHandler={formSubmitHandler}
          activeBtn={true}
        />
        <View style={navBtn}>
          <Text style={loginText}>Вже є акаунт? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("LogIn")}>
            <Text style={link}>Увійти</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default RegisterForm;
