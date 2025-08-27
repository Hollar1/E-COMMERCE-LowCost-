import { useState } from "react";
import styles from "../login/login.module.scss";
import { useNavigate } from "react-router-dom";
import SuccessModal from "../../components/successModal/SuccessModal";
import FailedModal from "../../components/failedModal/FailedModal";

function Login() {
  const navigate = useNavigate();
  const [successModal, setSuccessModal] = useState(null);
  const [failedModal, setFailedModal] = useState(null);
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  const userEmail = userInfo?.map((user_email) => user_email.email);

  const userPassword = userInfo?.map((user_password) => user_password.password);

  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setLoginDetails((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (
      userEmail == loginDetails.email &&
      userPassword == loginDetails.password
    ) {
      setSuccessModal("Login Successfully");
      localStorage.setItem("userEmail", userEmail);
      localStorage.setItem("userPassword", userPassword);
      setTimeout(() => {
        setSuccessModal(null);
        navigate("/");
      }, 4000);
    } else {
      setFailedModal("Wrong email or password");
      setTimeout(() => {
        setFailedModal(null);
      }, 4000);
    }
  };

  return (
    <div className={styles.wrapper}>
      {successModal && <SuccessModal head={"Success!"} body={successModal} />}
      {failedModal && <FailedModal head={"Failed"} body={failedModal} />}
      <div className={styles.wrapper}>
        <form onSubmit={handleLogin}>
          <label htmlFor="">
            Email:
            <input
              type="text"
              value={loginDetails.email}
              name="email"
              onChange={handleOnChange}
            />
          </label>

          <label htmlFor="">
            Password:
            <input
              type="text"
              value={loginDetails.password}
              name="password"
              onChange={handleOnChange}
            />
          </label>

          <label>
            <button type="submit">Login</button>
          </label>

          <div>
            <p>
              Don't have an account{" "}
              <button
                onClick={() => {
                  navigate("/sign-up");
                }}
              >
                Sign-Up
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
