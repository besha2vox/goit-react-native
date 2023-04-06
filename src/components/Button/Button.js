import { Text, TouchableOpacity } from "react-native";

import { submitBtn, submitBtnText } from "./ButtonStyles";

const Button = ({ title, pressHandler, activeBtn }) => {
  return (
    <TouchableOpacity
      onPress={pressHandler}
      style={[
        submitBtn,
        !activeBtn && {
          pointerEvents: "none",
          backgroundColor: "#F6F6F6",
          borderColor: "#F6F6F6",
        },
      ]}
    >
      <Text style={[submitBtnText, !activeBtn && { color: "#BDBDBD" }]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
