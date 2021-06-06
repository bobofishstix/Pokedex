import * as React from "react";
import "./App.css";
import HttpService from "./services/HttpService.jsx";

export default class GetPokemon extends React.Component {
  service = new HttpService();
  constructor(props) {
    super(props);

    this.state = {
      pokemonName: null,
      pokemonID: null,
      pokemonType: null,
 
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({pokemonName: event.target.value});
  }
  handleSubmit(event) {
    event.preventDefault();
  }

  async componentDidMount() {
    let response = await this.service.get('');
    console.log(response.status);
    if (response.status !== 200) {
      this.setState({ pokemonName: "error" });
    } else {
      this.setState({ 
        pokemonName: response.data.name});
    }
  }

  render() {
    return (
      <div className="App">
        <div>
          <p> Name:{this.state.pokemonName} </p>
          <p> ID:{this.state.pokemonID} </p>
          <p> Type:{this.state.pokemonType} </p>
        </div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>Search for a Pokémon:
              <input type='text' value={this.state.pokemonName} onChange={this.handleChange} />
            </label>
            <input type='submit' value='submit' />
          </form>
        </div>
      </div>
    );
  }
}
