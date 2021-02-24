import React from "react";
import BaseOutput from "./BaseOutput.jsx";

const SystemInvite = ({ content }) => {
  return (
    <BaseOutput
      messageTypeClassName="systemMessage"
      content={<>系统消息：邀请{content}进群</>}
    />
  );
};
export default SystemInvite;
