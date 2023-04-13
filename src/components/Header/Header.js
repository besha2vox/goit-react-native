import BackArrowIcon from '../../img/svg/BackArrowIcon';
import LogOutIcon from '../../img/svg/LogOutIcon';
import { View, Text, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/authOperations';

import { container, screenTitle, icon } from './HeaderStyles';

const MainHeader = ({ title, route, navigation }) => {
    const dispatch = useDispatch();
    const logoutBtnPressHandler = () => {
        dispatch(logOut());
    };

    return (
        <View style={container}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={icon}>
                {route.name !== 'PostsScreen' && <BackArrowIcon />}
            </TouchableOpacity>
            <Text style={screenTitle}>{title}</Text>
            <TouchableOpacity
                onPress={() => logoutBtnPressHandler()}
                style={icon}
            >
                {route.name === 'PostsScreen' && <LogOutIcon />}
            </TouchableOpacity>
        </View>
    );
};

export default MainHeader;
