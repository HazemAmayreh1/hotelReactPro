import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";


function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const encodedEmail = encodeURIComponent(email);
    const encodedPassword = encodeURIComponent(password);

    
    const apiUrl = `http://HotelManagement.somee.com/api/GuestAPI/register/${username}/${encodedEmail}/${encodedPassword}`;
    try {
      const response = await axios.get(apiUrl);

      if (response.status === 200) {
        toast.success("Registration successful!", {
         
        });
      } else {
        toast.error(`Registration failed: ${response.statusText}`, {
          
        });
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        toast.error("Unauthorized: Please check your credentials.", {
          
        });
      } else {
        toast.success("Registration successful!", {
          
        });
      }
      console.error("Error occurred:", error);
    }
  };

  return (
    <section className="relative overflow-hidden bg-gray-50 dark:bg-gray-900">
      <ToastContainer />
      <div className="absolute inset-0" style={{ height: "100%" }}>
        <img
          src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?cs=srgb&dl=pexels-pixabay-258154.jpg&fm=jpg"
          alt="Background"
          className="w-full h-full object-cover"
          style={{ filter: "brightness(50%) blur(2px)" }}
        />
      </div>
      <div
        className="relative px-4 sm:px-6 py-4 mx-auto max-w-lg w-full"
        style={{ paddingTop: "2vh" }}
      >
        <div
          className="bg-white rounded-lg shadow dark:border sm:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}
        >
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-lg sm:text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Create an account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="username"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  placeholder="YourName"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  placeholder="HotelLunar@gmail.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="w-full font-bold bg-gray-600 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              >
                Create an account
              </button>
              <p>
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                >
                  Log In
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;
