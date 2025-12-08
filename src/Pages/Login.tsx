import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthLayout from "../Components/Layout/AuthLayout";
import Input from "../Components/Inputs/Input";
import { validateEmail } from "../../src/Utils/helper.js";

const Login = () => {
  const [email, setEmail] = useState("");  // RENAME
  const [password, setPassword] = useState("");
   const [passwordError, setPasswordError] = useState<string | null>(null);

  const navigate = useNavigate();

  // handle login form submit
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      setPasswordError("Please enter email and password.");
      return;
    }

    // OPTIONAL: email validation
    if (!validateEmail(email)) {
      setPasswordError("Invalid email format");
      return;
    }
       if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters");
      return;
    } else {
      setPasswordError(null);
    }
    console.log("Logged in:", email, password);

    navigate("/dashboard");
  };

  return (
    <AuthLayout>
      <div className="lg:w-[70%] h-3/4 flex flex-col justify-center">
        <h3 className="text-xl font-bold text-black">Welcome Back</h3>
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
                  if (e.target.value.length >= 8) setPasswordError(null);
                }}
                label="Password"
                placeholder="Min 8 Characters"
                type="password"
              />
          {passwordError && (
                <p className="text-red-500 text-sm mt-1">{passwordError}</p>
              )}

          <button
            type="submit"
            className="btn-primary py-2 mt-2 rounded-md font-medium"
          >
            LOGIN
          </button>

          <p className="text-[13px] text-slate-800 mt-3">
            Don't have an account?{" "}
            <Link
              to="/SingUp"
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
