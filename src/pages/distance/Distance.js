import { useState } from "react";
import Container from "../../components/container/Container";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import History from "../../components/history/History";
import { getDistance } from "../../services/distance_service";
import { stripVTControlCharacters } from "util";
import { useEffect } from "react";

const Distance = () => {
  const [cepOne, setCepOne] = useState();
  const [cepTwo, setCepTwo] = useState();
  const [resultDistance, setResultDistance] = useState();


  useEffect(() => {
    // setI(i++)
    console.log("i")

  })


  const queryDistance = async () => {
    if (!cepOne || !cepTwo) {
      alert("Todos os campos precisam ser preenchidos");
      return;
    }

    setResultDistance(await getDistance(cepOne, cepTwo));
  };
  

  return (
    <>
      <Container>
        <h1>Consulte a distância entre 2 pontos</h1>
        <div className="Box">
          <div className="Col" style={{ width: "50%" }}>
            <Input
              fieldName="Cep 01"
              type="text"
              onChange={setCepOne}
              name="cepOne"
              value={cepOne}
            />
            <Input
              fieldName="Cep 02"
              type="text"
              onChange={setCepTwo}
              name="cepTwo"
              value={cepTwo}
            />
            <Button
              name="Obter Distância"
              type="primary"
              style={{ width: "100%", backgroundColor: "green" }}
              execute={() => {
                queryDistance();
              }}
            />
          </div>
        </div>
        <hr />
        <div className="Box">
          <div className="Col">
            {resultDistance ? (
              <>
                <Button
                  name="Limpar resultado"
                  type="primary"
                  style={{ width: "20%" }}
                  execute={() => {
                    setResultDistance(undefined);
                    setCepOne("")
                    setCepTwo("")
                  }}
                />
                <History>
                  <div className="History-Result">
                    <h3>Distância: {resultDistance.distance_points_km}</h3>
                    <p style={{ fontSize: "medium" }}>
                      <h4>CEP 01 - {resultDistance.addressA.cep}</h4>
                      Rua: {resultDistance.addressA.address}
                      <br />
                      Bairro: {resultDistance.addressA.district}
                      <br />
                      Cidade: {resultDistance.addressA.city}
                      <br />
                    </p>
                    <p style={{ fontSize: "medium" }}>
                      <h4>CEP 02 - {resultDistance.addressB.cep}</h4>
                      Rua: {resultDistance.addressB.address}
                      <br />
                      Bairro: {resultDistance.addressB.district}
                      <br />
                      Cidade: {resultDistance.addressB.city}
                      <br />
                    </p>
                  </div>
                </History>
              </>
            ) : (
              ""
            )}
          </div>
        </div>
      </Container>
    </>
  );
};

export default Distance;
