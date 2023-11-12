import "../../index.css";

function AlertButton() {
  return (
    <div className="buttons">
      <Button message="Button 01">Button 01</Button>
      <Button message="Button 02">Button 02</Button>
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
