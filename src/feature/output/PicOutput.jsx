import React from "react";
import BaseOutput from "./BaseOutput.jsx";

const PicOutput = ({ revert, content }) => {
  return (
    <BaseOutput
      messageTypeClassName="userMessage"
      content={<img width="200" src={content} />}
      operation={<button onClick={revert}>撤销</button>}
    />
  );
};

export default PicOutput;
