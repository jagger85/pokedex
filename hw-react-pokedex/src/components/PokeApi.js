import React, { Component } from "react";

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
        .then((data) => this.setState({ pokeList: data }))
        .then(this.setState({ isLoading: false }));
    } catch (error) {
      throw error;
    }
  }
  render() {
    !this.state.isLoading && console.log(this.state.pokeList);
    return <div>PokeApi</div>;
  }
}
