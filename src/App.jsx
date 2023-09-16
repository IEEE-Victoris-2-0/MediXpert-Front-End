import React from "react";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import SingleCategory from "./pages/SingleCategory";
import SingleDrug from "./pages/SingleDrug";
import CallDr from "./pages/CallDr";
import PharmacyProfile from "./pages/PharmacyProfile";
import Favorites from "./pages/Favorites";
import Cart from "./pages/Cart";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./contexts/auth";
import { useContext } from "react";
import Map from "./pages/Map";

const App = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="font-poppins overflow-hidden">
      <ToastContainer />
      <Routes>
        <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
        <Route
          path="/signup"
          element={user ? <Navigate to="/" /> : <Signup />}
        />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route
          path="/category/:category"
          element={user ? <SingleCategory /> : <Navigate to="/login" />}
        />
        <Route
          path="/call-dr"
          element={user ? <CallDr /> : <Navigate to="/login" />}
        />
        <Route
          path="/drug/:drug"
          element={user ? <SingleDrug /> : <Navigate to="/login" />}
        />
        <Route
          path="/pharmacy/:pharmacy"
          element={user ? <PharmacyProfile /> : <Navigate to="/login" />}
        />

        <Route
          path="/favorites"
          element={user ? <Favorites /> : <Navigate to="/login" />}
        />
        <Route
          path="/location"
          element={user ? <Map /> : <Navigate to="/login" />}
        />
        <Route
          path="/cart"
          element={user ? <Cart /> : <Navigate to="/login" />}
        />
      </Routes>
    </div>
  );
};

export default App;
