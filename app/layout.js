import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import "./globals.scss";

export const metadata = {
  title: "Akash Sarki",
  description:
    "Welcome to my Portfolio Website, As a fresh talent in the industry, I specialize in creating modern and responsive websites that are tailored to your unique needs. Check out my portfolio to see some of my latest projects and learn more about my skills and passion for web development. Contact me to discuss your project requirements and let's create something amazing together.",
  keywords:
    "portfolio ,Web Developer, Web Development, HTML, CSS, Javascript, ReactJS, NextJS, MongoDB, NodeJS, ExpressJS, Bootstrap, TailwindCSS, SASS, Git, Github",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
