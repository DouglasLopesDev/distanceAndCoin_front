import { requestHttp } from "./service_request";

export const getDistance = async (cepOne, cepTwo) => {
  var config = {
    method: "get",
    url: `http://localhost:5000/distance/cep1/${cepOne}/cep2/${cepTwo}`,
    headers: {},
  };
  const response = await requestHttp(config)
  return response.result;
};
