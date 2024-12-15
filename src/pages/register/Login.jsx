import { request } from "@/api";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signIn } from "@/redux/slices/token-slice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const dipatch = useDispatch();
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    setLoading(true);
    let formData = new FormData(e.target);
    const user = Object.fromEntries(formData);

    request
      .post("/auth/signin-admin", user)
      .then((res) => {
        dipatch(signIn(res.data.access_token));
        navigate("/admin");
      })
      .catch((err) => {
        alert(err.response.data.message.message);
      })
      .finally(() => setLoading(false));
  };
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSignIn} action="">
        <input className="border" type="email" name="email" />
        <input className="border" type="password" name="password" />
        <button disabled={loading}>{loading ? "Loading..." : "Sign in"}</button>
      </form>
    </div>
  );
};

export default Login;
