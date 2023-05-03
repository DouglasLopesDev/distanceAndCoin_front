import axios from "axios";

export const requestHttp = async (config) => {
  return axios(config)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      alert(error);
    });
};
