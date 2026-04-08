import React, { useContext } from 'react';
import AuthContext from '../Authentication/AuthContext';

const SignIn = () => {
    const user = useContext(AuthContext);
    return (
        <div>
            sign in page
            <p>{user}</p>
        </div>
    );
};

export default SignIn;