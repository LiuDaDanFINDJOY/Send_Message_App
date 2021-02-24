import React, { Component } from "react";

function editMessage(WrappedComponent) {
  return class extends Component {
    constructor() {
      super();
      this.state = {
        content: "",
      };
      this.changeInput = this.changeInput.bind(this);
      this.submitInput = this.submitInput.bind(this);
      this.clearInput = this.clearInput.bind(this);
    }
    changeInput(e) {
      this.setState({ content: e.target.value });
    }
    submitInput() {
      const { content } = this.state;
      const { type } = this.props;
      if (!content) return;
      this.props.submit({ content, type });
      this.clearInput();
    }
    clearInput() {
      this.setState({ content: "" });
    }
    render() {
      return (
        <WrappedComponent
          {...this.props}
          message={this.state.content}
          change={this.changeInput}
          submit={this.submitInput}
        />
      );
    }
  };
}
export default editMessage;
