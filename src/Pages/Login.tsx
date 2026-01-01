/*import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthLayout from "../Components/Layout/AuthLayout";
import Input from "../Components/Inputs/Input";
import { validateEmail } from "../Utils/helper";
import axios, { AxiosError } from "axios"; 
import axiosInstance from "../Utils/axiosInstance"; 

// Define types for your API response
interface LoginResponse {
  token: string;
  user: any;
}

interface ApiError {
  message: string;
}

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null); // State for API/Form errors

  const { updateUser} = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Client-side Validation
    if (!email || !password) {
      setError("Please enter email and password.");
      return;
    }

    if (!validateEmail(email)) {
      setError("Invalid email format");
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters");
      return;
    }

    setError(null); // Clear previous errors

    // 2. API Call Logic inside the handler
    try {
      const response = await axiosInstance.post<LoginResponse>(
        "/api/auth/login", // Replace with your actual API path constant
        {
          email,
          password,
        }
      );

      const { token } = response.data;

      if (token) {
        localStorage.setItem("token", token);
        updateUser(user);
        navigate("/dashboard");
      }
    } catch (err) {
      // 3. Robust Error Handling
      if (axios.isAxiosError(err)) {
        const axiosError = err as AxiosError<ApiError>;
        if (axiosError.response && axiosError.response.data.message) {
          setError(axiosError.response.data.message);
        } else {
          setError("Something went wrong. Please try again.");
        }
      } else {
        setError("An unexpected error occurred.");
      }
    }
  };

  return (
    <AuthLayout>
      <div className="lg:w-[70%] h-3/4 flex flex-col justify-center">
        <h3 className="text-xl font-bold text-black">Welcome Back!!</h3>
        <p className="text-xs text-slate-700 mt-[5px] mb-6">
          Please enter your details to log in
        </p>

        <form onSubmit={handleLogin}>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            label="Email Address"
            placeholder="xyz@gmail.com"
            type="email"
          />

          <Input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              if (e.target.value.length >= 8) setError(null);
            }}
            label="Password"
            placeholder="Min 8 Characters"
            type="password"
          />

          {/* Display the centralized error message }
          {error && (
            <p className="text-red-500 text-sm mt-1">{error}</p>
          )}

          <button
            type="submit"
            className="btn-primary w-full py-2 mt-4 rounded-md font-medium bg-blue-500 text-white hover:bg-blue-600 transition-colors"
          >
            LOGIN
          </button>

          <p className="text-[13px] text-slate-800 mt-4 text-center">
            Don't have an account?{" "}
            <Link
              to="/Signup"
              className="font-medium underline"
              style={{ color: "#3b82f6" }}
            >
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </AuthLayout>
  );
};

export default Login;*/





import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthLayout from "../Components/Layout/AuthLayout";
import Input from "../Components/Inputs/Input";
import { validateEmail } from "../Utils/helper";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Client-side Validation
    if (!email || !password) {
      setError("Please enter email and password.");
      return;
    }

    if (!validateEmail(email)) {
      setError("Invalid email format");
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters");
      return;
    }

    setError(null); // Clear previous errors

    // 2. Direct Navigation
    localStorage.setItem("token", "dummy-token-for-demo"); // Optional set a fake token
    navigate("/dashboard");
  };

  return (
    <AuthLayout>
      <div className="lg:w-[70%] h-3/4 flex flex-col justify-center">
        <h3 className="text-xl font-bold text-black">Welcome Back!!</h3>
        <p className="text-xs text-slate-700 mt-[5px] mb-6">
          Please enter your details to log in
        </p>

        <form onSubmit={handleLogin}>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            label="Email Address"
            placeholder="xyz@gmail.com"
            type="email"
          />

          <Input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              if (e.target.value.length >= 8) setError(null);
            }}
            label="Password"
            placeholder="Min 8 Characters"
            type="password"
          />

          {error && (
            <p className="text-red-500 text-sm mt-1">{error}</p>
          )}

          <button
            type="submit"
            className="btn-primary w-full py-2 mt-4 rounded-md font-medium bg-blue-500 text-white hover:bg-blue-600 transition-colors"
          >
            LOGIN
          </button>

          <p className="text-[13px] text-slate-800 mt-4 text-center">
            Don't have an account?{" "}
            <Link
              to="/Signup"
              className="font-medium underline"
              style={{ color: "#3b82f6" }}
            >
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </AuthLayout>
  );
};

export default Login;