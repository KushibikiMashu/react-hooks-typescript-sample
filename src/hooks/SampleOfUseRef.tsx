import React, { useRef, useState, useCallback } from "react";

// useRef

const FocusedInput: React.FC = () => {
  const inputEl = useRef({} as any);

  const handleClickToFocus = () => {
    // `current` points to the mounted text input element
    inputEl.current.focus();
  };

  return (
    <div>
      <input ref={inputEl} type="text" />
      <button onClick={handleClickToFocus}>Focus the input</button>
    </div>
  );
};

const TextArea: React.FC = () => {
  const textareaEl = useRef({} as any);
  const textEl = useRef({} as any);
  const initialText = "Delete me and write a word";
  const [text, setText] = useState<string>(initialText);

  const handleClick = () => {
    textEl.current.value = text;
    setText(initialText);
  };

  return (
    <div>
      <textarea
        ref={textareaEl}
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button onClick={() => handleClick()}>save</button>{" "}
      <p ref={textEl}>prev text: {textEl.current.value}</p>
    </div>
  );
};

const HeaderHeight: React.FC = () => {
  const [height, setHeight] = useState(0);

  // You can get height of h1 when the node is mounted
  const measuredRef = useCallback(node => {
    if (node !== null) {
      setHeight(node.getBoundingClientRect().height);
    }
  }, []);

  return (
    <div>
      <h1
        ref={measuredRef}
        style={{ color: "#FFFFFF", backgroundColor: "#000000" }}
      >
        Hi! I'm {Math.round(height)}px tall
      </h1>
    </div>
  );
};

const SampleOfUseRef: React.FC = () => (
  <>
    <FocusedInput />
    <TextArea />
    <HeaderHeight />
  </>
);

export default SampleOfUseRef;
