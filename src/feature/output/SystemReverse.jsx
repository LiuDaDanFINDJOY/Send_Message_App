import React from "react";
import BaseOutput from "./BaseOutput.jsx";

const SystemReverse = ({ content }) => {
  return (
    <BaseOutput
      messageTypeClassName="systemMessage"
      content={<>系统消息：{content}</>}
    />
  );
};
export default SystemReverse;
