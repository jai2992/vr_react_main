import React from 'react'
import styled from 'styled-components'
import NavMenu from './Nav'
const ProductBlock = (props) => {
    return (
      <div className="product-block">
        <img src={props.img} alt="phobiaimg" />
        <div className="overlay"><h4 className='head'>{props.p}</h4>
        <p className='para'>{props.dis}</p></div>
      </div>
    );
  };
function phobia() {
  return (
    <Container>
      <NavMenu/>
      <h1>Phobia</h1>
      <div className="container1">
      <ProductBlock img="/images/hydro.jpg" p="Hydrophobia" dis="Fear of water, which can manifest as a fear of drowning, large bodies of water, or even fear of water in general."/>
      <ProductBlock img="/images/small.jpg" p="Claustrophobia" dis="Fear of enclosed or small spaces, leading to feelings of panic or suffocation."/>
      <ProductBlock img="/images/height.jpg" p="Acrophobia" dis="Fear of heights, characterized by anxiety in tall places like high buildings or mountains."/>
      <ProductBlock img="/images/light.jpg" p="Astraphobia" dis="Fear of thunder and lightning, which can cause anxiety during storms."/>
      <ProductBlock img="/images/dog.jpeg" p="Cynophobia" dis="Fear of dogs, which can stem from a traumatic experience or general anxiety about their behavior."/>
      <ProductBlock img="/images/public.jpg" p="Social Phobia " dis="Fear of social situations, causing self-consciousness and avoidance of social interactions."/>

    </div>
    </Container>
  )
}

export default phobia

const Container =styled.main`
height:110vh;
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
    height: 110vh;
  content : "";
  position:absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  z-index:-1;
}
.container1 {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
.product-block {
    position: relative;
    margin: 50px;
    overflow: hidden;
  }
  
  .product-block img {
    width: 400px;
    height: 300px;
    transition: filter 0.5s;
  }
  
  .product-block .overlay {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    color: white;
    padding: 0px;
    text-align: center;
    transition: opacity 0.2s;
  }
  
  .product-block:hover img {
    filter: blur(3px);
  }
  
  .product-block:hover .overlay {
    opacity: 1;
  }
  .head{
    font-size:18px;
  }
  .para{
    font-size:12px;
  }

`