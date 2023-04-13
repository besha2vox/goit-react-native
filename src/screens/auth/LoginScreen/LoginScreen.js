import AuthBackground from '../../../components/AuthBackground/AuthBackground';
import LoginForm from '../../../module/LoginForm/LoginForm';
import { useDispatch } from 'react-redux';
import { logIn } from '../../../redux/auth/authOperations';

const LoginScreen = ({ navigation }) => {
    const dispatch = useDispatch();

    const onFormSubmit = (userCredentials) => {
        dispatch(logIn(userCredentials));
    };

    return (
        <AuthBackground>
            <LoginForm onFormSubmit={onFormSubmit} navigation={navigation} />
        </AuthBackground>
    );
};

export default LoginScreen;
