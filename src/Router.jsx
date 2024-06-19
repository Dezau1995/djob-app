import axios from "axios";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import UserListPage from "./Pages/UserList/UserListPage";
import UserProfilePage from "./Pages/UserProfile/UserProfilePage";
import AlbumPage from "./Pages/AlbumPage/AlbumPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <UserListPage />,
        loader: () => axios.get(`https://jsonplaceholder.typicode.com/users`),
      },
      {
        path: "/user-profile/:id",
        element: <UserProfilePage />,
        loader: ({ params }) =>
          axios.get(`https://jsonplaceholder.typicode.com/users/${params.id}`),
      },
      {
        path: "/album",
        element: <AlbumPage />,
      },
    ],
  },
]);

export default router;
