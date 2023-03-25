import React, { Component } from "react";
import Pokemon from "./Pokemon";
import { Box } from "@mui/material";

export default class PokeApi extends Component {
  url = "https://pokeapi.co/api/v2/pokemon";
  state = {
    pokeList: [],
    isLoading: true,
  };

  queries = {};

  componentDidMount() {
    try {
      fetch(this.url)
        .then((res) => res.json())
        .then((data) => {
          this.state.pokeList = data.results
          this.setState({ isLoading: false });
        });
    } catch (error) {
      throw error;
    }
  }
  render() {
    return (
      <Box>
        {this.state.isLoading ? (
          <div>Is loading...</div>
        ) : (
          this.state.pokeList.map((e, i) => {
            return <Pokemon key={i} name={e.name} />;
          })
        )}
      </Box>
    );
  }
}
