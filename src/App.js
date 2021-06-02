import * as React from "react";
import "./App.css";
import HttpService from "./services/HttpService.jsx";

export default class GetPokemon extends React.Component {
  service = new HttpService();
  constructor(props) {
    super(props);

    this.state = {
      pokemonName: null,
      // pokemonID: null,
      // pokemonType: null,
      // pokemonImage: null
    };
  }
  async componentDidMount() {
    let response = await this.service.get("bulbasaur");
    console.log(response.status);
    if (response.status !== 200) {
      this.setState({ pokemonName: "error" });
    } else {
      this.setState({ pokemonName: response.data.name });
    }
  }

  render() {
    return (
      <div className="App">
        <p> Name:{this.state.pokemonName} </p>
        {/* <p> ID:{pokemonID} </p> */}
        {/* <p> Type:{pokemonType} </p> */}
      </div>
    );
  }
}
