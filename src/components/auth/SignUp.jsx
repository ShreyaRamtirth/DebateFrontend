import React from "react";
import { Link, useNavigate  } from "react-router-dom";
import {  register,handleSubmit, useForm } from 'react-hook-form';
import {url, signup} from "../../api/Routes";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SignUp() {
  const { register, handleSubmit, formState: { errors }, watch } = useForm({ mode: "onChange" });
  const navigate = useNavigate();
  const handleRegister= async (data) => {
    const response = await fetch(`${url}${signup}`,{
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        'email': data.email,
        'name': data.name,
        'password': data.password,
      }),
    })
     .then((response) => {
      if (response.status === 200)
          navigate('/login');
      else
      {
        console.log(response.json());
      toast.error('Registration Unsuccesful due to user already found', {
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

   const handleError = (errors) => { };
    const registerOptions = {
        name: {
            required: "name is required",
            pattern: {
                value: /^[a-zA-Z ]+$/,
                message: "Invalid name. only character values allowed."
            }
        },
        email: {
            required: "Email is required",
            pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "invalid email address"
            }
        },
        password: {
            required: "Password is required",
            pattern: {
                value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/,
                message: "Password must contain uppercase, lowercase & number"
            },
            minLength: {
                value: 8,
                message: "Password must have at least 8 characters"
            }
        },
        confirmpass: {
            required: "Confirm Password is required",
            validate: (val) => {
              if (watch('password') != val) {
                return "Password is not matching"
              }
            },
           }
    };
  return (
    <div>
      <main className="main-content ">
        <div className="inner-container">
        <ToastContainer />
        <form onSubmit={handleSubmit(handleRegister, handleError)}>
          <section className="auth">
            <div className="auth__box">
              <h1 className="auth__box-header">Sign up</h1>
              <div className="auth__box-form-field">
                <label htmlFor="user_email" className="auth__box-form-label">
                  Email address
                </label>
                <input
                  autoComplete="email"
                  autoFocus="autofocus"
                  className="auth__box-form-input"
                  id="user_email"
                  maxLength="100"
                  name="user[email]"
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
                <label htmlFor="user_username" className="auth__box-form-label">
                  Name
                </label>
                <input
                  autoComplete="username"
                  className="auth__box-form-input"
                  id="user_username"
                  maxLength="100"
                  name="user[username]"
                  placeholder="Enter your username"
                  required="required"
                  spellCheck="false"
                  type="text"
                  {...register('name', registerOptions.name)}
                />
              </div>
              <small className="text-danger">
                {errors?.name && errors.name.message}
              </small>
              <div className="auth__box-form-field">
                <label htmlFor="user_password" className="auth__box-form-label">
                  Password
                </label>
                <input
                  autoComplete="new-password"
                  className="auth__box-form-input"
                  id="user_password"
                  name="user[password]"
                  placeholder="Enter your password"
                  required="required"
                  type="password"
                  {...register('password', registerOptions.password)}
                />
              </div>
              <small className="text-danger">
                  {errors?.password && errors.password.message}
              </small>
              <div className="auth__box-form-field">
                <label
                  htmlFor="user_password_confirmation"
                  className="auth__box-form-label"
                >
                  Password confirmation
                </label>
                <input
                  autoComplete="new-password"
                  className="auth__box-form-input"
                  id="user_password_confirmation"
                  name="user[password_confirmation]"
                  placeholder="Enter your password again"
                  required="required"
                  type="password"
                  {...register('confirmpass', registerOptions.confirmpass)}
                />
              </div>
              <small className="text-danger">
                {errors?.confirmpass && errors.confirmpass.message}
            </small>
              <button
                name="button"
                type="submit"
                className="button auth__box-submit-button"
                data-has-loader="true"
                data-disable-on-request="true"
                data-enable-on-response="true"
              >
                Sign up
              </button>
            </div>
            <div className="auth__links">
              <p className="auth__link-sentence">
                <span className="auth__link-pretext">Already signed up?</span>
                <Link to="login">Log in!</Link>
              </p>
            </div>
          </section>
          </form>
        </div>
      </main>
    </div>
  );
}

export default SignUp;
