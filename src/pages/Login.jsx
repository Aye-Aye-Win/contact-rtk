import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../features/api/authApi";
import { addUser } from "../features/services/authSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login] = useLoginMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginHandler = async (e) => {
    e.preventDefault();
    const { data } = await login({ email, password });
    dispatch(addUser({ user: data?.user, token: data?.token }));
    if (data?.success) navigate("/");
  };
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <form
        onSubmit={loginHandler}
        className="w-96 flex flex-col items-center bg-gray-50 p-10 gap-10 rounded shadow"
      >
        <h1 className="text-blue-500 text-xl font-bold">Login Account</h1>
        <input
          type="email"
          placeholder="Enter your email address"
          className="w-72 outline-none border-b-2 py-3 bg-transparent"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter your password"
          className="w-72 outline-none border-b-2 py-3 bg-transparent"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="text-center">
          <p className="text-xs">
            Don't have an account?
            <Link to="/register">
              <span className="text-green-500 ml-4 cursor-pointer">Register</span>
            </Link>
          </p>
          <br />
          <button
            type="submit"
            className="bg-blue-500  hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 px-10 py-2 mt-4 text-white rounded cursor-pointer"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
