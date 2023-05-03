import { requestHttp } from "./service_request";

export const getCoins = async () => {
  var config = {
    method: "get",
    url: "https://economia.awesomeapi.com.br/json/all",
    headers: {},
  };
  let coins_list = [];
  const response = await requestHttp(config);
  for (let attr in response) {
    coins_list.push(response[attr]);
  }

  return coins_list;
};
