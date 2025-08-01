import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/LayoutComponents/Navbar";
import Footer from "../components/LayoutComponents/Footer";
import UserLogin from "../components/UserLogin";
import UserSignup from "../components/UserSignup";

const MainLayout = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar
        onLoginClick={() => {
          setShowLogin(true);
        }}
      />
      {showLogin && (
        <UserLogin
          onCancel={() => {
            setShowLogin(false);
          }}
          onSignup={() => {
            setShowLogin(false);
            setShowSignup(true);
          }}
        />
      )}
      {showSignup && (
        <UserSignup
          onCancel={() => {
            setShowSignup(false);
          }}
          onLogin={() => {
            setShowSignup(false);
            setShowLogin(true);
          }}
          onSignupSuccess={() => {
            setShowSignup(false);
            setShowLogin(true);
          }}
        />
      )}
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
