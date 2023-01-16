import "./App.css";
// import Store from "./Store";
import Button from "./Button";
import Contact from "./Contact";
import Description from "./Description";
function App() {
  return (
    <div className="landing-page">
      <h2 className="header">CORNER BAKERY</h2>
      <div className="store">
        <Description />
        <Button className="enter-buttton" />
        <Contact />
      </div>{" "}
    </div>
  );
}

export default App;
