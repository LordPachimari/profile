import "./globals.css";
import Overview from "./Overview";
import styles from "./page.module.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
            <div className="layoutParent">
              <div className="margins">
                <div className="pageTitleContainer">
                  <h1>Profile</h1>
                </div>
                <div className="profileContainer">
                  <div className="profile">
                    <div className="avatarContainer">
                      <div className="avatar"></div>
                    </div>
                    <div className="aboutContainer">
                      <div className="name"></div>
                      <div className="about"></div>
                    </div>
                  </div>
                </div>
                <div className="parent">
                  <div>
                    <div className="projectTitleContainer">
                      <h1>Fun projects</h1>
                    </div>
                    <Overview />

                    <div className="projectsContainer">
                      <div className="projects">
                        <div className="list"></div>
                        <div className="project">{children}</div>
                      </div>
                    </div>
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
