import styles from './Login.module.css';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <section className="relative bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <div className="absolute inset-0" style={{ height: '100%' }}>
        <img
          src="https://wallpaperaccess.com/full/2690784.jpg"
          alt="Background"
          className="w-full h-full object-cover"
          style={{ filter: 'brightness(40%) blur(2px)' }}
        />
      </div>
      <div className="relative px-4 sm:px-6 py-4 mx-auto max-w-lg w-full" style={{ paddingTop: '2vh' }}> {/* Adjusted for responsiveness */}
        <div className="bg-white rounded-lg shadow dark:border xl:p-0 dark:bg-gray-800 dark:border-gray-700" style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
          <div className="p-4 sm:p-6 space-y-4 md:space-y-6">
            <h1 className="text-lg sm:text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
              Sign in to your account
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="HotelLunar@gmail.com" required />
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" required />
              </div>
              <button type="submit" className="w-full  bg-gray-600 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">Sign in</button>
              <p className="">
                Don’t have an account yet? <Link to="/reg" className="font-medium text-blue-600 hover:underline dark:text-blue-500">Sign up</Link>
              </p>
              <a href="#" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Forgot password?</a>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
