// In React, the onChange method is typically used as an event handler for form elements like
// <input>, <textarea>, and <select>. It captures user input and updates the component’s state accordingly.
import { useState } from "react";

function OnChangeIntro() {
  const [inputValue, setInputValue] = useState("");

  //this is called every time i change the value of the input tag
  //in our case it takes the printed value and saves it in the variable "inputValue"
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  //this is called every time i click the send button
  const handleSubmit = () => {
    console.log(inputValue);

    //this empties the input tag after we send the value
    setInputValue("");
  };

  return (
    <>
      <div>
        <input type="text" value={inputValue} onChange={handleChange} />
        <button onClick={handleSubmit}>Send</button>
      </div>
    </>
  );
}

export default OnChangeIntro;

// Here's a quick summary of how it works:

// 1- EVENT HANDLING: The onChange event is triggered whenever the value of an input field changes.
// This could be due to user typing, selecting an option, or changing a checkbox.

// 2- STATE MANAGEMENT: In a functional component, you often use the useState hook to manage the input's state.
//  When the onChange event occurs, you update the state with the new value.

// 3- handleSubmit Function: This function logs the input value to the console (or you could replace that with any action,
// such as an API call to send the data). After sending, it can also reset the input field if desired.
