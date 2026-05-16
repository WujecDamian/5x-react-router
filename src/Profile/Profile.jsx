import Spinach from "../RandomComponents/Spinach";
import DefaultProfile from "./DefaultProfile";
import { Link } from "react-router";

const Profile = () => {
  return (
    <div>
      <h1>Hello from profile page!</h1>
      <p>So, how are you?</p>
      <hr />
      <h2>The profile visited is here:</h2>
      {name === "popeye" ? (
        <Spinach></Spinach>
      ) : name === "spinach" ? (
        <Spinach></Spinach>
      ) : (
        <DefaultProfile></DefaultProfile>
      )}
      <span>
        <Link to="/">
          <i>{"<- Go back"}</i>
        </Link>
      </span>
    </div>
  );
};

export default Profile;
