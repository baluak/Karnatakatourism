import Head from "../tour/HeaderAndFoter/header";
import Form from "../components/Form";
import { useNavigate } from "react-router-dom";

function Register() {

  let navigate = useNavigate();
let handleloginClick = () => {
  navigate("/login")
}

  return (
    <>
      <Head />
      <br />
      <br />
      <br />
      <br />
      <Form route="/api/user/register/" method="register" />
      <div style={{ marginLeft: "20em",textAlign:"center" }}>
<p style={{ color: "blue" }}>i have an account continue to login...</p>
<button style={{
            backgroundColor: "green",
            color: "white",
            width: "11em",
            height: "2em",
            fontSize: "1em",
            borderRadius:"0.5em"

          }} onClick={handleloginClick}> <strong> Continue to login</strong></button>
      </div>
    </>
  );
}

export default Register;
