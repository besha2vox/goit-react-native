import AuthBackground from '../../../components/AuthBackground/AuthBackground';
import RegisterForm from '../../../module/RegisterForm/RegisterForm';
import { useDispatch } from 'react-redux';
import { register } from '../../../redux/auth/authOperations';

const RegistrationScreen = ({ navigation }) => {
    const dispatch = useDispatch();

    const onFormSubmit = (userCredentials) => {
        dispatch(register(userCredentials));
    };

    return (
        <AuthBackground>
            <RegisterForm onFormSubmit={onFormSubmit} navigation={navigation} />
        </AuthBackground>
    );
};

export default RegistrationScreen;
