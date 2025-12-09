import { useState, FormEvent } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthLayout from "../Components/Layout/AuthLayout";
import Input from "../Components/Inputs/Input";
import { validateEmail } from "../../src/Utils/helper";
import ProfilePhotoSelector from "../Components/Inputs/ProfilePhotoSelector"; // Make sure this exists

const SignUp = () => {
  const [profilePic, setProfilePic] = useState<File | null>(null);
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);

  const navigate = useNavigate();

  // Handle sign up form submission
  const handleSignUp = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Basic validation
    if (!fullName || !email || !password) {
      setPasswordError("All fields are required");
      return;
    }

    if (!validateEmail(email)) {
      setError("Invalid email address");
      return;
    }

    if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters");
      return;
    } else {
      setPasswordError(null);
    }

    try {
      // Placeholder for API call
      console.log({ fullName, email, password, profilePic });
      // Navigate after successful signup
      navigate("/dashboard");
    } catch (err) {
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <AuthLayout>
      <div className="lg:w-100% h-auto md:h-full mt-10 md:mt-0 flex flex-col justify-center">
        <h3 className="text-xl font-semibold text-black">Create an Account</h3>
        <p className="text-xs text-slate-700 mt-[5px] mb-6">
          Join us today by entering your details below.
        </p>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <form onSubmit={handleSignUp}>
          <ProfilePhotoSelector image={profilePic} setImage={setProfilePic} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              value={fullName}
              onChange={({ target }) => setFullName(target.value)}
              label="Full Name"
              placeholder="John"
              type="text"
            />

            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              label="Email Address"
              placeholder="xyz@gmail.com"
              type="email"
            />
            <div className="md:col-span-2">
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
            </div>
          </div>

          <button
            type="submit"
            className="btn-primary py-2 mt-2 rounded-md font-medium"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-4 text-sm text-slate-600">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500">
            Login
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
};

export default SignUp;
