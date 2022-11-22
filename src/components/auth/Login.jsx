import React , { useState, useEffect } from "react";
import {Link, useNavigate} from "react-router-dom";
import {url, login} from "../../api/Routes";
import { register, handleSubmit, useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import cookieCutter from 'cookie-cutter';
function Login() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm({ mode: "onChange" });
  const handleError = (errors) => { };
  const handleLogin =(data) => {
    fetch(`${url}${login}`,{
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: data.email,
        password: data.password,
      }),
    })
     .then(async(response) => {
      const responseData = await response.json();
      cookieCutter.set('jwt', responseData['jwt'], { expires: new Date(Date.now() + 86400) , path:"/"});
      cookieCutter.set('name', responseData['name'], { expires: new Date(Date.now() + 86400), path:"/" });
      if (response.status === 200)
      navigate('/debates');
  else
  {
   
  toast.error('Registration Unsuccesful', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark", 
    });
  }
    
    });
   };

   const registerOptions = {
    email: {
      required: "Email is required",
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: "invalid email address"
      }
    },
    password: {
      required: "Password is required",
      minLength: {
        value: 8,
        message: "Password must have at least 8 characters"
      }
    }
  };
  return (
    <div>
      <main className="main-content ">
        <div className="inner-container">
        <form onSubmit={handleSubmit(handleLogin, handleError)}>
          <section className="auth">
            <div className="auth__box">
              <h1 className="auth__box-header">Log in</h1>
              <div className="auth__box-header-hint">please login to take part in debates</div>

                <div className="auth__box-form-field">
                  <label htmlFor="session_email" className="auth__box-form-label">
                    Email address
                  </label>
                  <input
                    autoComplete="email"
                    autoFocus="autoFocus"
                    className="auth__box-form-input"
                    id="session_email"
                    maxLength="100"
                    name="session[email]"
                    placeholder="Enter your email"
                    required="required"
                    spellCheck="false"
                    type="email"
                    {...register('email', registerOptions.email)}
                  />
                </div>
                <small className="text-danger">
                  {errors?.email && errors.email.message}
                </small>
                <div className="auth__box-form-field">
                  <label htmlFor="session_password" className="auth__box-form-label">
                    Password
                  </label>
                  <input
                    autoComplete="current-password"
                    className="auth__box-form-input"
                    id="session_password"
                    name="session[password]"
                    placeholder="Enter your password"
                    required="required"
                    spellCheck="false"
                    type="password"
                    {...register('password', registerOptions.password)}
                  />
                </div>
                <small className="text-danger">
                  {errors?.email && errors.email.message}
                </small>
              
                <button
                  name="button"
                  type="submit"
                  className="button auth__box-submit-button"
                  data-has-loader="true"
                  data-disable-on-request="true"
                  data-enable-on-response="true"
                >
                  Log in
                </button>
            </div>
            
            <div className="auth__links">
              <p className="auth__link-sentence">
                <span className="auth__link-pretext">
                  Still don't have an account?
                </span>
                <Link to="/signup" className="auth__link">Sign up!</Link>
              </p>
              <p className="auth__link-sentence">
                <span className="auth__link-pretext"> Forgot your password? </span>
                  <Link to="reset" className="auth__link"> Reset it! </Link>
              </p>
             
            </div>
          </section>
          </form>
        </div>
      </main>
    </div>
  );
}

export default Login;
