import React from "react";
import styles from "../profile/profile.module.scss";
import male_icon from "../../assets/images/male_icon.webp";
function Profile() {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  return (
    <div className={styles.parent_wrapper}>
      <div className={styles.wrapper}>
        <section>
          {userInfo.map((user) => (
            <div>
              <img src={male_icon} alt="" />
              <strong>
                {user.firstName} {user.lastName}
              </strong>
              <p>{user.email}</p>
              <button>Edit</button>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}

export default Profile;
