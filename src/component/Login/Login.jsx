import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <section className="relative bg-gray-50 dark:bg-gray-900 min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="https://images7.alphacoders.com/362/362619.jpg" 
          alt="Background" 
          className="w-full h-full object-cover brightness-50"
          style={{ filter: 'brightness(40%) blur(2px)' }}
        />
      </div>
      <div className="relative flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 z-10">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700" style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)' }}>
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="HotelLunar@gmail.com" required />
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
              </div>
              <div className="flex items-center justify-between">
                {/* Optional additional content or styling */}
              </div>
              <button type="submit" className="w-full text-white bg-purple-600 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                 Don’t have an account yet? <Link to="/reg" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</Link>
              </p>

              <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
