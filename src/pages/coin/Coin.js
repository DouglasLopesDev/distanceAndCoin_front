import Container from "../../components/container/Container";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import History from "../../components/history/History";
import { useEffect, useState } from "react";
import { getCoins } from "../../services/coin_service";
import "./Coin.css";

const Coin = () => {
  const [coins, setCoins] = useState();
  const [valueCoin, setValueCoin] = useState();
  const [selectedCoin, setSelectedCoin] = useState();
  const [conversionResult, setConversionResult] = useState();
  const [optionSelected, setOptionSelected] = useState();

  const queryCoins = async () => {
    setCoins(await getCoins());
  };

  useEffect(() => {
    queryCoins();
  }, []);

  const getListCoins = () => {
    if (!coins) return <></>;
    const options = [<option value=""></option>];
    coins.map((coin) => {
      options.push(
        <option value={coin.code + coin.codein}>{coin.name}</option>
      );
    });
    return options;
  };

  const calculate = () => {
    if (!valueCoin) {
      alert("Preencha todos os valores");
      return;
    }

    if (isNaN(valueCoin)){
      alert("Preencha somente com números")
      return;
    }

    const coin = coins.filter(
      (value) => value.code + value.codein == optionSelected
    );

    if (!coin) {
      alert("Moeda não encontrada para conversão");
      return;
    }
    setConversionResult((valueCoin / coin[0].bid).toFixed(2));
    setSelectedCoin(coin[0].code);
  };

  const handleChangeCoin = (event) => {
    setOptionSelected(event.target.value);
  };

  return (
    <>
      <Container>
        <h1>Faça sua conversão entre moedas</h1>
        <div className="Box">
          <div className="Col">
            <label style={{ fontWeight: "bold" }}>
              Moeda
              <select className="Select-Coin" onChange={handleChangeCoin}>
                {getListCoins()}
              </select>
            </label>
          </div>
          <div className="Col">
            <Input
              fieldName="Valor em REAL (R$) para converter"
              type="text"
              onChange={setValueCoin}
              name="valueCoin"
              value={valueCoin}
            />
            <Button
              name="Calcular"
              type="primary"
              style={{ width: "100%", backgroundColor: "green" }}
              execute={() => {
                calculate();
              }}
            />
          </div>
        </div>
        <hr />
        <div className="Box">
          <div className="Col">
            <History>
              <div className="History-Result">
                <p>
                  <h3>
                    Resultado da conversão: {selectedCoin} {conversionResult}{" "}
                  </h3>
                </p>
              </div>
            </History>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Coin;
