import * as React from 'react';
import axios from 'axios';
import './App.css';


export default class GetPokemon extends React.Component {
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
      // GET request using axios with error handling
          axios.get('https://pokeapi.co/api/v2/pokemon/1/')
          .then(response => this.setState({ pokemonName: response.data.name }))
          .catch(error => {
              // this.setState({ errorMessage: error.message });
              console.error('There was an error!', error);
          });
  }
    // return (
    //   console.log(response)
    // );
  
  render() {
    return (
      <div className='App'>
        <p> Name:{this.state.pokemonName} </p>
        {/* <p> ID:{pokemonID} </p> */}
        {/* <p> Type:{pokemonType} </p> */}
      </div>
    )

  }
}

