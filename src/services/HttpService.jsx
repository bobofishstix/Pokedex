import axios from "axios";

class HttpService {
  async get(pokemonName) {
    try {
      let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}/`);
      return response;
    } catch (err) {
      return "error!";
    }
  }
}

export default HttpService;
