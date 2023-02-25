import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { useState, useEffect } from "react";

export default function App({ Component, pageProps }) {
  const [colorChange, setColorChange] = useState(false);
  const changeNavbarColor = () => {
    if (typeof window !== "undefined" && window.scrollY >= 0) {
      setColorChange(true);
    } else {
      setColorChange(false);
    }
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", changeNavbarColor);
    }
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", changeNavbarColor);
      }
    };
  }, []);

  return (
    <>
      <Navbar color={colorChange} />
      <Component {...pageProps} />
    </>
  );
}
