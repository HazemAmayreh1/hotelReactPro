import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root";
import Home from "./component/Home/Home";
import Room from "./component/Room/Room";
import Facilities from "./component/Facilities/Facilities";
import Contacts from "./component/Contacts/Contacts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "room", element: <Room /> },
      { path: "facilities", element: <Facilities/> },
      { path: "contacts", element: <Contacts/> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
