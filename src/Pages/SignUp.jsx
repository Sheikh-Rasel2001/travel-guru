import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import googleImg from '../assets/google.png';
import fbImg from '../assets/fb.png';
import AuthContext from '../Authentication/AuthContext';
import { updateProfile } from 'firebase/auth';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';

const SignUp = () => {
    const { createUser } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    // const { destination } = location.state || {};


    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.createPassword.value;
        const confirmPassword = form.confirmPassword.value;
        const terms = form.terms.checked;
        // console.log(firstName, lastName, photo, email, password, confirmPassword);

        setSuccess(false)
        setErrorMessage('');

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
        // if confirm password don't match create password
        if (password !== confirmPassword) {
            setErrorMessage("Password not matched");
            return;
        }
        // terms and condition validation
        if (!terms) {
            setErrorMessage('Please accept terms and conditions');
            return;
        }

        // sign up for user 
        createUser(email, password)
            .then(result => {
                console.log(result);
                const recentUser = result.user;
                // updated user profile
                updateProfile(recentUser, {
                    displayName: `${firstName} ${lastName}`,
                    photoURL: photo
                }).then(() => console.log('Profile Updated')).catch(error => console.log(error))
                setSuccess(true);

                const from = location.state?.from?.pathname || '/';
                const bookingData = location.state?.from?.state;

                navigate(from, {
                    state: bookingData,
                    replace: true
                });
                form.reset();
            })
            .catch(error => {
                setErrorMessage(error.message)
            })

    }

    return (
        <div className='w-11/12 mx-auto'>
            <div className='w-lg h-full mx-auto'>
                {/* form  */}
                <div className='w-full h-full'>
                    <div className='w-11/12 mx-auto h-full border border-gray-300 rounded-lg px-2 py-4'>
                        <h1 className='text-xl font-semibold mb-3 mont text-[#001931] px-8'>Create An Account</h1>
                        <form onSubmit={handleSubmit} className='w-full px-8 space-y-4 mont'>
                            {/* first name */}
                            <input type="text" name="firstName" placeholder='First Name' className='w-full py-2 outline-none border-b border-b-gray-300' required />
                            {/* last name  */}
                            <input type="text" name="lastName" placeholder='Last Name' className='w-full py-2 outline-none border-b border-b-gray-300' required />
                            {/* photo */}
                            <input type="text" name="photo" placeholder='Photo URL' className='w-full py-2 outline-none border-b border-b-gray-300' required />
                            {/* email */}
                            <input type="email" name="email" placeholder='Enter Your Email' className='w-full py-2 outline-none border-b border-b-gray-300' required />
                            {/* create password */}
                            <div className='relative'>
                                <input type={showPassword ? 'text' : 'password'} name="createPassword" placeholder='Password' className='w-full py-2 outline-none border-b border-b-gray-300' required />
                                <button type='button' onClick={() => setShowPassword(!showPassword)} className='absolute top-3 right-6 text-xl text-gray-400 cursor-pointer'>
                                    {
                                        showPassword ? <FaRegEyeSlash /> : <FaRegEye />
                                    }
                                </button>
                            </div>
                            {/* confirm password */}
                            <div className='relative'>
                                <input type={confirmPassword ? 'text' : 'password'} name="confirmPassword" placeholder='Confirm Password' className='w-full py-2 outline-none border-b border-b-gray-300' required />
                                <button type='button' onClick={() => setConfirmPassword(!confirmPassword)} className='absolute top-3 right-6 text-xl text-gray-400 cursor-pointer'>
                                    {
                                        confirmPassword ? <FaRegEyeSlash /> : <FaRegEye />
                                    }
                                </button>
                            </div>
                            {/* terms and conditions */}
                            <label className='flex items-center gap-2 cursor-pointer mt-4'>
                                <input type="checkbox" name='terms' className="checkbox checkbox-md" />
                                <p className='text-sm'>I agree to the <span className='text-blue-600 hover:underline'>Terms</span> and <span className='text-blue-600 hover:underline'>Conditions</span></p>
                            </label>
                            {/* submit button */}
                            <input type="submit" value="Create an Account" className='bg-secondary w-full py-2 rounded-lg font-semibold' />
                            <div>
                                <p>Already have an account? <Link to='/auth/signIn' className='text-secondary underline'>Sign In</Link></p>
                            </div>
                            {
                                errorMessage && <p className='text-xs text-red-500'>{errorMessage}</p>
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

export default SignUp;