import React from "react";
import HeadContent from "./HeadContent";
import MainContent from "./MainContent";
import FootContent from "./FootContent";

export default class BodyContent extends React.Component {
  render() {
    return (
      <div>
        <HeadContent />
        <MainContent />
        <FootContent />
      </div>
    );
  }
}
