import React from "react";
import {Link} from "react-router-dom";

function Login() {
  return (
    <div>
      <main class="main-content ">
        <div class="inner-container">
          <section class="auth">
            <div class="auth__box">
              <h1 class="auth__box-header">Log in</h1>
              <div class="auth__box-header-hint">please login to take part in debates</div>

                <div class="auth__box-form-field">
                  <label for="session_email" class="auth__box-form-label">
                    Email address
                  </label>
                  <input
                    autocomplete="email"
                    autofocus="autofocus"
                    class="auth__box-form-input"
                    id="session_email"
                    maxlength="100"
                    name="session[email]"
                    placeholder="Enter your email"
                    required="required"
                    spellcheck="false"
                    type="email"
                  />
                </div>
                <div class="auth__box-form-field">
                  <label for="session_password" class="auth__box-form-label">
                    Password
                  </label>
                  <input
                    autocomplete="current-password"
                    class="auth__box-form-input"
                    id="session_password"
                    name="session[password]"
                    placeholder="Enter your password"
                    required="required"
                    spellcheck="false"
                    type="password"
                  />
                </div>
                <div class="auth__box-form-checkbox">
                  <label
                    for="session_remember_me"
                    class="auth__box-form-checkbox-label"
                  >
                  </label>
                </div>
                <button
                  name="button"
                  type="submit"
                  class="button auth__box-submit-button"
                  data-has-loader="true"
                  data-disable-on-request="true"
                  data-enable-on-response="true"
                >
                  Log in
                </button>
            </div>
            
            <div class="auth__links">
              <p class="auth__link-sentence">
                <span class="auth__link-pretext">
                  Still don't have an account?
                </span>
                <Link to="/signup" class="auth__link">Sign up!</Link>
              </p>
              <p class="auth__link-sentence">
                <span class="auth__link-pretext"> Forgot your password? </span>
                <a href="password-reset-requests/new.html" >
                  <Link to="reset" class="auth__link"> Reset it! </Link>
                </a>
              </p>
             
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Login;
