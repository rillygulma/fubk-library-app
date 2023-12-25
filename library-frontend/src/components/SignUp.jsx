import React, { useContext, useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../authentication/AuthProvider";
import GoogleLogo from "../assets/google-logo.png";

const SignUp = () => {
  const { createUser, user, loading, error, setError, loginwithGoogle } =
    useContext(AuthContext);

  //const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (user && !error && !loading) {
      alert("Sign up Successfully!!✅");
      navigate("/");
    }
    if (error && !loading) {
      alert("Account with this Email already exists.");
      setError(false);
    }
  }, [user, loading, error]);
  const handleSignUp = async (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    try {
      await createUser(email, password);
      // Signed up

      // ..
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
    }
  };

  // Signup using Google Account
  const handleRegister = async () => {
    try {
      loginwithGoogle();
      const user = result.user;
      alert("Sign up Successfully!!✅");
      navigate("/");
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold">Sign Up Here</h1>
            </div>
            <div className="divide-y divide-gray-200">
              <form
                onSubmit={handleSignUp}
                className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7"
              >
                <div className="relative">
                  <input
                    id="email"
                    name="email"
                    type="text"
                    className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                    placeholder="Email address"
                  />
                </div>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                    placeholder="Password"
                  />
                </div>
                <p>
                  If you have an account. Please{" "}
                  <Link to="/login" className="text-blue-600 underline">
                    Login
                  </Link>
                  Here
                </p>
                <div className="relative">
                  <button className="bg-blue-500 text-white rounded-md px-6 py-2">
                    Sign Up
                  </button>
                </div>
              </form>
            </div>

            <hr />
            <div className="flex w-full items-center flex-col mt-5 gap-3">
              <button onClick={handleRegister} className="block">
                <img
                  src={GoogleLogo}
                  alt="google-logo"
                  className="w-11 h-12 inline-block"
                />
                Login with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
