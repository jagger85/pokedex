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
  Typography
} from "@mui/material";
import { margin } from "@mui/system";
const blank = ''
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
  }, []);

  return loading ? (
    <div>Loading ... </div>
  ) : (
    <Card sx={{
        width: 300,
        height: 350,
        backgroundColor: "transparent",
        margin: 3,
        
    }}>
      <CardHeader
      sx={{
        border: 2,
        margin: 2,
        borderRadius: 2,
        }}
        // avatar={
        //   <Avatar 
        //   aria-label="Type"
        //   src='src/components/poison.png'
        //   >
            
        //   </Avatar>
        // }
        title={`${pokemon.name}`}
        subheader={`${pokemon.types[0].type.name} ${pokemon.types[1]?.type.name}`}/>
      <CardMedia
      sx={{
        width: 200,
        height: 200,
        objectFit: 'scale-down',
        margin: 'auto auto'
      }}
        component="img"
        image={`${pokemon.sprites.other.dream_world.front_default}`}
        alt={`${pokemon.name} image`}
      />

    </Card>
  );
}

export default Pokemon;
