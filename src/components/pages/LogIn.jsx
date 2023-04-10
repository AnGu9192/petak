import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import "./../styles/Useform.css";
import facebook from './../../assets/face-icon.png';
import google from './../../assets/google-icon.png';
import Logo from '../../assets/logo.png'



export default function LogIn() {
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
      <div className="useform__header-logo_login"><img src={Logo} alt={Logo} /></div>

      <form onSubmit={handleSubmit(onSubmit)} className="useform__header">
        <div className="form-title">
          <h1>Welcome Back</h1>
          <p>Log In</p>
        </div>
        <div className="form-control__text">
        {successMsg && <p className="success-msg">{successMsg}</p>}
        
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
          <label></label>
          <button type="submit" className="signup">Log In</button>
        </div>
        </div>

      </form>
      <div className="line__text">
        <h2 className="continue">or continue with</h2>
      </div>

    <div className="signup__footer">
        <div className="signup__footer-left"><a href=""><img src={facebook} alt={facebook} /></a></div>
        <div className="signup__footer-right"><a href=""><img src={google} alt={google} /></a></div>
    </div>
    <div>Don’t have an account yet?<a href="#" className="signup__link">Sign Up for free</a> </div>
    </div>
  );
}
