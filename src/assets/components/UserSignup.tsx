const BASE_URL = import.meta.env.VITE_API_URL;

import axios from "axios";
import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "./Button";
import { FaX, FaEye, FaEyeSlash } from "react-icons/fa6";
import { toast } from "sonner";

type UserLoginProps = {
  onCancel: () => void;
  onLogin: () => void;
  onSignupSuccess: () => void;
};

const registerFormSchema = z
  .object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    userEmail: z.email("Invalid email address"),
    password: z
      .string()
      .min(8, "Password must be more than 8 characters")
      .regex(/[0-9]/, "Password must contain at least one number")
      .regex(/[A-Za-z]/, "Password must contain at least one letter"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type registerForm = z.infer<typeof registerFormSchema>;

const UserSignup = ({ onCancel, onLogin, onSignupSuccess }: UserLoginProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<registerForm>({
    resolver: zodResolver(registerFormSchema),
  });

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  const onSubmit: SubmitHandler<registerForm> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    try {
      const res = await axios.post(
        `${BASE_URL}/api/register`,
        {
          user_name: `${data.firstName} ${data.lastName}`,
          user_email: data.userEmail,
          user_password: data.password,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      if (res.data && res.data.success) {
        toast.success(res.data.message);
        console.log(res.data.message);
        onSignupSuccess();
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
            <button
              onClick={onLogin}
              className="text-primary hover:text-primary-dark cursor-pointer"
            >
              Login
            </button>{" "}
            | Signup
          </span>
        </header>
        <main className="py-5">
          <h4 className="font-bold text-xl mb-5 text-center">
            Welcome to Car<span className="text-primary">Hop</span>
          </h4>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full flex flex-col gap-2"
          >
            {errorMessage && (
              <div className="text-primary-light text-sm mb-2">
                {errorMessage}
              </div>
            )}
            <div className="form-group flex flex-row gap-2">
              <div className="w-3/5">
                <input
                  type="text"
                  {...register("firstName")}
                  className="w-full p-2 rounded-md border border-gray-900/20 bg-gray-50"
                  placeholder="First Name"
                />
                {errors.firstName && (
                  <p className="text-primary-light text-sm">
                    {errors.firstName.message}
                  </p>
                )}
              </div>
              <div className="w-2/5">
                <input
                  type="text"
                  {...register("lastName")}
                  className="w-full p-2 rounded-md border border-gray-900/20 bg-gray-50"
                  placeholder="Last Name"
                />
                {errors.lastName && (
                  <p className="text-primary-light text-sm">
                    {errors.lastName.message}
                  </p>
                )}
              </div>
            </div>

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
            <div className="relative form-group">
              <input
                type={showConfirmPassword ? "text" : "password"}
                {...register("confirmPassword")}
                className="p-2 w-full rounded-md border border-gray-900/20 bg-gray-50"
                placeholder="Confirm Password"
              />
              <button
                type="button"
                onClick={toggleConfirmPasswordVisibility}
                className="absolute right-4 top-[11px] text-gray-500"
              >
                {showConfirmPassword ? (
                  <FaEyeSlash size={20} />
                ) : (
                  <FaEye size={20} />
                )}
              </button>
            </div>
            {errors.confirmPassword && (
              <p className="text-primary-light text-sm">
                {errors.confirmPassword.message}
              </p>
            )}
            <Button
              disabled={isSubmitting ? true : false}
              label={isSubmitting ? "Loading..." : "Submit"}
              onClick={() => {}}
              className="mt-8"
            />
          </form>
        </main>
      </div>
    </div>
  );
};

export default UserSignup;
