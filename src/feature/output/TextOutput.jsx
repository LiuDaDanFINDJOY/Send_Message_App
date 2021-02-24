import React from "react";
import BaseOutput from "./BaseOutput.jsx";

const TextOutput = ({ revert, content }) => {
  return (
    <BaseOutput
      messageTypeClassName="userMessage"
      content={content}
      operation={<button onClick={revert}>撤销</button>}
    />
  );
};
export default TextOutput;
