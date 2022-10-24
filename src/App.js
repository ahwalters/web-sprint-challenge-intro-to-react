import React, { useState, useEffect } from 'react';
import { rest } from "msw";
import axios from 'axios';
import styled from 'styled-components';
import Character from './components/Character'
import Details from './components/Details'

import {data} from './mocks/handlers'


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [characters, setCharacters] = useState([]);
  const [currentCharId, setCurrentCharId] = useState(null);
  // const [details, setDetails] = useState(null);


  const openDetails = id => {
    setCurrentCharId(id);
  }

  const closeDetails = id => {
    setCurrentCharId(null);
  }

/*
  useEffect(() => {
    setCharacters(data)
    console.log(characters)
  }, [])
  */

  useEffect( () => {
    axios.get('https://swapi.dev/api/people/')
    .then(res => setCharacters(res.data))
    .catch(err => console.error(err))
  }, [])




  /*
useEffect(() => {
rest.get("https://swapi.dev/api/people/", (req, res, ctx) => {
  return res(ctx.status(200), ctx.json(data));
}, [])
})
*/

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      {
      characters.map(char => {
        return <Character key={char.id} name={char.name} birth_year={char.birth_year} />
      })
      }
    </div>
  );
}


export default App;

/*

{<button onClick={() => openDetails(props.id)}>{props.birth_year}</button>
      }
key={char.id}
{
        currentCharId && <Details charId ={currentCharId} close={closeDetails} />
      }
*/