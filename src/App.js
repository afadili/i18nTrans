import React from "react";
import BodyContent from "./BodyContent";
import "./App.css";
import i18n from "./i18n";
import { getI18n } from "react-i18next";
import { Trad } from "./Trad";

class App extends React.Component {
  setLanguage(language) {
    getI18n().changeLanguage(language);
  }
  render() {
    return (
      <div className="App">
        <Trad text="title" />
        <span>
          {i18n.language}La langue est en français {i18n.t("title")}{" "}
        </span>
        <select>
          {["en", "pt"].map(language => (
            <option onClick={() => this.setLanguage(language)}>
              {language}
            </option>
          ))}
        </select>
        <BodyContent />
      </div>
    );
  }
}
export default App;
