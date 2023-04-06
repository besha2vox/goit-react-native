import BackArrowIcon from '../../img/svg/BackArrowIcon';
import LogOutIcon from '../../img/svg/LogOutIcon';
import { View, Text, TouchableOpacity } from 'react-native';

import { container, screenTitle, icon } from './HeaderStyles';

const MainHeader = ({ title, route, navigation }) => {
    const logoutBtnPressHandler = () => {
        navigation.navigate('SignUp');
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
