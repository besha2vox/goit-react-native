import AuthBackground from '../../../components/AuthBackground/AuthBackground';
import RegisterForm from '../../../module/RegisterForm/RegisterForm';

const RegistrationScreen = ({ navigation }) => {
    const onFormSubmit = (userCredentials) => {
        navigation.navigate('Home');
    };

    return (
        <AuthBackground>
            <RegisterForm onFormSubmit={onFormSubmit} navigation={navigation} />
        </AuthBackground>
    );
};

export default RegistrationScreen;
