import React from "react";
import { useState, useReducer, useEffect } from "react";
import { Grid } from "@mui/material";
import Pokemon from "./Pokemon";

const pages = [];
const url = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";

function reducer(page, action) {
  switch (action.type) {
    case "increment":
      return { count: page.count + 1 };
    case "decrement":
      return { count: page.count - 1 };
    default:
      throw new Error();
  }
}

function PokeApi() {
  const [page, dispatch] = useReducer(reducer, { count: 0 });
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    try {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          for (let i = 0; i < data.results.length / 20; i++) {
            pages[i] = data.results.slice(i * 20, i * 20 + 20);
          }
          setLoading(false);
        });
    } catch (error) {
      throw error;
    }
  }, []);

  return (
    <Grid container>
      <button
        onClick={() => dispatch({ type: "decrement" })}
        disabled={page.count == 0}
      >
        BACKWARD
      </button>
      <button
        onClick={() => dispatch({ type: "increment" })}
        disabled={page.count == pages.length -1}
      >
        FORWARD
      </button>
      {isLoading ? (
        <div>Is loading...</div>
      ) : (
        (console.log(pages[page.count]),
        pages[page.count].map((e, i) => (
        
          <Grid item>
          {e.name}
            <Pokemon key={i} name={e.name} />
          </Grid>
        )))
      )}
      Count: {page.count}
    </Grid>
  );
}

export default PokeApi;
