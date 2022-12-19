import React from "react";
import Header from "./Header.js";
import "./LandingPage.css";

export default function LandingPage() {
  const goToStore = (event) => {
    event.preventDefault();
    console.log(event);
  };

  return (
    <div className="landing-page">
      <Header />
      <button className="enter-button" onClick={goToStore}>
        Enter{" "}
      </button>
    </div>
  );
}
