import React from "react";
import editMessage from "./editMessage";
import { compose } from "../../utils";
import { imageList } from "../data";

const PicInput = ({ message, change, submit }) => {
  return (
    <div>
      <select value={message} onChange={change}>
        {imageList.map(([src, name]) => (
          <option value={src} key={src}>
            {name}
          </option>
        ))}
      </select>
      <button onClick={submit}>提交图片</button>
    </div>
  );
};
export default compose(editMessage)(PicInput);
