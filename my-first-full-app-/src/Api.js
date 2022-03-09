import axios from "axios";
import {
  API_URL,
  USERS,
  HOUSES
} from "./config";

const saveInLocalStorage = userDetails => {
  if (userDetails.data.message.id == null) {
    throw "error";
  }

  localStorage.setItem('userId', userDetails.data.message.id);
  localStorage.setItem('userToken', userDetails.headers.authorization);
 // localStorage.setItem('userRol', userDetails.data.message.rol);

}

const apiSettings = {
  
  // User
  createUser: async body => {
    const endpoint = `${USERS}`;
    return await (await axios.post(endpoint, body));
  },
  login: async body => {
    const endpoint = `${USERS}/sign_in`;
    return await (await axios.post(endpoint, body).then((response) => {
      console.log("hola hola hola")
      console.log(response)
      saveInLocalStorage(response);
    }));
  },
  logout: async () => {
    const endpoint = `${USERS}/sign_out`;
    return await (await axios.delete(endpoint, {headers: {'Authorization': localStorage.userToken}}));
  },
  chechToken: async token => {
    const endpoint = `https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=${token}`;
    return await (await fetch(endpoint)).json();
  },

  // House
  getHouses: async houseId => {
    const endpoint = houseId == null
      ? `${HOUSES}`
      : `${HOUSES}?id=${houseId}`;
    return await (await fetch(endpoint, {headers: {'Authorization': localStorage.userToken}})).json();
  },
  getHouse: async houseId => {
    const endpoint = `${HOUSES}/${houseId}`;
    return await (await fetch(endpoint, {headers: {'Authorization': localStorage.userToken}})).json();
  },
  createHouse: async body => {
    const endpoint = `${HOUSES}`;
    return await (await axios.post(endpoint, body, {headers: {'Authorization': localStorage.userToken}}));
  },
  updateHouse: async (houseId, body) => {
    const endpoint = `${HOUSES}/${houseId}`;
    return await (await axios.put(endpoint, body, {headers: {'Authorization': localStorage.userToken}}));
  },
  deleteHouse: async houseId => {
    const endpoint = `${HOUSES}/${houseId}`;
    return await (await axios.delete(endpoint, {headers: {'Authorization': localStorage.userToken}}));
  },


}

export default apiSettings;