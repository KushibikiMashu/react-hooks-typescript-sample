import React, { useRef, useState, useCallback } from "react";

// useRef

const TextInput: React.FC = () => {
  const inputEl = useRef({} as any);
  const textareaEl = useRef({} as any);
  const [text, setText] = useState("this will be changed");
  const [height, setHeight] = useState(0);

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

  // You can get height of h1 when the node is mounted
  const measuredRef = useCallback(node => {
    if (node !== null) {
      setHeight(node.getBoundingClientRect().height);
    }
  }, []);

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
      <h1 ref={measuredRef}>Hello, world</h1>
      <h2>The above header is {Math.round(height)}px tall</h2>
    </>
  );
};

export default TextInput;
