import React from 'react'
import styled from 'styled-components'
import NavMenu from './Nav'

function About() {
  return (
    <Container>
      <NavMenu/>
      {/* <h1>About</h1> */}
      {/* <img src="/images/abt1.png" alt=""></img> */}
      <center>
      <img src="/images/abt1.png" alt="abt1img" />
      </center>
      <p>
      Our project is dedicated to transforming the landscape of mental health support by combining innovative technology with proven psychological techniques. At the core of our endeavor is the use of cutting-edge <b>Retrieval Augmented Generation</b> (RAG) technology to deliver personalized <b>Virtual Reality</b> (VR) experiences tailored to individual needs.
      </p>
      <p>
      Our platform is designed to offer two primary features: <b>"Self-care"</b>, providing tools for managing general stress and promoting overall well-being, and <b>"Treatment companion"</b>, offering support for more severe conditions such as phobias, trauma, and PTSD.
      </p>
      <center>
      <img src="/images/abt2.png" alt="abt1img" />
      </center>
      <p>
      We believe in the power of technology to enhance mental health care, which is why we have developed robust voice analysis algorithms, sophisticated RAG models, seamless integration frameworks, and <b>user-friendly interfaces</b>. These elements work together to create a comprehensive and user-centric approach to mental health support.
      </p>
      <p>
      Our platform is built on a <b>flexible architecture </b>that can adapt to evolving mental health concepts and accommodate a growing user base, ensuring scalability and sustainability. By leveraging cloud-based resources, we are able to reduce infrastructure costs and environmental impact while increasing accessibility to our services.
      </p>
      <p>
      Our goal is to provide <b>accessible, personalized, and effective mental health support </b>that seamlessly integrates psychological insights with immersive technology. Through our platform, we aim to empower individuals to take control of their mental health and improve their overall well-being.
      </p>
    </Container>
  )
}

export default About

const Container =styled.main`
height:250vh;
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
    height: 250vh;
  content : "";
  position:absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  z-index:-1;
}
p{
  margin-left:300px;
  margin-right:300px;
  justify-content:true;
  font-size:20px;
  line-height: 2.3;
  text-align: center;
}
b{
  color:#203F29;
  font-weight:bold;
}
`