"use client";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./layout.module.css";

import { useState } from "react";
import LMAO from "./page";

const inter = Inter({ subsets: ["latin"] });

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isFullScreen, toggleFullScreen] = useState(false);
  console.log("isFullScreen", isFullScreen);
  const toggleDarkMode = () => {
    const theme = localStorage.getItem("theme");
    if (!theme) {
      localStorage.setItem("theme", "dark");

      document.documentElement.setAttribute("data-theme", "dark");
    }

    document.documentElement.setAttribute(
      "data-theme",
      theme === "dark" ? "light" : "dark"
    );
    localStorage.setItem("theme", theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <div className={styles.overviewContainer}>
        <div className={styles.darkThemeContainer}>
          <button className={styles.darkThemeToggle} onClick={toggleDarkMode}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M10 7a7 7 0 0 0 12 4.9v.1c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2h.1A6.979 6.979 0 0 0 10 7zm-6 5a8 8 0 0 0 15.062 3.762A9 9 0 0 1 8.238 4.938 7.999 7.999 0 0 0 4 12z" />
            </svg>
          </button>
        </div>
        <div className={styles.overview}></div>
      </div>
      <div
        className={
          isFullScreen
            ? styles.projectsContainerFullScreen
            : styles.projectsContainer
        }
      >
        <div
          className={isFullScreen ? styles.projectsFullScreen : styles.projects}
        >
          <div
            className={isFullScreen ? styles.listFullScreen : styles.list}
          ></div>

          <div
            className={isFullScreen ? styles.projectFullScreen : styles.project}
          >
            <div className={styles.windowButtonContainer}>
              <button className={styles.windowBurgerButton}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="32"
                  height="32"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z"
                    fill="rgba(0,0,0,1)"
                  />
                </svg>
              </button>
              <button
                className={styles.windowFullScreenButton}
                onClick={() => toggleFullScreen((v) => !v)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="32"
                  height="32"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M20 3h2v6h-2V5h-4V3h4zM4 3h4v2H4v4H2V3h2zm16 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z" />
                </svg>
              </button>
            </div>

            {children}
          </div>
        </div>
      </div>
    </>
  );
}
