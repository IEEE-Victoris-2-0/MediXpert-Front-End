import React, { useState, useContext } from "react";
import { AuthContext } from "../contexts/auth";
import { Link } from "react-router-dom";

const Signup = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
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
      body: JSON.stringify({ email, password, phone }),
    });
    const data = await response.json();
    setLoading(false);

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
      <div className="container min-h-screen flex">
        <div className="flex-1 flex flex-col gap-4 justify-center items-center py-8">
          <div className="flex flex-col items-center">
            <h1 className="h1 text-center text-primary">Welcome!</h1>
            <span className="text-tx-primary text-[23px]">
              Create your account
            </span>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              name="username"
              className="py-3 px-4 rounded-[44px] bg-gradient-to-b w-[455px] from-[#C8B3FC] via-[#C2AEF39C] to-[#C2AEF345] placeholder-white"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              className="py-3 px-4 rounded-[44px] bg-gradient-to-b w-[455px] from-[#C8B3FC] via-[#C2AEF39C] to-[#C2AEF345] placeholder-white"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              className="py-3 px-4 rounded-[44px] bg-gradient-to-b w-[455px] from-[#C8B3FC] via-[#C2AEF39C] to-[#C2AEF345] placeholder-white"
            />
            <input
              type="text"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              name="phone"
              className="py-3 px-4 rounded-[44px] bg-gradient-to-b w-[455px] from-[#C8B3FC] via-[#C2AEF39C] to-[#C2AEF345] placeholder-white"
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-gradient-to-b from-[#7642F9] to-[#C8B3FC] text-white py-3 px-4 rounded-[44px] w-[163px] self-center"
            >
              Sign up
            </button>
          </form>
          {error && <p>{error}</p>}
          <div class="flex items-center py-2">
            <div class="w-[137px] h-px bg-[#B8B8B8]"></div>
            <span class="flex-shrink text-[#B8B8B8] px-2">Or</span>
            <div class="w-[137px] h-px bg-[#B8B8B8]"></div>
          </div>
          <div className="flex gap-32">
            <div className="bg-[#ECE5FE] p-2 rounded-full w-[52px] h-[52px] overflow-hidden cursor-pointer">
              <img
                src="/assets/facebook-icon.png"
                alt=""
                className="object-contain w-full h-full"
              />
            </div>
            <div className="bg-[#ECE5FE] p-2 rounded-full w-[52px] h-[52px] overflow-hidden cursor-pointer">
              <img
                src="/assets/google-icon.png"
                alt=""
                className="object-contain w-full h-full"
              />
            </div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-[15px] text-tx-primary">
              Already have an account?
            </span>
            <Link to="/login" className="text-[#0078D7] text-[15px]">
              Login
            </Link>
          </div>
        </div>
        <div className="flex-1 bg-primary text-white flex flex-col items-center gap-8 justify-center text-center">
          <img src="/assets/logo.svg" alt="logo" className="w-[200px]" />
          <h1 className="h1">
            A Pharmacy
            <br />
            for all your needs.
          </h1>
          <p className="p">
            With few clicks, place your order and wait for it to be delivered.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
