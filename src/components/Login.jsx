import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchUser } from '../features/users/userSlice';

function Login() {
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(fetchUser(true));
  }

  return (
    <div className="min-h-screen flex-grow bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-3 sm:rounded-xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-xl sm:px-20 sm:py-10">
            <h1 className="text-7xl">clifile</h1>
            <div className="mx-auto">
            <h3 className="text-right text-green-800 text-sm">By INSECAMI</h3>
            <hr className="my-3 mx-2"></hr>
            <h4 className="text-3xl mt-10">Inicia Sesión</h4>

            <div className="bg-white">
                <a href="#" onClick={(evt) => {handleLogin()}}>
                <img className="h-16 my-3 p-2 rounded-full shadow-md mx-auto mt-4" src="https://rotulosmatesanz.com/wp-content/uploads/2017/09/2000px-Google_G_Logo.svg_.png"></img>
                </a>
            </div>
            </div>
        </div>
        </div>
    </div>
  );
}

export default Login;
