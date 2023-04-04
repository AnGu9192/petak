import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import "./Useform.css";

export default function Useform() {
  const [successMsg, setSuccessMsg] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();


  // handle password eye
  const [passwordEye, setPasswordEye] = useState(false);

  const handlePasswordClick = () => {
    setPasswordEye(!passwordEye);
  };

   // handle confirm password eye
   const [confirmPasswordEye, setConfirmPasswordEye] = useState(false);

   const handleConfirmPasswordClick = () => {
     setConfirmPasswordEye(!confirmPasswordEye);
   };

//    check password event 
const password = watch('password')
  const onSubmit = (data) => {
    console.log(data);
    setSuccessMsg("User registration is successful.");
    reset();
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-title">
          <h1>Welcome</h1>
          <p>Sign Up</p>
        </div>
        {successMsg && <p className="success-msg">{successMsg}</p>}
        <div className="form-control">
          <label>First Name</label>
          <input
            type="text"
            {...register("username", {
              required: "First name is required.",
            })}
            placeholder="Type your first name "
          />
          {errors.username && (
            <p className="errorMsg">{errors.username.message}</p>
          )}
        </div>
        <div className="form-control">
          <label>Email</label>
          <input
            type="text"
            {...register("email", {
              required: "Please, enter your email address",
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: "An email address is invalid (continue the domain portion after an “@” ).",
              },
            })}
            placeholder="username@gmail.com"
          />
          {errors.email && <p className="errorMsg">{errors.email.message}</p>}
        </div>
        <div className="form-control">
        <label>Password</label>
          <input
            type={passwordEye === false ? "password" : "text"}
            placeholder="Password"
           
            name="password"
            {...register("password", {
              required: "You must specify a password",
              minLength: {
                value: 6,
                message: "Password must have at least 6 characters"
              }
            })}
          />
          {errors.password && (
            <span className="errorMsg">
              {errors.password.message}
            </span>
          )}

          <div className="eye-password">
            {passwordEye === false ? (
              <AiFillEyeInvisible onClick={handlePasswordClick} />
            ) : (
              <AiFillEye onClick={handlePasswordClick} />
            )}
          </div>
        </div>
          
        <div className="form-control">
        <label>Confirm Password</label>
            <input
              type={confirmPasswordEye === false ? "password" : "text"}
              placeholder="Confirm"
              onPaste={(e) => {
                e.preventDefault();
                return false;
              }}
              className={`w-full h-14 rounded-lg ${
                errors.confirmPassword &&
                "focus:border-red-500 focus:ring-red-500 border-red-500"
              } `}
              {...register("confirmPassword", {
                required: "Confirm password is required",
                validate: (value) =>
                  value === password || "Sorry, passwords do NOT match.",
              })}
            />
            {errors.confirmPassword && (
              <span className="errorMsg">
                {errors.confirmPassword.message}
              </span>
            )}

            <div className="eye-confirm">
              {passwordEye === false ? (
                <AiFillEyeInvisible onClick={handleConfirmPasswordClick} />
              ) : (
                <AiFillEye onClick={handleConfirmPasswordClick} />
              )}
            </div>
          </div>

        <div className="form-control">
          <label></label>
          <button type="submit">Sign Up</button>
        </div>
      </form>
      <div>
        <h2 className="continue"><span>or continue with</span></h2>
      </div>
    </div>
  );
}
