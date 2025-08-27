import { useState } from "react";
import styles from "../login/login.module.scss";
import { useNavigate } from "react-router-dom";
import SuccessModal from "../../components/successModal/SuccessModal";
import FailedModal from "../../components/failedModal/FailedModal";
function SignUp() {
  const navigate = useNavigate();
  const [successModal, setSuccessModal] = useState(null);
  const [failedModal, setFailedModal] = useState(null);
  const [signUpDetails, setSignUpDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [storeSignUpDetails, setStoreSignUpDetails] = useState([]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setSignUpDetails((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (
      signUpDetails.firstName === "" ||
      signUpDetails.lastName === "" ||
      signUpDetails.email === "" ||
      signUpDetails.password === ""
    ) {
      setFailedModal("All fields required");
      setTimeout(() => {
        setFailedModal(null);
      }, 4000);
    } else if (signUpDetails.password < 8) {
      setFailedModal("Password must be at least eight(8) character long");
      setTimeout(() => {
        setFailedModal(null);
      }, 4000);
    } else if (signUpDetails.password.includes(" ")) {
      setFailedModal("password cannot include space");
      setTimeout(() => {
        setFailedModal(null);
      }, 4000);
    } else {
      try {
        const newUserList = [...storeSignUpDetails, signUpDetails];
        setStoreSignUpDetails(newUserList);
        localStorage.setItem("userInfo", JSON.stringify(newUserList));

        setSuccessModal("Sign-Up Successfully");
        setTimeout(() => {
          setSuccessModal(false);
          navigate("/");
        }, 4000);
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <div className={styles.wrapper}>
      {successModal && <SuccessModal head={"Success!"} body={successModal} />}
      {failedModal && <FailedModal head={"Failed"} body={failedModal} />}
      <div className={styles.wrapper}>
        <form onSubmit={handleSignUp}>
          <label htmlFor="">
            First Name:
            <input
              type="text"
              value={signUpDetails.firstName}
              name="firstName"
              onChange={handleOnChange}
            />
          </label>

          <label htmlFor="">
            {" "}
            Last Name:
            <input
              type="text"
              value={signUpDetails.lastName}
              name="lastName"
              onChange={handleOnChange}
            />
          </label>

          <label htmlFor="">
            Email:
            <input
              type="text"
              value={signUpDetails.email}
              name="email"
              onChange={handleOnChange}
            />
          </label>

          <label htmlFor="">
            Password:
            <input
              type="text"
              value={signUpDetails.password}
              name="password"
              onChange={handleOnChange}
            />
          </label>

          <label>
            <button type="submit">Sign-Up</button>
          </label>

          <div>
            <p>
              Already have an account{" "}
              <button
                onClick={() => {
                  navigate("/login");
                }}
              >
                Login
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
