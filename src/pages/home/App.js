import logo from "../../logo.svg";
import "./App.css";
import "../general.css";
import Container from "../../components/container/Container.js";
import Button from "../../components/button/Button.js";
import React from "react";
import History from "../../components/history/History.js";
import { LoremIpsum } from "react-lorem-ipsum";
import glossary from "../../mock/Glossary.js";

const App = () => {
  const getGlossaryHistory = () => {
    return glossary.map((item) => {
      return (
        <div className="History-Result">
          <p style={{ fontSize: "medium" }}>
            Título: {item.title} <br />
            URL:{" "}
            <a style={{ color: "white" }} href={item.url}>
              {item.url}
            </a>
          </p>
        </div>
      );
    });
  };

  return (
    <>
      <Container>
        <h1 style={{ textAlign: "left", margin: "5px" }}>
          BEM VINDO AO DESAFIO FINAL - OKR
        </h1>
        <div className="Box">
          <div
            className="Col"
            style={{ backgroundColor: "#282c34", width: "40%" }}
          >
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div className="Col">
            <p>
              <LoremIpsum p={1} />
            </p>
          </div>
        </div>
        <div className="Box">
          <div className="Col">
            <Button
              name="Calculador de Distância"
              type="primary"
              style={{ width: "100%" }}
              execute={() => {
                window.location.href = "/distance";
              }}
            />
          </div>
          <div className="Col">
            <Button
              name="Converter Moedas"
              type="primary"
              style={{ width: "100%" }}
              execute={() => {
                window.location.href = "/coin";
              }}
            />
          </div>
        </div>
        <div className="Box">
          <div className="Col">
            <History>{getGlossaryHistory()}</History>
          </div>
        </div>
      </Container>
    </>
  );
};

export default App;
