import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Data from "./database/users.json";
import { useDispatch } from "react-redux";
import { authActions } from "./store/auth";

const Login = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    var name = document.myForm.name.value;
    var pass = document.myForm.password.value;
    Data.map((e) => {
      if (e.username === name && e.password === pass) {
        dispatch(authActions.login());
      } else {
        document.querySelector(".Alert").textContent =
          "Your Userid or Password is not correct. Please try again!";
        document.querySelector(".Alert").style.color = "red";
      }
    });
  };

  return (
    <>
      <section className="vh-100">
        <div className="container py-4 w-75">
          <form name="myForm" onSubmit={handleSubmit}>
            <div
              className="card bg-dark text-white"
              style={{ margin: "15% auto 0 auto" }}
            >
              <div className="card-body p-4 text-center">
                <div className="mb-md-5 mt-md-4 pb-2">
                  <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                  <p className="text-white-50 mb-4">
                    Please enter your Username and password!
                  </p>
                  <p className="Alert"></p>

                  <div className="form-outline form-white mb-4">
                    <input
                      type="text"
                      name="name"
                      className="form-control form-control-lg"
                      placeholder="Username"
                    />
                  </div>

                  <div className="form-outline form-white mb-4">
                    <input
                      type="password"
                      name="password"
                      className="form-control form-control-lg"
                      placeholder="Password"
                    />
                  </div>

                  <p className="small mb-3 pb-lg-2">
                    <a className="text-white-50" href="#!">
                      Forgot password?
                    </a>
                  </p>

                  <button
                    className="btn btn-outline-light btn-lg px-5"
                    type="submit"
                  >
                    Login
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
