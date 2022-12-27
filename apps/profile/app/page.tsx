"use client";
import { useState } from "react";
import { useLmaoStore } from "../src/zustand/lmao";
import JokeList from "./JokeList";
import styles from "./lmao.module.css";
const LMAO = () => {
  const [isModalOpen, setModal] = useState(false);
  return (
    <div className={styles.parent}>
      <div
        className={isModalOpen ? styles.modal : "none"}
        onClick={() => setModal((v) => !v)}
      >
        <div
          className={styles.modalContent}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className={styles.modalCloseButtonContainer}>
            <button
              className={styles.modalCloseButton}
              onClick={() => setModal((v) => !v)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="32"
                height="32"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"
                  fill="rgba(155,89,182,1)"
                />
              </svg>
            </button>
          </div>
          <div className={styles.modalAvatarContainer}>
            <div className={styles.modalAvatar}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="32"
                height="32"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  d="M4.828 21l-.02.02-.021-.02H2.992A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H4.828zM20 15V5H4v14L14 9l6 6zm0 2.828l-6-6L6.828 19H20v-1.172zM8 11a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
                  fill="rgba(155,89,182,1)"
                />
              </svg>
            </div>
          </div>
          <div className={styles.modalUsernameContainer}>
            <div>
              <div className="center">
                <h1>Username</h1>
              </div>
              <form action="username">
                <input type="text" className={styles.usernameInput} />
                <div className="center">
                  <button className={styles.postButton}>POST</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>LMAO</h1>
      </div>
      <div className={styles.aboutContainer}>
        <h3>A place where you can find top-notch humor</h3>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.content}>
          <div className={styles.editorContainer}>
            <div className={styles.editor}>
              <textarea
                className={styles.textarea}
                placeholder="Write a joke..."
              ></textarea>
              <div className={styles.postButtonContainer}>
                <button
                  className={styles.postButton}
                  onClick={() => setModal((v) => !v)}
                >
                  POST
                </button>
              </div>
            </div>
          </div>
          <div className={styles.jokeListContainer}>
            <JokeList />
          </div>
        </div>
      </div>
    </div>
  );
};
export default LMAO;
