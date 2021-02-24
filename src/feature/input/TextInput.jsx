import React from "react";
import editMessage from "./editMessage";

const TextInput = ({ message, change, submit }) => {
  return (
    <div>
      <input type="text" value={message} onChange={change} />
      <button onClick={submit}>提交文字</button>
    </div>
  );
};
export default editMessage(TextInput);
