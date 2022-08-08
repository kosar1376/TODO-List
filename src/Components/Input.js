import React from "react";
import styles from "./Input.module.css";
import Plus from "../Logos/Plus.svg";

const Input = ({ inputText, setInputtext, tasks, setTasks,error,setError }) => {
  const InputHandeler = (event) => {
    setInputtext(event.target.value);
  };

  const ClickHandelerSubmit = (e) => {
    e.preventDefault();
    if (inputText) {
      setTasks([...tasks, { text: inputText, done: false, id: Date.now() }]);
      setInputtext("");
      setError("")

    } else {
      setError("plese enter a task !!");
    }
  };

  return (
    <div className={styles.inputContainer}>
      <input
        type={"text"}
        className={styles.todoinput}
        value={inputText}
        onChange={InputHandeler}
      />

      <button
        className={styles.inputbutton}
        type="submit"
        onClick={ClickHandelerSubmit}
      >
        <img src={Plus} className={styles.inputlogo} alt="plus" />
      </button>
    </div>
  );
};

export default Input;
