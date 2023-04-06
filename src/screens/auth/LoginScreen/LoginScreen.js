import AuthBackground from '../../../components/AuthBackground/AuthBackground';
import LoginForm from '../../../module/LoginForm/LoginForm';

const LoginScreen = ({ navigation }) => {
    const onFormSubmit = (userCredentials) => {
        navigation.navigate('Home');
    };

    return (
        <AuthBackground>
            <LoginForm onFormSubmit={onFormSubmit} navigation={navigation} />
        </AuthBackground>
    );
};

export default LoginScreen;
