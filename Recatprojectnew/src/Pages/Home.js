import Login from "../Login";
import Signup from "../SignUp";

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Signup />
      <br />
      <Login />
    </div>
  );
}

export default Home;
