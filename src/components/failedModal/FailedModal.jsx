import React from "react";
import styles from "../failedModal/failedModal.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faThumbsDown } from "@fortawesome/free-solid-svg-icons";
function FailedModal({ head, body }) {
  return (
    <div className={styles.wrapper}>
      <section>
        <header>{head}</header>
        <p>
          {body}
          <FontAwesomeIcon icon={faThumbsDown} />
        </p>
      </section>
    </div>
  );
}

export default FailedModal;
