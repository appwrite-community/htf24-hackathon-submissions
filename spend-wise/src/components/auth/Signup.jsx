import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { login as storeLogin } from "../../store/authSlice";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { Button, Input } from "../index.js";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [isRegistering, setIsRegistering] = useState(false)
  const [error, setError] = useState("");
  const [heading, setHeading] = useState("Sign Up")

  const signup = async (data) => {
    setError("");
    setIsRegistering(true)
    try {
      const session = await authService.createAccount(data);
      if (session) {
        const user = await authService.getCurrentUser();
        if (user) {
          dispatch(storeLogin(user));
        }
        navigate("/");
        window.location.reload(false)
      }
    } catch (error) {
      setError(error.message);
    }
    setIsRegistering(false)
  };

  useEffect(() => {
    setHeading(isRegistering ? "Processing..." : "Sign Up")
  }, [isRegistering])

  return (
    <div className="rounded-lg shadow-2xl bg-slate-200 p-5 sm:w-2/3 md:w-1/2 m-auto">
      <div className="heading flex justify-center">
        <h1 className="font-semibold text-3xl my-7"> {heading} </h1>
      </div>
      <hr />
      <div className="form p-1 my-5">
        <form
          onSubmit={handleSubmit(signup)}
          className="px-7 m-5 flex flex-col items-center gap-7"
        >
          <Input
            type="name"
            label="Full Name"
            name="name"
            placeholder="Full Name"
            {...register("name", {
              required: true,
            })}
          />

          <Input
            type="email"
            label="Email"
            name="email"
            placeholder="Email"
            {...register("email", {
              required: true,
              validate: {
                matchPattern: (value) =>
                  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
                    value
                  ) || "Invalid email",
              },
            })}
          />

          <Input
            type="password"
            label="Password"
            name="password"
            placeholder="Password"
            {...register("password", {
              required: true,
              minLength: 8,
            })}
          />

          <Button
            className="text-white bg-green-500 rounded-lg p-2 w-1/3 my-5 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50 "
            type="submit"
            disabled={isRegistering}
          >
            Sign Up
          </Button>
          {error && <p className="text-red-500">{error}</p>}
        </form>
        <div className="signup flex justify-center py-4">
          <p>
            Already have an account?{" "}
            <span
              className="text-blue-500 cursor-pointer"
              onClick={() => navigate("/login")}
            >
              Log In
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
