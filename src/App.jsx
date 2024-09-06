import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root";
import Home from "./component/Home/Home";
import Room from "./component/Room/Room";
import Facilities from "./component/Facilities/Facilities";
import Contacts from "./component/Contacts/Contacts";
import Notfound from "./component/Ntfound/Notfound";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Login from "./component/Login/Login";
import Register from "./component/Register/Register";
import CartPage from "./component/Cart/CartPage";
import { CartProvider } from "../context/cartContext";
import ProfileOrdersPage from "./component/ProfileOrdersPage/ProfileOrdersPage";
import ProtectedRoutes from "./component/ProtectedRoutes/ProtectedRoutes";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AboutUs from "./component/AboutUs/AboutUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "room",
        element: <Room />
      },
      {
        path: "facilities",
        element: <Facilities />
      },
      {
        path: "reg",
        element: <Register />
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "aboutus",
        element: <AboutUs />
      },
      {
        path: "*",
        element: <Notfound />
      },
      {
        element: <ProtectedRoutes />, 
        children: [
          {
            path: "/cart",
            element: <CartPage />
          },
          {
            path: "contacts",
            element: <Contacts />
          },
          {
            path: "/order",
            element: <ProfileOrdersPage />
          }
        ]
      }
    ],
  },
]);

export default function App() {
  return (
    <CartProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </CartProvider>
  );
}
