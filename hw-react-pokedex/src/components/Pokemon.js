import React from "react";
import { useState, useEffect } from "react";
import {
  Box,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  FavoriteIcon,
  Avatar,
  Typography,
  makeStyles,
} from "@mui/material";

const styles = {
    card :  {       
        width: 300,
        height: 350,
        backgroundColor: "transparent",
        margin: 3,
    },
    cardReader :{
        border: 2,
        margin: 2,
        borderRadius: 2,
    },
    cardMedia :{
        width: 200,
        height: 200,
        objectFit: "scale-down",
        margin: "auto auto",
    }

}
function Pokemon(props) {
  const [pokemon, setPokemon] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      fetch(`https://pokeapi.co/api/v2/pokemon/${props.name}`)
        .then((res) => res.json())
        .then((data) => {
          setPokemon(data);
          setLoading(false);
          // console.log(data)
        });
    } catch (error) {
      throw error;
    }
  }, [pokemon]);

  return loading ? (
    <div>Loading ... </div>
  ) : (
    <Card sx={styles.card}>
      <CardHeader
        sx={styles.cardReader}
        avatar={
          <Avatar
          aria-label="Type"
          >
          </Avatar>
        }
        title={`${pokemon.name}`}
        subheader={`${pokemon.types[0].type.name} ${pokemon.types[1]?.type.name ?? "" }`}
      />
      <CardMedia
        sx={styles.cardMedia}
        component="img"
        image={`${pokemon.sprites.other.dream_world.front_default}`}
        alt={`${pokemon.name} image`}
      />
    </Card>
  );
}

export default Pokemon;
