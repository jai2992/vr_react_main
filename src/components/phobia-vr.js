import React from 'react'
import styled from 'styled-components'
import NavMenu from './Nav'
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ProductBlock = (props) => {
    return (
      <Link to={`/phobia-vr/${props.p}`}>
      <div className="product-block">
        <img src={props.img} alt="phobiaimg" />
        <div className="overlay"><h4 className='head'>{props.p}</h4></div>
      </div>
      </Link>
    );
  };
function Phobiavr() {
    const { id } = useParams();
    const [progress, setProgress] = useState(0);

    const updateProgress = () => {
      const newProgress = progress < 100 ? progress + 25 : 0;
      setProgress(newProgress);
    };
    const i="https://via.placeholder.com/500";
  return (
    <Container>
      <NavMenu/>
      <h1>{id}</h1>
      <div>
      <ProgressBarContainer>
        <Progress color="#6ab04c" width={progress}>{progress}%</Progress>
      </ProgressBarContainer>
      <button onClick={updateProgress}>Update Progress</button>
    </div>
    <div className="container1">
    <ProductBlock img={i} p="Stage 1"/>
    <ProductBlock img={i} p="Stage 2"/>
    <ProductBlock img={i} p="Stage 3"/>
    <ProductBlock img={i} p="Stage 4"/>
    </div>
    </Container>
  )
}

export default Phobiavr

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
    border-radius:40px;
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

`;
const ProgressBarContainer = styled.div`
  width: 100%;
  background-color: #f0f0f0;
  border-radius: 4px;
`;

const Progress = styled.div`
  height: 20px;
  border-radius: 4px;
  background-color: ${props => props.color};
  width: ${props => props.width}%;
  transition: width 0.5s ease-in-out;
`;