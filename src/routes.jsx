import ErrorPage from "./Error/ErrorPage";
import App from "./App";
import Profile from "./Profile/Profile";
import About from "./AboutUs/About";

const routes = [
  { path: "/", element: <App></App>, errorElement: <ErrorPage></ErrorPage> },
  { path: "profile/:name", element: <Profile></Profile> },
  { path: "about", element: <About></About> },
];

export default routes;
