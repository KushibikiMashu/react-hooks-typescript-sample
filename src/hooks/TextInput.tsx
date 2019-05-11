import React, { useRef, useState } from "react";

// useRef

const TextInput: React.FC = () => {
  const inputEl = useRef({} as any);
  const textareaEl = useRef({} as any);
  const [text, setText] = useState("this will be changed");

  const handleClickToFocus = () => {
    // `current` points to the mounted text input element
    inputEl.current.focus();
  };

  const toggleText = () => {
    if (textareaEl.current.value === "hello!") {
      textareaEl.current.value = "this will be changed";
      return;
    }
    textareaEl.current.value = "hello!";
  };

  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={handleClickToFocus}>Focus the input</button>
      <textarea
        ref={textareaEl}
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button onClick={toggleText}>toggle</button>
    </>
  );
};

export default TextInput;
