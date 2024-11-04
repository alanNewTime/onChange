import { useState } from "react";

function OnChangeAndTags() {
  const [inputName, setInputName] = useState("");
  const [inputAge, setInputAge] = useState(0);
  const [selectedMajor, setSelectedMajor] = useState();

  const [submitedName, setSubmitedName] = useState("");
  const [submitedAge, setSubmitedAge] = useState(0);

  //MANAGING THE CHANGE IN THE INPUT TAGS
  const handleNameChange = (e) => {
    setInputName(e.target.value);
  };

  const handleAgeChange = (e) => {
    setInputAge(e.target.value);
  };

  const handleMajorChange = (e) => {
    setSelectedMajor(e.target.value);
  };

  //MANAGING THE SUBMIT BUTTONS  LINKED TO THE INPUT TAGS
  const handleSubmitName = () => {
    setSubmitedName(inputName);
    setInputName("");
  };

  const handleSubmitAge = () => {
    setSubmitedAge(inputAge);
    setInputAge(0);
  };

  return (
    <>
      <div>
        {/* STRING INPUT TAG START */}
        <p>
          <b>Name :</b> {submitedName}
        </p>
        <input
          type="text"
          value={inputName}
          onChange={handleNameChange}
          placeholder="Enter a name"
        />
        <button onClick={handleSubmitName}>Send</button>
        {/* STRING INPUT TAG END */}

        {/* NUMBER INPUT TAG START */}
        <p>
          <b>Age :</b> {submitedAge}
        </p>
        <input type="number" value={inputAge} onChange={handleAgeChange} />
        <button onClick={handleSubmitAge}>Send</button>
        {/* NUMBER INPUT TAG END */}

        {/* SELECT TAG START */}
        <div>
          <p>
            <b>Selected Major :</b> {selectedMajor}
          </p>
          <select value={selectedMajor} onChange={handleMajorChange}>
            <option value="">--Please choose a major--</option>
            <option value="Math">Math</option>
            <option value="Physics">Physics</option>
            <option value="Biology">Biology</option>
            <option value="Chemistry">Chemistry</option>
          </select>
        </div>
        {/* SELECT TAG END */}
      </div>
    </>
  );
}
export default OnChangeAndTags;
