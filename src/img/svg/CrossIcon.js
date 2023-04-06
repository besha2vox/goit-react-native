import { View } from "react-native";
import Svg, { Path } from "react-native-svg";

const CrossIcon = ({ fill }) => {
  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Svg width={13} height={13} viewBox="0 0 13 13">
        <Path d="M7 0H6V6H0V7H6V13H7V7H13V6H7V0Z" fill={fill} />
      </Svg>
    </View>
  );
};

export default CrossIcon;
