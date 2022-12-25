import "./globals.css";
import styles from "./layout.module.css";
import Image from "next/image";
import profilePic from "../public/profilePic.jpg";
import ProjectLayout from "./ProjectLayout";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const imageStyle = {
    borderRadius: "50%",
  };
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <div className="wrapper">
          <div className="page">
            <div className={styles.layoutParent}>
              <div className={styles.margins}>
                <div className={styles.profileContainer}>
                  <div className={styles.profile}>
                    <div className={styles.avatarContainer}>
                      <Image
                        width={200}
                        height={200}
                        sizes="(max-width:768) 100px"
                        src={profilePic}
                        alt="profile picture"
                        style={imageStyle}
                        priority
                      />
                    </div>
                    <div className={styles.aboutContainer}>
                      <div className={styles.name}>
                        <h2>Ivan Nguyen</h2>
                      </div>
                      <div className={styles.about}>
                        Hi, I am Ivan (official name Thien). Born in Belarus in
                        2001. Reborn in 2019. Learned English at the age of 18.
                        Learned Programming at 21. Business major (muda). Tech
                        enthusiast.
                        <br />
                        <br />
                        #MentallyUndestructable #AnotherStupidHashTag
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.parent}>
                  <div>
                    <div className={styles.portfolioTitle}>
                      <h1>Porfolio</h1>
                    </div>
                    {/* <Overview /> */}
                    <ProjectLayout>{children}</ProjectLayout>

                    <div className="footer"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
