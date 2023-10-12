import { useContext, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../Provider/AuthProviders';
import { FcGoogle } from 'react-icons/fc';
import { TbFidgetSpinner } from 'react-icons/tb';

const Login = () => {
    const {loading, setLoading, loginUser, signWithGoogle, resetPassword} = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation()
    const from = location.state?.from;
    const emailRef = useRef()
    console.log(location,from)

    const handleLoginWithMail =event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        loginUser(email, password)
        .then(result => {
            const createdUser = result.user;
            console.log(createdUser)
            form.reset();
            toast.success('Successfully Login!')

            setTimeout(()=>{
                if(from){
                    navigate(from)
                }
                else{
                    navigate('/')
                }
            },2000)
        })
        .catch(error =>{
            // setError(error.message)
            toast.success(error.message)
            console.log(error)
        })
    }

    const handleGoogleSignIn=()=>{
        signWithGoogle()
        .then((result) => {
            const loggedUser= result.user;
            console.log(loggedUser)
            navigate(from, {replace: true})
        })
        .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage)
        });
    }

    //   handle password reset
    const handleReset = () => {
        const email = emailRef.current.value
        resetPassword(email)
        .then(() => {
            toast.success('Please check your email for reset link')
            setLoading(false)
        })
        .catch(err => {
            setLoading(false)
            console.log(err.message)
            toast.error(err.message)
        })
    }

    return (
        <div className="min-h-screen bg-white md:flex justify-around">
            <div className='w-1/2'>
                <img className='' src="https://tailwindcomponents.com/svg/secure-login-animate.svg" alt="" />
            </div>
            <div className='flex justify-center items-center min-h-screen'>
                <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
                <div className='mb-8 text-center'>
                    <h1 className='my-3 text-4xl font-bold'>Log In</h1>
                    <p className='text-sm text-gray-400'>
                    Sign in to access your account
                    </p>
                </div>
                <form
                    onSubmit={handleLoginWithMail}
                    noValidate=''
                    action=''
                    className='space-y-6 ng-untouched ng-pristine ng-valid'
                >
                    <div className='space-y-4'>
                    <div>
                        <label htmlFor='email' className='block mb-2 text-sm'>
                        Email address
                        </label>
                        <input
                        ref={emailRef}
                        type='email'
                        name='email'
                        id='email'
                        required
                        placeholder='Enter Your Email Here'
                        className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-myBlue bg-gray-200 text-gray-900'
                        data-temp-mail-org='0'
                        />
                    </div>
                    <div>
                        <div className='flex justify-between'>
                        <label htmlFor='password' className='text-sm mb-2'>
                            Password
                        </label>
                        </div>
                        <input
                        type='password'
                        name='password'
                        id='password'
                        required
                        placeholder='*******'
                        className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-myBlue bg-gray-200 text-gray-900'
                        />
                    </div>
                    </div>

                    <div>
                    <button
                        type='submit'
                        className='bg-myOrange w-full rounded-md py-3 text-white'
                    >
                        {loading ? (
                        <TbFidgetSpinner className='m-auto animate-spin' size={24} />
                        ) : (
                        'Continue'
                        )}
                    </button>
                    </div>
                </form>
                <div className='my-1'>
                    <button
                    onClick={handleReset}
                    className='text-xs hover:underline hover:text-myOrange text-gray-400'
                    >
                    Forgot password?
                    </button>
                </div>
                    <div className="relative py-2">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-b border-gray-300">
                            </div>
                        </div>
                        <div className="relative flex justify-center">
                            <span className="bg-gray-100 px-3 text-sm text-gray-500">Or login with social accounts</span>
                        </div>
                    </div>
                <div
                    onClick={handleGoogleSignIn}
                    className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'
                >
                    <FcGoogle size={32} />

                    <p>Continue with Google</p>
                </div>
                <p className='px-6 text-sm text-center text-gray-400'>
                    Do not have an account yet?{' '}
                    <Link
                    to='/signup'
                    className='hover:underline hover:text-myOrange text-gray-600'
                    >
                    Sign up
                    </Link>
                    .
                </p>
                </div>
            </div>
        </div>

    );
};

export default Login;