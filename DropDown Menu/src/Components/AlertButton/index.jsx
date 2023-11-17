import "../../index.css";
import image from "../../assets/This-is-a-test.jpg";
import { useState } from "react";

function AlertButton() {
  const [showImage, setShowImage] = useState(false);

  function handleClick() {
    setShowImage(!showImage);
  }

  return (
    <div className="buttons">
      <Button message="Button was clicked!">Test Button</Button>
      <button onClick={handleClick}>Image Button</button>
      {showImage && <img src={image} />}
    </div>
  );
}

// eslint-disable-next-line react/prop-types
function Button({ message, children }) {
  function handleClick(message) {
    alert(message);
  }

  return <button onClick={() => handleClick(message)}>{children}</button>;
}

export default AlertButton;
