import CameraIcon from "../../img/svg/CameraIcon";
import { TouchableOpacity } from "react-native-gesture-handler";

import { addImageBtn } from "./CameraActiveBtnStyles";

const CameraActiveBtn = ({ pressHandler, isActive }) => {
  return (
    <TouchableOpacity
      onPress={pressHandler}
      style={[
        addImageBtn,
        isActive && {
          backgroundColor: "rgba(255, 255, 255, 0.3)",
        },
      ]}
    >
      <CameraIcon isImageShow={isActive} />
    </TouchableOpacity>
  );
};

export default CameraActiveBtn;
