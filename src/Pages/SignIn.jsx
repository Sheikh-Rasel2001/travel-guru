import React, { useContext, useRef, useState } from 'react';
import AuthContext from '../Authentication/AuthContext';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router';
import googleImg from '../assets/google.png';
import fbImg from '../assets/fb.png';
import { toast } from 'react-toastify';
import { sendPasswordResetEmail } from 'firebase/auth';
import auth from '../Firebase/firebase.init';


const SignIn = () => {
    const { signInUser, signOutUser } = useContext(AuthContext);

    const [showPassword, setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [success, setSuccess] = useState(false);
    const emailRef = useRef();

    const navigate = useNavigate();
    const location = useLocation();

    const handleSignIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const remember = form.remember.checked;

        setErrorMessage('');
        setSuccess(false);

        // password validation
        if (password.length < 6) {
            setErrorMessage("Password must be at least 6 characters");
            return;
        }

        if (!/[A-Z]/.test(password)) {
            setErrorMessage("Must include at least one uppercase letter");
            return;
        }

        if (!/[a-z]/.test(password)) {
            setErrorMessage("Must include at least one lowercase letter");
            return;
        }

        if (!/[0-9]/.test(password)) {
            setErrorMessage("Must include at least one number");
            return;
        }

        if (!/[#?!@$%^&*-]/.test(password)) {
            setErrorMessage("Must include at least one special character");
            return;
        }

        // remember me
        if(!remember){
            setErrorMessage('Please remember me');
        }

        // sign in user
        signInUser(email, password)
            .then(result => {
                if (!result.user.emailVerified){
                    alert('Please verify your email');
                    signOutUser();
                    return;
                }
                setSuccess(true);
                 const from = location.state?.from?.pathname || '/';
                const bookingData = location.state?.from?.state;

                toast('You are signed in. You can hotel booking now')

                navigate(from, {
                    state: bookingData,
                    replace: true
                });
                form.reset();
            })
            .catch(error => {
                setErrorMessage(error.message);
            });
    }

    // send email to password reset
    const handleForgotPassword = () => {
        const sendEmail = emailRef.current.value;

        if(!sendEmail){
            alert('Please enter your email first');
            return;
        }
        // sent email for reset password 
        sendPasswordResetEmail(auth, sendEmail)
        .then(() => {
            alert('A password reset email is sent. Please check your email')
        })
        .catch(error => {
            setErrorMessage(error.message);
        })

    }

    return (
        <div className='w-11/12 mx-auto py-5'>
            <div className='w-lg h-full mx-auto'>
                {/* form  */}
                <div className='w-full h-full'>
                    <div className='w-11/12 mx-auto h-full border border-gray-300 rounded-lg px-2 py-4'>
                        <h1 className='text-xl font-semibold mb-3 mont text-[#001931] px-8'>Sign In</h1>
                        <form onSubmit={handleSignIn} className='w-full px-8 space-y-4 mont'>
                            {/* email */}
                            <input type="email" name="email" ref={emailRef} placeholder='Enter Your Email' className='w-full py-2 outline-none border-b border-b-gray-300' required />
                            {/* create password */}
                            <div className='relative'>
                                <input type={showPassword ? 'text' : 'password'} name="password" placeholder='Password' className='w-full py-2 outline-none border-b border-b-gray-300' required />
                                <button type='button' onClick={() => setShowPassword(!showPassword)} className='absolute top-3 right-6 text-xl text-gray-400 cursor-pointer'>
                                    {
                                        showPassword ? <FaRegEyeSlash /> : <FaRegEye />
                                    }
                                </button>
                            </div>

                            {/* forgot password */}
                            <div className='flex justify-between items-center'>
                                <label className='flex items-center gap-2 cursor-pointer'>
                                    <input type="checkbox" name='remember' className="checkbox checkbox-md" />
                                    <p>Remember Me</p>
                                </label>
                                <div onClick={handleForgotPassword}><a className="link link-hover text-secondary">Forgot password?</a></div>
                            </div>
                            {/* submit button */}
                            <input type="submit" value="Sign In" className='bg-secondary w-full py-2 rounded-lg font-semibold' />
                            <div>
                                <p>Don't have an account? <Link to='/auth/signUp' className='text-secondary underline'>Create an account</Link></p>
                            </div>
                            {
                                errorMessage && <p className='text-xs text-red-500'>{errorMessage} </p>
                            }
                            {
                                success && <p className='text-xs text-green-500'>User Sign Up Successfully</p>
                            }
                        </form>
                    </div>
                    <div className="divider">OR</div>
                    {/* sign up with google */}
                    <div className='flex flex-col space-y-4 mt-4 w-96 mx-auto mont'>
                        <button className='btn font-semibold'><img src={googleImg} alt="Continue With Google" className='w-4 h-4' />Continue With Google</button>
                        <button className='btn font-semibold'><img src={fbImg} alt="Continue With Facebook" className='w-4 h-4' />Continue With Facebook</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;