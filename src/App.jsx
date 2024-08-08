import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root";
import Home from "./component/Home/Home";
import Room from "./component/Room/Room";
import Facilities from "./component/Facilities/Facilities";
import Contacts from "./component/Contacts/Contacts";
import Notfound from "./component/Ntfound/Notfound";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import Login from "./component/Login/Login";
import Register from "./component/Register/Register";

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
        path: "contacts",
        element: <Contacts />
      },
      {
        path: "reg",
        element: <Register/>
      },
      {
        path: "login",
        element: <Login/>
      },
      {
        path: "*",
        element: <Notfound />
      }
      
    ],
  },
]);

export default function App() {
  return <>
    <RouterProvider router={router} />
    <ToastContainer />
  </>
}
