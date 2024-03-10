import React from 'react'
import styled from 'styled-components'
import '../index.css'
import NavMenu from './Nav'

function Landing() {
  return (
    <Container>
        <NavMenu/>
        <Content>
            <Img src="images/vision.svg" />
            <div>
                <h1>Mind Wave VR</h1>
                <div class="sub">Personalized VR Therapy</div>
                <Button>
                    <button class="b1">MINDCHECK</button>
                    <button class="b2">VR OASIS</button>
                </Button> 
            </div> 
                      
        </Content>
        <Pic src="images\im.svg"/>
    </Container>
  )
}

export default Landing

const Container =styled.main`

overflow: hidden;
height:100vh;
width:100vw;
// min-height : calc(100vh);
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

const Pic = styled.img`

width: 900px;
height:900px;
margin-top:-220px;
margin-right:-100px;
float:right;

@media (max-width:1000px) {
  opacity: 0 ;
}
`

const Content = styled.div`
margin-top: -60px;
        position: relative;
        left: 50px; 
        top: 35%;
        transform: translateY(-50%);
        width:700px;
        height: 100px;
        display :flex;


        div{
            h1{
                margin-left: -85px;
                margin-top:60px;
            color: #203F29;
            leading-trim: both;
            text-edge: cap;
            font-family: Alatsi;
            font-size: 80px;
            font-style: normal;
            font-weight: 400;
            line-height: 150px; 
            text-transform: uppercase;
            }
            .sub{
                margin-top:-90px;
                margin-left:0px;
                font-size:25px;
                width: 574px;
                color: #203F29;
                leading-trim: both;
                text-edge: cap;
                font-family: "Fira Mono";
                font-style: normal;
                font-weight: 300;
                line-height: normal;
                text-transform: capitalize;
            }
            position: relative;
            z-index: 2;
            margin-left: 70px;
            
        }
`

const Img = styled.img`
    width:700px;
    position: absolute;
    z-index: 1;
`

const Button = styled.div`
        .b1{
            width: 160px;
            height: 45px;
            flex-shrink: 0;
            border-radius: 16px;
            border: 1.5px solid #203F29;
            color: #000;
            background:none;
            leading-trim: both;
            text-edge: cap;
            font-family: Alatsi;
            font-size: 23px;
            font-style: normal;
            font-weight: 400;
            line-height: 23px; /* 115.385% */
            text-transform: uppercase;
            margin-right: 40px;
            margin-left: -70px;
            margin-top:20px;
        }
        .b2{
            width: 160px;
            height: 45px;
            flex-shrink: 0;
            border-radius: 16px;
            background: #203F29;  
            color: #FFF;
            leading-trim: both;
            text-edge: cap;
            font-family: Alatsi;
            font-size: 23px;
            font-style: normal;
            font-weight: 400;
            line-height: 29.537px; /* 115.385% */
            text-transform: uppercase;  
        }
        
`