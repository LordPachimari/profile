"use client";
import { FormEvent, useState } from "react";
import { ulid } from "ulid";
import { useLmaoStore } from "../src/zustand/lmao";
import JokeList from "./JokeList";
import styles from "./lmao.module.css";
import Modal from "./Modal";
export const runtime = "nodejs";
const LMAO = () => {
  const [isModalOpen, setModal] = useState(false);
  const handleSubmit = () => {
    const textarea = document.getElementById("textarea");
    const content = textarea?.textContent;
    if (content) {
    }
  };
  return (
    <div className={styles.parent}>
      <Modal setModal={setModal} isModalOpen={isModalOpen} />
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
              <form action="submit a joke" onSubmit={handleSubmit}>
                <textarea
                  id="textarea"
                  className={styles.textarea}
                  placeholder="Write a joke..."
                ></textarea>
                <div className={styles.postButtonContainer}>
                  <button
                    type="submit"
                    className={styles.postButton}
                    // onClick={() => setModal((v) => !v)}
                  >
                    POST
                  </button>
                </div>
              </form>
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
