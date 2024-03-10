import React from 'react'
import styled from 'styled-components'
import NavMenu from './Nav'

function About() {
  return (
    <Container>
      <NavMenu/>
      <h1>About</h1>
    </Container>
  )
}

export default About

const Container =styled.main`
height:100vh;
width:100vw;
overflow:hidden;
// min-height : calc(100vh - 70px);
// padding:0 calc(3.5vw + 5px);
position:relative;


&:before{
  background: radial-gradient(circle, #FFFFFF, #E0F8F0);
    background-size: cover;
    background-position: end; 
    background-repeat: no-repeat;
    width: 100vw;
    height: 100vh;
  content : "";
  position:absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  z-index:-1;
}

`