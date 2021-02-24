import React from "react";
import StyleWrap from "./StyleWrap.jsx";
import manageDataFlow from "./manageDataFlow";
import { MESSAGE_TYPE } from "./types";
import outputTypeMap from "./output";
import * as Input from "./input";
import { compose } from "../utils";

const SendMessage = ({ data, replaceItem, addItem }) => {
  return (
    <StyleWrap
      outputArea={data.map(({ content, type }, idx) => {
        let OutPut = outputTypeMap.get(type);
        console.log(type);
        return (
          <OutPut
            key={idx}
            content={content}
            revert={() =>
              replaceItem(idx, {
                content: "消息已撤回",
                type: MESSAGE_TYPE.SYSTEM_REVERT,
              })
            }
          />
        );
      })}
      inputArea={
        <>
          <Input.TextInput submit={addItem} type={MESSAGE_TYPE.TEXT} />
          <Input.PicInput submit={addItem} type={MESSAGE_TYPE.PIC} />
          <Input.SystemInput
            submit={addItem}
            type={MESSAGE_TYPE.SYSTEM_INVITE}
          />
        </>
      }
    />
  );
};
export default compose(manageDataFlow)(SendMessage);
