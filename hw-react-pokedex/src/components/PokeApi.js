import React, { Component } from "react";
import Pokemon from "./Pokemon";

export default class PokeApi extends Component {
  state = {
    pokeList: [],
    isLoading: true,
  };

  queries = {};

  componentDidMount() {
    try {
      fetch("https://pokeapi.co/api/v2/pokemon")
        .then((res) => res.json())
        .then((data) => {
          this.setState({ pokeList: data });
          this.setState({ isLoading: false });
          console.log(this.state.isLoading);
          console.log(this.state.pokeList);
        });
    } catch (error) {
      throw error;
    }
  }
  render() {
    return (
      <ol>
      
        {this.state.isLoading ? (
          <div>Is loading...</div>
        ) : (
          this.state.pokeList.results.map(( e, i) => {
            return <Pokemon key={i} name={e.name} url={e.url} />
          })
        )}
      </ol>
    );
  }
}
