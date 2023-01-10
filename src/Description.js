import React from "react";
import Button from "./Button";
import "./Description.css";
function Description() {
  return (
    <div className="description-component">
      <section className="description">
        Our freshly made cookies will make every house smell like home
      </section>
      <Button className="enter-buttton" />
    </div>
  );
}

export default Description;
