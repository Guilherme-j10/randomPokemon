import React, { useEffect, useState } from 'react';
import GlobalStyle from './style/GlobalStyle';
import * as Style from './Style';

import * as Icon from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';

import Logo from './assets/logo.webp';
import Unknow from './assets/unknow.png';

function LoadPoke(){
  return(
    <>
      <Style.Load>
        <FontAwesomeIcon icon={Icon.faCircleNotch} spin />
        <h1>Carregando...</h1>
      </Style.Load>
    </>
  );
}

export default function App() {
  const [UrlImg, setUrlImg] = useState('');
  const [Name, setName] = useState('');
  const [TypePoke, setTypePoke] = useState('');
  const [StatusLoad, setStatusLoad] = useState('pendding');

  const typesColor = {
    bug: '#54d370',
    dark: '#9b9bce',
    dragon: '#62cad9',
    electric: '#fafa72',
    fairy: '#e36798',
    fighting: '#e28063',
    fire: '#ea3e4d',
    flying: '#94b2c7',
    ghost: '#c78cc8',
    grass: '#6de08a',
    ground: '#be8e55',
    ice: '#a3daf4',
    normal: '#e1b1bf',
    poison: '#9b69da',
    psychic: '#ff6bba',
    rock: '#ad684f',
    steel: '#60d4ad',
    water: '#779df7'
  };

  async function GenerateRandomPokemon(){
    const randomNumber = Math.floor(Math.random() * 1118);

    try {

      const getRandomPoke = await axios.get('https://pokeapi.co/api/v2/pokemon/?offset=1&limit=1118');
      const takeRandomPoke = await axios.get(getRandomPoke.data.results[randomNumber].url);

      if(takeRandomPoke){
        
        setUrlImg(takeRandomPoke.data.sprites.other['official-artwork'].front_default);
        setName(takeRandomPoke.data.name);
        setTypePoke(takeRandomPoke.data.types[0].type.name);

        setStatusLoad('success');

        console.log(takeRandomPoke.data.sprites.other['official-artwork'].front_default);

      }else{
        setStatusLoad('error');
      }
      

    } catch (error) {

      console.log(error);

    }
  }

  useEffect(() => {
    GenerateRandomPokemon(null);
  }, []);

  return (
    <>
      <GlobalStyle />
      <Style.Main style={{backgroundColor: typesColor[TypePoke]}} title={TypePoke} >
        <span className="bubbleOrb"></span>
        <span className="bubbleOrbDois"></span>

        <img src={Logo} />
        <button onClick={(e) => GenerateRandomPokemon()}>
          <FontAwesomeIcon icon={Icon.faSyncAlt} />
          Generate random pokémon
        </button>

        <Style.BoxPokemon>
          { StatusLoad !== 'success' ? <LoadPoke /> : 
            <>
              <img src={UrlImg == null ? Unknow : UrlImg} />
              <h1>{Name}</h1>
            </>
          }
        </Style.BoxPokemon>

      </Style.Main>
    </>
  );
}
