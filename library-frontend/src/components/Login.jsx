import React, { useContext, useState } from "react";
import { useNavigate }  from "react-router-dom";
import { AuthContext } from "../authentication/AuthProvider";


const Login = () => {
  const { loading, error,  login } =
    useContext(AuthContext);
    const email = useState("");
    const password = useState("");

  const navigate = useNavigate();

  const handleLogin = async (event) => {
    try {
      event.preventDefault();
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;
  
      // Check if email and password are present and password has a minimum length
      if (email && password && password.length >= 6) {
        // login is an asynchronous function, await for its completion
        const userData = await login(email, password);
      
        // Alert after successful login
        alert("Login Successfully!!✅");
  
        // Redirect or navigate to the desired page
        navigate("/");
      } else {
        // If email or password is missing, throw an error
        throw new Error("All fields are required!");
      }
    } catch (error) {
      // Handle different types of errors
      if (error.response && error.response.status === 400) {
        // Handle specific error response status (if needed)
      }
      // Alert for generic error or invalid credentials
      alert("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold">Please Login to Dashboard</h1>
            </div>
            <div className="divide-y divide-gray-200">
              <form
                onSubmit={handleLogin}
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
                <div className="relative">
                  <button className="bg-blue-500 text-white rounded-md px-6 py-2">
                    Log in
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;
