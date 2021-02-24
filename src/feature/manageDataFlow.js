import React, { Component } from "react";
import pic from "../img.jpg";
import { MESSAGE_TYPE } from "./types";

function manageDataFlow(WrappedComponent) {
  return class ManageFlow extends Component {
    constructor() {
      super();
      this.state = {
        data: [
          { content: "hey", type: MESSAGE_TYPE.TEXT },
          { content: pic, type: MESSAGE_TYPE.PIC },
          { content: "消息已撤回", type: MESSAGE_TYPE.SYSTEM_REVERT },
          { content: "hei", type: MESSAGE_TYPE.SYSTEM_INVITE },
        ],
      };
      this.addItem = this.addItem.bind(this);
      this.replaceItem = this.replaceItem.bind(this);
    }
    addItem(addMessage) {
      this.setState((state) => ({
        data: [...state.data, addMessage],
      }));
    }
    replaceItem(idx, message) {
      this.state.data[idx] = message;
      this.setState({ data: this.state.data });
    }
    render() {
      return (
        <WrappedComponent
          data={this.state.data}
          addItem={this.addItem}
          replaceItem={this.replaceItem}
        />
      );
    }
  };
}

export default manageDataFlow;
