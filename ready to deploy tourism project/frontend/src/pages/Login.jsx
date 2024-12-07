import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Form from "../components/Form";
import Head from "../tour/HeaderAndFoter/header";

function Login() {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSignUpClick = () => {
    navigate("/register"); // Navigate to the register route
  };

  return (
    <>
      <Head />
      <br />
      <br />
      <br />
      <br />
      <Form route="/api/token/" method="login" />
      <div style={{ marginLeft: "20em", textAlign: "center" }}>
        <p style={{ color: "blue" }}>Haven`t you Registered in yet ?</p>
        <button
          style={{
            backgroundColor: "green",
            color: "white",
            width: "11em",
            height: "2em",
            fontSize: "1em",
            borderRadius: "0.5em",
            fontWeight: "bold",
            textAlign: "center",
            alignItems: "center",
            alignContent: "center",
          }}
          onClick={handleSignUpClick}
        >
          Sign Up For Free
        </button>{" "}
        {/* Call the handler */}
      </div>
    </>
  );
}

export default Login;

// Yes, you are correct! The Login.jsx component is designed to collect user login credentials through the Form.jsx component and send those credentials to the specified login API. Here’s a detailed breakdown of how this process works:
