import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { useState } from "react";
import { onInputFocus } from "../../helpers/inputFocusFunc";

import {
  inputWrapper,
  input,
  showPassBtn,
  showPassBtnTxt,
} from "./InputStyles";

const Input = ({ onInputChange, name, ...restProps }) => {
  const [focusedInputName, setFocusedInputName] = useState("");
  const [isPassShown, setIsPassShown] = useState(false);
  const [inputBtnText, setInputBtnText] = useState("Показати");

  const onShowBtnPress = () => {
    setIsPassShown((state) => !state);
    setInputBtnText((state) => {
      if (state === "Приховати") return "Показати";
      if (state === "Показати") return "Приховати";
    });
  };

  return (
    <View style={inputWrapper}>
      <TextInput
        onChangeText={(value) => onInputChange({ [name]: value })}
        style={[input, focusedInputName === name && onInputFocus()]}
        placeholderTextColor="#BDBDBD"
        secureTextEntry={name === "password" && !isPassShown}
        onFocus={() => setFocusedInputName(name)}
        onBlur={() => setFocusedInputName("")}
        {...restProps}
      />
      {name === "password" && (
        <TouchableOpacity onPress={() => onShowBtnPress()} style={showPassBtn}>
          <Text style={showPassBtnTxt}>{inputBtnText}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Input;
