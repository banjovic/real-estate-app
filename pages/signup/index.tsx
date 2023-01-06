import React, { useState } from "react";
import { Formik } from "formik";
import { useRouter } from "next/router";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import Image from "next/image";

import styles from "../../styles/authStyles/auth.module.scss";
import { auth, provider } from "../../config/firebase";
import { useModal } from "../../components/modals/useModal";
import BaseModal from "../../components/modals/BaseModal/BaseModal";
import ButtonSpinner from "../../components/ButtonSpinner/ButtonSpinner";

import HomeIcon from "../../assets/svg/house.svg";
import { BsArrowLeft } from "react-icons/bs";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import OneCircle from "../../assets/images/one-circle.png";
import TwoCircles from "../../assets/images/two-circles.png";
import LoadingSVG from "../../assets/illustration/Illustration 2.png";
import SuccessSVG from "../../assets/illustration/Illustration 3.png";

type Props = {};

type MyFormValues = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  confirmPassword: string;
};

const SignUp = (props: Props) => {
  const router = useRouter();
  const initialValues: MyFormValues = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    confirmPassword: "",
  };
  const [visible, setVisible] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const { modalIsOpen, setIsOpen } = useModal();
  const { modalIsOpen: modalIsOpen0, setIsOpen: setIsOpen0 } = useModal();

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

  const onClickLogin = () => {
    router.push("/login");
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
              Securely apply and pay for an apartment.
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
            <h2>Create an Account</h2>

            <div>
              Already created an account?{" "}
              <span onClick={onClickLogin}>Log In</span>
            </div>
          </div>

          <div className={styles["signup-content-auth-action-wrapper"]}>
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
          </div>

          <div className={styles["form-wrapper"]}>
            <Formik
              initialValues={initialValues}
              validate={(values: MyFormValues) => {
                const errors: any = {};
                if (!values.firstName) {
                  errors.firstName = "First Name is Required";
                }
                if (!values.lastName) {
                  errors.lastName = "Last Name is Required";
                }
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
                if (!values.confirmPassword) {
                  errors.confirmPassword = "Confirm Password is required";
                } else if (values.confirmPassword.length < 8) {
                  errors.confirmPassword =
                    "Confirm Password must be at least 8 characters";
                } else if (values.confirmPassword !== values.password) {
                  errors.confirmPassword = "Passwords do not match";
                }
                return errors;
              }}
              onSubmit={async (values, { setSubmitting }) => {
                try {
                  // setLoading(true);
                  setIsOpen(true);
                  setTimeout(() => {
                    // setIsOpen(true);
                    alert("Account created successfully");
                  }, 50000);
                  setIsOpen(false);

                  // setIsOpen0(true);

                  // const { user } = await createUserWithEmailAndPassword(
                  //   auth,
                  //   values.email,
                  //   values.password
                  // );

                  // setLoading(false);
                  // router.push("/dashboard");
                } catch (error: any) {
                  // setIsOpen(false);
                  // setLoading(false);
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
                      <label>First Name</label>

                      <input
                        type="text"
                        name="firstName"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.firstName}
                        placeholder="First Name"
                        required
                        className={
                          errors.firstName
                            ? styles["email-input-error"]
                            : styles["email-input-field"]
                        }
                      />
                      {errors.firstName && (
                        <span className={styles["error"]}>
                          {errors.firstName}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className={styles["form-input-wrapper"]}>
                    <div>
                      <label>Last Name</label>

                      <input
                        type="text"
                        name="lastName"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.lastName}
                        placeholder="Last Name"
                        required
                        className={
                          errors.lastName
                            ? styles["email-input-error"]
                            : styles["email-input-field"]
                        }
                      />
                      {errors.lastName && (
                        <span className={styles["error"]}>
                          {errors.lastName}
                        </span>
                      )}
                    </div>
                  </div>

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
                  </div>

                  <div className={styles["form-input-wrapper"]}>
                    <div>
                      <label>Confirm Password</label>

                      <div
                        className={
                          errors.confirmPassword
                            ? styles["input-error"]
                            : styles["input-icon-container"]
                        }
                      >
                        <input
                          type={visible ? "text" : "password"}
                          placeholder="********"
                          name="confirmPassword"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.confirmPassword}
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
                      {errors.confirmPassword && (
                        <span className={styles["error"]}>
                          {errors.confirmPassword}
                        </span>
                      )}
                    </div>

                    <div className={styles["login-footnotes"]}>
                      <input type="checkbox" name="promotion" />
                      <label htmlFor="" className={styles["check-title"]}>
                        Yes, I want to receive promotional E-mails and
                        Newsletter
                      </label>
                    </div>
                  </div>

                  <div className={styles["login-btn"]}>
                    <div>
                      <button type="submit">Create Account</button>
                    </div>

                    <div className={styles["signup-btn-subtext"]}>
                      By signing up, you agree to our&nbsp;
                      <span>Privacy Policy</span>&nbsp;and&nbsp;
                      <span>Terms of Service</span>
                    </div>
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </div>

        <div className={styles["footer-down-section"]}>
          © 2021. Safe Haven All rights reserved.&nbsp;
          <span>Privacy Policy</span> &nbsp;|&nbsp;
          <span>Cookies Policy</span>
        </div>
      </div>

      <BaseModal
        headerText=""
        showModal={modalIsOpen}
        setShowModal={setIsOpen}
        headerPosition="center"
        backgroundColor="#FFFFFF"
      >
        <div className={styles["loading-state-modal"]}>
          <div className={styles["loading-image"]}>
            <Image src={LoadingSVG} alt="loading" width={318} height={193} />
          </div>
          <div className={styles["loading-text"]}>
            Setting up your account...
          </div>
          <div style={{ height: "60px", position: "relative" }}>
            <ButtonSpinner spinnerColor="#40196d" spinnerWidth="20px" />
          </div>
        </div>
      </BaseModal>

      <BaseModal
        headerText=""
        showModal={modalIsOpen0}
        setShowModal={setIsOpen0}
        headerPosition="center"
        backgroundColor="#FFFFFF"
      >
        <div className={styles["loading-state-modal"]}>
          <div className={styles["loading-image"]}>
            <Image src={SuccessSVG} alt="loading" width={318} height={193} />
          </div>
          <div className={styles["loading-text"]}>
            Your account has been created successfully!
          </div>
          <div style={{ height: "60px", position: "relative" }}>
            <ButtonSpinner spinnerColor="#40196d" spinnerWidth="20px" />
          </div>
        </div>
      </BaseModal>
    </div>
  );
};

export default SignUp;
