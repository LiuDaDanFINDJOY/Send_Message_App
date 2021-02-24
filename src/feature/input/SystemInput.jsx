import React from "react";
import editMessage from "./editMessage";
import { inviteList } from "../data";

const SystemInput = ({ message, change, submit }) => {
  return (
    <div>
      <select value={message} onChange={change}>
        {inviteList.map((name) => (
          <option value={name} key={name}>
            {name}
          </option>
        ))}
      </select>
      <button onClick={submit}>邀请进群</button>
    </div>
  );
};
export default editMessage(SystemInput);
