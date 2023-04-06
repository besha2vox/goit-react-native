import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useState } from "react";
import { initialCredentials } from "./initialCredentials";

import {
  formContainer,
  formTitle,
  navBtn,
  loginText,
  link,
} from "./LoginFormStyles";

const LoginForm = ({ onFormSubmit, navigation }) => {
  const [userCredentials, setUserCredentials] = useState(initialCredentials);

  const onInputChange = (value) => {
    setUserCredentials((state) => ({ ...state, ...value }));
  };

  const formSubmitHandler = () => {
    Keyboard.dismiss();

    if (!userCredentials.email || !userCredentials.password) {
      alert("All fields must be filled.");
      return;
    }

    onFormSubmit(userCredentials);
    setUserCredentials(initialCredentials);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={formContainer}>
        <Text style={formTitle}>Увійти</Text>
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
          title="Увійти"
          pressHandler={formSubmitHandler}
          activeBtn={true}
        />
        <View style={navBtn}>
          <Text style={loginText}>Немає акаунту? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <Text style={link}>Зареєструватись</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default LoginForm;
