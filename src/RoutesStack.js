import { NavigationContainer } from '@react-navigation/native';
import useRoute from './useRoute';
import { useEffect } from 'react';
import { auth } from './firebase/firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { selectStateChanged } from './redux/auth/authSelectors';
import { logIn, checkUser } from './redux/auth/authOperations';

const RoutesStack = () => {
    const dispatch = useDispatch();
    const stateChange = useSelector(selectStateChanged);
    const routing = useRoute(stateChange);

    // useEffect(() => {
    //   dispatch(checkUser());
    // }, []);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            console.log('user: ', user);
            if (!user) return;

            const credentials = {
                user: { name: user.displayName, email: user.email },
                uid: user.uid,
            };

            console.log(credentials);
            dispatch(logIn(credentials));
        });
    }, [dispatch]);

    return <NavigationContainer>{routing}</NavigationContainer>;
};

export default RoutesStack;
