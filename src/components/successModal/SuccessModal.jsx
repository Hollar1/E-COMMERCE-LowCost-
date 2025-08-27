import React from "react";
import styles from "../successModal/successModal.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
function SuccessModal({head,body}) {
  return (
    <div className={styles.wrapper}>
      <section>
        <header>{head}</header>
        <p>
        {body}<FontAwesomeIcon icon={faThumbsUp} />
        </p>
      </section>
    </div>
  );
}

export default SuccessModal;
