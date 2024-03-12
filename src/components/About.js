import React from 'react';
import styled from 'styled-components';
import NavMenu from './Nav';
import './About.css';

const Container = styled.main`
  width: 100vw;
  overflow: hidden;
  position: relative;

  &:before {
    background: radial-gradient(circle, #ffffff, #e0f8f0);
    background-size: cover;
    background-position: end;
    background-repeat: no-repeat;
    width: 100vw;
    height: 250vh;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
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
    width: 200px;
    height: 150px;
    border-radius:10px;
    transition: filter 0.5s;
  }
  
  .product-block .overlay {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    color: black;
    background: rgba(0, 0,0,0,0.5);
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
    font-size:15px;
    font-weight:bold;
  }
  .para{
    font-size:12px;
  }
  button
  {
    background-color: transparent;
  }

`;
const ProgressBarContainer = styled.div`
  width: 70%;
  margin-left:250px;
  background-color: #f0f0f0;
  border-radius: 4px;
`;

const Progress = styled.div`
  height: 30px;
  border-radius: 4px;
  background-color: ${props => props.color};
  width: ${props => props.width}%;
  transition: width 0.5s ease-in-out;
`;

// ... (previous imports)

const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;

  .heading {
    width: 100%;
    text-align: center;
  }

  .image-container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
    box-sizing: border-box;

    .image,
    .text {
      width: calc(50% - 20px);

      img {
        max-width: 100%;
        height: auto;\
        background-size: auto;
        
      }
    }

    .text {
      padding: 0 20px;

      p {
        font-size: 19px;
        line-height: 1.7;
        text-align: justify;
      }

      b {
        color: #203f29;
        font-weight: bold;
      }
    }
  }

  .image-container .image.right {
    display: flex;
    justify-content: flex-end;
  }
`;
const ProductBlock = (props) => {
  return (
    <div className="product-block">
      <img src={props.img} alt="phobiaimg" />
      <div className="overlay"><h4 className='head'>{props.p}</h4></div>
    </div>
  );
};
function About() {
  return (
    <Container>
      <NavMenu />
      <ContentWrapper>
        <div className="heading">
          {/* <h1>About</h1> */}
        </div>
        <div className="image-container">
          <div className="image">
            <img src="/images/abt1.png" alt="abt1img" />
          </div>
          <div className="text">
            <p>
            Our project revolutionizes mental health support through innovative<b> Retrieval Augmented Generation </b>(RAG) technology, delivering personalized <b>Virtual Reality</b> (VR) experiences.
            </p>
            <br/>
            <p> Our platform focuses on <b> "Self-care" </b>tools for stress management and well-being, and <b>"Treatment companion"</b> support for conditions like phobias, trauma, and PTSD.</p>
          </div>
        </div>
        <div className="image-container">
          <div className="image right">
            <img src="/images/abt2.png" alt="abt2img" style={{ width: '100%' }} />
          </div>
          <div className="text">
            <p>
            Our <b>flexible platform</b> adapts to evolving mental health concepts, ensuring scalability and sustainability for a growing user base. Leveraging cloud-based resources reduces costs and environmental impact, enhancing accessibility
            </p>
            <p>
            Our goal is to seamlessly integrate psychological insights with immersive technology, empowering individuals for improved <b> mental health</b> and <b>overall well-being.</b>
            </p>
          </div>
        </div>
      </ContentWrapper>
      <h1>CONTRIBUTERS</h1>
      <div className="container1">
    <ProductBlock img="/images/raj1.png" p="RAJESH D"/>
    <ProductBlock img="/images/jai.png" p="JAIGURU L"/>
    <ProductBlock img="/images/siva.png" p="SIVA NITHISH"/>
    <ProductBlock img="/images/krish.png" p="KRISHNA"/>
    <ProductBlock img="/images/sree.png" p="SREEJHA"/>
    </div>
    </Container>
  );
}

export default About;