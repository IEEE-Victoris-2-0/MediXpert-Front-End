import React, { useState, useContext } from "react";
import { AuthContext } from "../contexts/auth";
import { BiSolidLockAlt } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import GoogleButton from "react-google-button";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { setUser } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError(null);

    const response = await fetch("/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();

    if (!response.ok) {
      setLoading(false);
      setError(data.message);
      return;
    }

    if (response.ok) {
      localStorage.setItem("user", JSON.stringify(data));
      setUser(data);
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="min-h-screen">
        <div className=" bg-primary flex justify-center h-[16vh] lg:justify-end">
          <img src="/assets/logo.svg" alt="logo" className="w-[140px] mt-4" />
        </div>
        <div className="flex h-[84vh]">
          <div className="flex-1 flex flex-col gap-4 justify-center items-center">
            <div className="flex flex-col items-center">
              <h1 className="h1 text-center text-primary">Welcome Back!</h1>
              <span className="text-tx-primary text-lg">
                Login to your account
              </span>
            </div>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 text-lg w-full md:max-w-xl p-4"
            >
              <div className="flex items-center gap-4 px-4 py-2 rounded-[44px] bg-gradient-to-b from-[#C8B3FC] via-[#C2AEF39C] to-[#C2AEF345]">
                <div className="bg-white rounded-full p-4 text-primary">
                  <MdEmail />
                </div>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
                  className="placeholder-white bg-transparent w-full focus:outline-none"
                />
              </div>
              <div className="flex items-center gap-4 px-4 py-2 rounded-[44px] bg-gradient-to-b from-[#C8B3FC] via-[#C2AEF39C] to-[#C2AEF345]">
                <div className="bg-white rounded-full p-4 text-primary">
                  <BiSolidLockAlt />
                </div>
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  name="password"
                  className="placeholder-white bg-transparent w-full focus:outline-none"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="bg-gradient-to-b from-[#7642F9] to-[#C8B3FC] text-white py-3 px-4 rounded-[44px] w-1/3 self-center"
              >
                Sign in
              </button>
            </form>
            {error && <p>{error}</p>}
            <div className="flex items-center py-2">
              <div className="w-[137px] h-px bg-[#B8B8B8]"></div>
              <span className="flex-shrink text-[#B8B8B8] px-2">Or</span>
              <div className="w-[137px] h-px bg-[#B8B8B8]"></div>
            </div>
            <GoogleButton />
            <div className="flex items-center gap-2">
              <span className="text-[15px] text-tx-primary">
                Don't have an account?
              </span>
              <Link to="/signup" className="text-[#0078D7] text-[15px]">
                Sign up
              </Link>
            </div>
          </div>
          <div className="flex-1 flex-col justify-end items-center self-end hidden lg:flex">
            <img
              src="/assets/login.svg"
              alt="illustration"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
