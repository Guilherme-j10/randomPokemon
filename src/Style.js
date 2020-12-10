import styled from 'styled-components';

export const Main = styled.section`
  width: 100%;
  display: flex;
  position: relative;
  overflow: hidden;
  flex-direction: column;
  padding: 25px;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;

  > .bubbleOrb, .bubbleOrbDois {
    width: 500px;
    height: 500px;
    background-color: #ffffff2d;
    position: absolute;
    border-radius: 50%;
    margin-left: -1150px;
    margin-top: -200px;
  }

  > .bubbleOrbDois {
    margin: 0px;
    margin-right: -1150px;
    margin-top: 200px;
  }

  > img{
    margin-bottom: 20px;
    width: 20%;
  }

  > button {
    color: #fff;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1em;
    background-color: #0e9aeb;
  
    > svg{
      margin-right: 10px;
    }
  }

  @media(max-width: 360px){
    > .bubbleOrb, .bubbleOrbDois{
      display: none;
    }
    
    > img {
      width: 70%;
    }
  }

  @media(max-width: 411px){
    > .bubbleOrb, .bubbleOrbDois{
      display: none;
    }
    
    > img {
      width: 70%;
    }
  }

  @media(max-width: 414px){
    > .bubbleOrb, .bubbleOrbDois{
      display: none;
    }
    
    > img {
      width: 70%;
    }
  }

  @media(max-width: 768px){
    > .bubbleOrb, .bubbleOrbDois{
      display: none;
    }
    
    > img {
      width: 40%;
    }
  }
`;

export const BoxPokemon = styled.div`
  margin-top: 40px;
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  width: 23%;
  height: 52vh;
  box-shadow: 0px 0px 25px 1px #1111112d;

  > img {
    width: 100%;
  }

  > h1 {
    text-align: center;
  }

  @media(max-width: 360px){
    width: 100%;
    height: 55vh;
  }

  @media(max-width: 411px){
    width: 100%;
    height: 55vh;
  }

  @media(max-width: 414px){
    width: 100%;
    height: 55vh;
  }

  @media(max-width: 768px){
    width: 70%;
    height: 55vh;
  }
`;

export const Load = styled.div`
  width: 100%;
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  > svg {
    font-size: 5em;
    color: #0e9aeb;
  }
`;