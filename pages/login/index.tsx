import React, { useState } from "react";
import { useRouter } from "next/router";
import { Formik } from "formik";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import Image from "next/image";

import styles from "../../styles/authStyles/auth.module.scss";
import { auth, provider } from "../../config/firebase";

import HomeIcon from "../../assets/svg/house.svg";
import { BsArrowLeft } from "react-icons/bs";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import OneCircle from "../../assets/images/one-circle.png";
import TwoCircles from "../../assets/images/two-circles.png";

type Props = {};

type MyFormValues = {
  email: string;
  password: string;
};

const Login = (props: Props) => {
  const router = useRouter();
  const initialValues: MyFormValues = {
    email: "",
    password: "",
  };
  const [visible, setVisible] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const SignInWithGoogle = async () => {
    try {
      console.log("google sign in");
      return;
      await signInWithPopup(auth, provider);
      router.push("/dashboard");
    } catch (error: any) {
      console.log("error", error);
      alert(error.message);
    }
  };

  const onClickCreateAccount = () => {
    router.push("/signup");
  };

  const onClickReset = () => {
    console.log("reset password");
  };

  return (
    <div className={styles["auth-wrapper"]}>
      <div className={styles["auth-image-wrapper"]}>
        <div className={styles["image-wrapper"]}>
          <div className={styles["logo-wrapper"]}>
            <h1>Safe</h1>
            <span>H</span>
            <HomeIcon />
            <h1>ven</h1>
          </div>

          <ul>
            <li>
              Securely link up with potential roommates.
              <Image src={OneCircle} alt="circle" width={40} height={40} />
            </li>
            <li>Host your space.</li>
            <li>Send roommate requests.</li>
            <li>View rooommate requests.</li>
            <li>
              Securely apply and pay for an apartment.{" "}
              <Image
                src={TwoCircles}
                alt="circle"
                width={87}
                height={50}
                className={styles["two-circles"]}
              />
            </li>
          </ul>
        </div>

        <div
          className={styles["auth-image-footer"]}
          onClick={() => router.push("/")}
        >
          <BsArrowLeft />
          <div>Go back</div>
        </div>
      </div>

      <div className={styles["auth-content-wrapper"]}>
        <div className={styles["auth-main"]}>
          <div className={styles["signup-content-auth-title"]}>
            <h2>Log In</h2>
          </div>

          {/* <div className={styles["signup-content-auth-action-wrapper"]}>
            <div
              className={styles["signup-content-auth-action"]}
              onClick={SignInWithGoogle}
            >
              <FcGoogle />
              <div>Continue with Google</div>
            </div>

            <div className={styles["signup-content-auth-action-option"]}>
              <div className={styles["auth-line"]}></div>
              <div>OR</div>
              <div className={styles["auth-line"]}></div>
            </div>
          </div> */}

          <div className={styles["form-wrapper"]}>
            <Formik
              initialValues={initialValues}
              validate={(values: MyFormValues) => {
                const errors: any = {};
                if (!values.email) {
                  errors.email = "Email is required";
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = "Invalid email address";
                }
                if (!values.password) {
                  errors.password = "Password is required";
                } else if (values.password.length < 8) {
                  errors.password = "Password must be at least 8 characters";
                  // Firebase password length is 6 characters - default
                }

                return errors;
              }}
              onSubmit={async (values, { setSubmitting }) => {
                try {
                  setLoading(true);
                  const { user } = await createUserWithEmailAndPassword(
                    auth,
                    values.email,
                    values.password
                  );
                  setLoading(false);
                  router.push("/dashboard");
                } catch (error: any) {
                  setLoading(false);
                  console.log("error", error.message);
                  alert(error.message);
                }
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                isValid,
                dirty,
              }) => (
                <form onSubmit={handleSubmit}>
                  <div className={styles["form-input-wrapper"]}>
                    <div>
                      <label>E-mail address</label>

                      <input
                        type="email"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        placeholder="Email"
                        required
                        className={
                          errors.email
                            ? styles["email-input-error"]
                            : styles["email-input-field"]
                        }
                      />
                      {errors.email && (
                        <span className={styles["error"]}>{errors.email}</span>
                      )}
                    </div>
                  </div>

                  <div className={styles["form-input-wrapper"]}>
                    <div>
                      <label>Password</label>

                      <div
                        className={
                          errors.password
                            ? styles["input-error"]
                            : styles["input-icon-container"]
                        }
                      >
                        <input
                          type={visible ? "text" : "password"}
                          placeholder="********"
                          name="password"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.password}
                          required
                        />
                        <span onClick={() => setVisible(!visible)}>
                          {visible ? (
                            <AiOutlineEye />
                          ) : (
                            <AiOutlineEyeInvisible />
                          )}
                        </span>
                      </div>
                      {errors.password && (
                        <span className={styles["error"]}>
                          {errors.password}
                        </span>
                      )}
                    </div>

                    <div className={styles["login-footnotes"]}>
                      <input type="checkbox" name="remember" />
                      <label htmlFor="" className={styles["check-title"]}>
                        Remember me
                      </label>
                    </div>
                  </div>

                  <div className={styles["login-btn"]}>
                    <div>
                      <button type="submit">
                        {loading ? "Loading..." : "Log In"}
                      </button>
                    </div>

                    <div className={styles["login-btn-subtext"]}>
                      <div>
                        Don’t have an account yet?{" "}
                        <span onClick={onClickCreateAccount}>Sign Up</span>
                      </div>

                      <div>
                        Forgot your Password?{" "}
                        <span onClick={onClickReset}>Click here</span> to reset.
                      </div>
                    </div>
                  </div>
                </form>
              )}
            </Formik>
          </div>

          <div className={styles["signup-content-auth-action-wrapper"]}>
            <div className={styles["signup-content-auth-action-option"]}>
              <div className={styles["auth-line"]}></div>
              <div>OR</div>
              <div className={styles["auth-line"]}></div>
            </div>

            <div
              className={styles["signup-content-auth-action"]}
              onClick={SignInWithGoogle}
            >
              <FcGoogle />
              <div>Continue with Google</div>
            </div>
          </div>
        </div>

        <div className={styles["footer-down-section"]}>
          © 2021. Safe Haven All rights reserved.&nbsp;
          <span>Privacy Policy</span> &nbsp;|&nbsp; <span>Cookies Policy</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
