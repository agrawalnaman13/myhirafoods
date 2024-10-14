import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { login } from "../apiServices/home/homeHttpService";
import { showAlert } from "./commonComponent/alertManager";
import { useAlert } from "react-alert";
import { RotatingLines } from "react-loader-spinner";

function Login() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });
  const [type, setType] = useState("password");
  const [loader, setLoader] = useState(false);
  const alert = useAlert();
  const navigate = useNavigate();

  const typeChange = () => {
    if (type === "password") setType("text");
    else {
      setType("password");
    }
  };

  const onSubmit = async (data) => {
    setLoader(true);
    const response = await login(data);
    if (!response.error) {
      console.log(response);
      localStorage.setItem("token-user", response.results.token);
      navigate("/welcome");
      showAlert(alert, response.message, { timeout: 3000 });
      setLoader(false);
      reset();
    } else {
      showAlert(alert, response.message, { timeout: 3000 });
      setLoader(false);
    }
  };

  return (
    <>
      <section className="login_page">
        <div className="container-fluid px-0">
          <div className="row justify-content-center">
            <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-10 col-11">
              <div className="login_top shadow">
                <div className="login_page_form">
                  <div className="row">
                    <div className="col-12 formheader mb-5 text-center">
                      <h1>Login</h1>
                      <p>Please enter your username and password</p>
                    </div>
                    <div className="col-12">
                      <form
                        className="row form-design"
                        onSubmit={handleSubmit(onSubmit)}
                      >
                        <div className="form-group col-12">
                          <label htmlFor>User Name</label>
                          <input
                            type="type"
                            className="form-control"
                            placeholder="Username"
                            name="userId"
                            id="userId"
                            {...register("userId", {
                              required: true,
                            })}
                          />

                          {errors?.userId && (
                            <p className="form-error mt-1">
                              This field is required
                            </p>
                          )}
                        </div>
                        <div className="form-group col-12 position-relative">
                          <label htmlFor>Password</label>
                          <input
                            type={type}
                            className="form-control"
                            placeholder="**********"
                            name="password"
                            id="password"
                            autoComplete="on"
                            {...register("password", {
                              required: "This field is required",
                              // pattern: {
                              //   value:
                              //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^])[A-Za-z\d@$!%*?&#^]{8,}$/,
                              //   message:
                              //     "Password must be 8 characters including one uppercase letter, one special character and alphanumeric characters",
                              // },
                            })}
                          />
                          <i
                            className={`fa eyepassword fa-eye${
                              type === "password" ? "-slash" : ""
                            }`}
                            onClick={() => typeChange()}
                          ></i>
                          {errors?.password && (
                            <p className="form-error">
                              {errors?.password?.message}
                            </p>
                          )}
                        </div>

                        <div className="form-group col-12 mb-0 mt-2">
                          <button
                            type="submit"
                            className="comman_btn"
                            disabled={loader}
                          >
                            {loader ? (
                              <div>
                                <span className="me-2">Wait</span>
                                <RotatingLines
                                  strokeColor="white"
                                  strokeWidth="5"
                                  animationDuration="0.75"
                                  width="20"
                                  visible={true}
                                />
                              </div>
                            ) : (
                              <span>Login</span>
                            )}
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
