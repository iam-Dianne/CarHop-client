const BASE_URL = import.meta.env.VITE_API_URL;

import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, type SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FaX, FaEye, FaEyeSlash } from "react-icons/fa6";
import Button from "./Button";
import { toast } from "sonner";

type UserLoginProps = {
  onCancel: () => void;
  onSignup: () => void;
};

const loginFormSchema = z.object({
  userEmail: z.email("Invalid email address"),
  password: z.string(),
});

type loginForm = z.infer<typeof loginFormSchema>;

const UserLogin = ({ onCancel, onSignup }: UserLoginProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginForm>({
    resolver: zodResolver(loginFormSchema),
  });

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const onSubmit: SubmitHandler<loginForm> = async (data) => {
    try {
      const res = await axios.post(`${BASE_URL}/api/login`, {
        user_email: data.userEmail,
        user_password: data.password,
      });

      if (res.data && res.data.success) {
        // storing user token
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        // success messages
        toast.success(res.data.message);
        console.log(res.data.message);
        navigate("/");
        onCancel();
      } else {
        setErrorMessage(res.data.message);
      }
    } catch (err: any) {
      if (err.response) {
        setErrorMessage(err.response.data.message);
        console.error("Response:", err.response.data);
      } else if (err.request) {
        console.error("Request sent but no response");
      } else {
        console.error("An unexpected error occured: ", err);
      }
    }
  };

  return (
    <div className="fixed bg-black/40 flex items-center justify-center inset-0 z-[9999]">
      <div className=" text-gray-900 bg-gray-100 rounded-lg w-[360px] xl:w-[520px] py-6 px-5 shadow-lg  border-gray-800/20">
        <header className="relative flex items-center justify-center border-b border-gray-900/30 pb-3">
          <button onClick={onCancel} className="absolute cursor-pointer left-0">
            <FaX />
          </button>
          <span className="font-bold">
            Login |{" "}
            <button
              onClick={onSignup}
              className="text-primary hover:text-primary-dark cursor-pointer"
            >
              Signup
            </button>
          </span>
        </header>
        <main className="py-5">
          <h4 className="font-bold text-xl mb-5 text-center">
            Welcome to Car<span className="text-primary">Hop</span>
          </h4>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full flex flex-col gap-3"
          >
            {errorMessage && (
              <div className="text-primary-light text-sm mb-2">
                {errorMessage}
              </div>
            )}
            <div className="form-group">
              <input
                type="email"
                {...register("userEmail")}
                className="p-2 w-full rounded-md border border-gray-900/20 bg-gray-50"
                placeholder="Email"
              />
            </div>
            {errors.userEmail && (
              <p className="text-primary-light text-sm">
                {errors.userEmail.message}
              </p>
            )}
            <div className="relative form-group">
              <input
                type={showPassword ? "text" : "password"}
                {...register("password")}
                className="p-2 w-full rounded-md border border-gray-900/20 bg-gray-50"
                placeholder="Password"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-4 top-[11px] text-gray-500"
              >
                {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
              </button>
            </div>
            {errors.password && (
              <p className="text-primary-light text-sm">
                {errors.password.message}
              </p>
            )}
            <Button label="Login" onClick={() => {}} className="mt-8" />
          </form>
        </main>
      </div>
    </div>
  );
};

export default UserLogin;
