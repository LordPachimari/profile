import styles from "./lmao.module.css";
const Joke = () => {
  return (
    <div className={styles.joke}>
      <div className={styles.userComponent}>
        <div className={styles.avatarContainer}>
          <div className={styles.avatar}></div>
        </div>
        <div className={styles.usernameContainer}>
          <h3>Username</h3>
        </div>
        <div className={styles.timestamp}></div>
        <div className={styles.deleteContainer}>
          <button className={styles.deleteButton}></button>
        </div>
      </div>
      <div className={styles.jokeContent}></div>
    </div>
  );
};
export default Joke;
