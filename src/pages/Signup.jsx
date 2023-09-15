import React, { useState, useContext } from "react";
import { AuthContext } from "../contexts/auth";
import { Link } from "react-router-dom";
import { BiSolidUser, BiSolidLockAlt } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import GoogleButton from "react-google-button";
import { toast } from "react-toastify";

const Signup = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const { setUser } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const response = await fetch(
      "https://shootingstars.puiux.org/api/register",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: userName, email, phone, password }),
      }
    );
    const data = await response.json();

    console.log(data);

    setLoading(false);

    if (!response.ok) {
      toast.error(data.message);
      return;
    }

    if (response.ok) {
      localStorage.setItem("user", JSON.stringify(data.data.token));
      setUser(data.data);
      toast.success("Signed up successfully");
    }
  };

  return (
    <div className="bg-white">
      <div className="min-h-screen flex flex-col-reverse lg:flex-row gap-16 lg:gap-0">
        <div className="flex-1 flex flex-col gap-4 justify-center items-center">
          <div className="flex flex-col items-center">
            <h1 className="h1 text-center text-primary">Welcome!</h1>
            <span className="text-tx-primary text-lg">Create your account</span>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 text-lg w-full md:max-w-xl p-4"
          >
            <div className="flex items-center gap-4 px-4 py-2 rounded-[44px] bg-gradient-to-b from-[#C8B3FC] via-[#C2AEF39C] to-[#C2AEF345]">
              <div className="bg-white rounded-full p-4 text-primary">
                <BiSolidUser />
              </div>
              <input
                type="text"
                placeholder="Username"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                name="username"
                className="placeholder-white w-full bg-transparent  focus:outline-none"
              />
            </div>
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
                className="placeholder-white w-full bg-transparent  focus:outline-none"
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
                className="placeholder-white w-full bg-transparent  focus:outline-none"
              />
            </div>
            <div className="flex items-center gap-4 px-4 py-2 rounded-[44px] bg-gradient-to-b from-[#C8B3FC] via-[#C2AEF39C] to-[#C2AEF345]">
              <div className="bg-white rounded-full p-4 text-primary">
                <BsTelephoneFill />
              </div>
              <input
                type="text"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                name="phone"
                className="placeholder-white w-full bg-transparent  focus:outline-none"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="bg-gradient-to-b from-[#7642F9] to-[#C8B3FC] text-white py-3 px-4 rounded-[44px] w-1/3 self-center"
            >
              {loading ? "Loading..." : "Sign Up"}
            </button>
          </form>
          <div className="flex items-center">
            <div className="w-[137px] h-px bg-[#B8B8B8]"></div>
            <span className="flex-shrink text-[#B8B8B8] px-2">Or</span>
            <div className="w-[137px] h-px bg-[#B8B8B8]"></div>
          </div>
          <GoogleButton />
          <div className="flex items-center gap-2">
            <span className="text-[15px] text-tx-primary">
              Already have an account?
            </span>
            <Link to="/login" className="text-[#0078D7] text-[15px]">
              Login
            </Link>
          </div>
        </div>
        <div className="flex-1 lg:bg-primary text-white flex flex-col items-center gap-8 justify-center text-center px-4 relative">
          <div className="absolute top-0 bottom-0 -left-[20%] hidden lg:block">
            <img
              src="/assets/wave.svg"
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
          <div className="absolute right-0 top-0 left-0 lg:hidden">
            <img
              src="/assets/nav-wave.svg"
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
          <img
            src="/assets/logo.svg"
            alt="logo"
            className="w-[80px] z-10 self-start mt-2 lg:mt-0 lg:self-center"
          />
          <h1 className="h1 hidden lg:block z-10">
            A Pharmacy
            <br />
            for all your needs.
          </h1>
          <p className="p hidden lg:block z-10">
            With few clicks, place your order and wait for it to be delivered.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
