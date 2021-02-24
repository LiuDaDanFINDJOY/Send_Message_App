import React from "react";

const BaseOutput = ({ messageTypeClassName, content, operation }) => {
  return (
    <div className={`row ${messageTypeClassName}`}>
      <div className="content">{content}</div>
      {operation && <div className="opertation">{operation}</div>}
    </div>
  );
};
export default BaseOutput;
