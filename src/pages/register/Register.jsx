import { request } from "@/api";
import React from "react";
import { useDispatch } from "react-redux";
import { signIn } from "@/redux/slices/token-slice";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const dipatch = useDispatch();
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    let formData = new FormData(e.target);
    let user = Object.fromEntries(formData);

    console.log(user);

    request.post("/auth/signup-admin", user).then((res) => {
      console.log(res);
      dipatch(signIn(res.data.access_token));
      navigate("/admin");
    });
  };
  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSignUp} action="">
        <input className="border" type="text" name="name" />
        <input className="border" type="email" name="email" />
        <input className="border" type="password" name="password" />
        <input className="border" type="password" name="confirm_password" />
        <button>Sign Up</button>
      </form>
    </div>
  );
};

export default Register;
