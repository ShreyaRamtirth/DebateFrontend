import React from "react";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div>
      <main className="main-content ">
        <div className="inner-container">
          <section className="auth">
            <div className="auth__box">
              <h1 className="auth__box-header">Sign up</h1>
              <div className="auth__box-form-field">
                <label for="user_email" className="auth__box-form-label">
                  Email address
                </label>
                <input
                  autocomplete="email"
                  autofocus="autofocus"
                  className="auth__box-form-input"
                  id="user_email"
                  maxlength="100"
                  name="user[email]"
                  placeholder="Enter your email"
                  required="required"
                  spellcheck="false"
                  type="email"
                />
              </div>
              <div className="auth__box-form-field">
                <label for="user_username" className="auth__box-form-label">
                  Username
                </label>
                <input
                  autocomplete="username"
                  className="auth__box-form-input"
                  id="user_username"
                  maxlength="100"
                  name="user[username]"
                  placeholder="Enter your username"
                  required="required"
                  spellcheck="false"
                  type="text"
                />
              </div>
              <div className="auth__box-form-field">
                <label for="user_password" className="auth__box-form-label">
                  Password
                </label>
                <input
                  autocomplete="new-password"
                  className="auth__box-form-input"
                  id="user_password"
                  name="user[password]"
                  placeholder="Enter your password"
                  required="required"
                  type="password"
                />
              </div>
              <div className="auth__box-form-field">
                <label
                  for="user_password_confirmation"
                  className="auth__box-form-label"
                >
                  Password confirmation
                </label>
                <input
                  autocomplete="new-password"
                  className="auth__box-form-input"
                  id="user_password_confirmation"
                  name="user[password_confirmation]"
                  placeholder="Enter your password again"
                  required="required"
                  type="password"
                />
              </div>
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
        </div>
      </main>
    </div>
  );
}

export default SignUp;
