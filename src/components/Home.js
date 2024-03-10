import React from 'react'
import styled from 'styled-components'
import NavMenu from './Nav'

function Home() {
  return (
    <Container>
      <NavMenu/>
      <h1>Home</h1>
      <center>
        <img src="/images/home1.jpg" alt="homeimg" />
      </center>
      <p>
        Our <b>project</b> aims to revolutionize mental health support through the integration of cutting-edge technology with psychological techniques. Fundamentally, it involves the creative application of <b>Retrieval Augmented Generation</b> (RAG) to provide customized <b>Virtual Reality</b> (VR) experiences based on user requirements. Robust voice analysis algorithms, complex RAG models, seamless integration frameworks, VR video editing software, and user-friendly online interfaces are necessary for implementation.
      </p>
      <ul>
        <li><b>Self-care</b> - for general stress alleviation</li>
        <li><b>Treatment companion</b> - for severe problems including phobias, trauma, and PTSD</li>
      </ul>
      <center>
        <img src="/images/abt2.png" alt="homeimg2" />
      </center>
      <p>
        This all-inclusive approach tackles a variety of mental health challenges. The system has an architecture that is flexible enough to accommodate changing mental health concepts and growing user bases, making it scalable and feasible. Using cloud-based resources reduces infrastructure costs and improves scalability.
      </p>
      <p>
        Furthermore, the solution provides measurable environmental advantages by reducing the carbon footprint associated with traditional therapy methods and promoting early intervention and <b>self-care</b> practices, thus alleviating strain on healthcare systems.
      </p>
      <p>
        Ultimately, our dynamic platform aims to provide accessible, personalized, and effective mental health support by seamlessly merging psychological insights with immersive technology.
      </p>
    </Container>
  )
}

export default Home

const Container = styled.main`
  height: 250vh;
  width: 100vw;
  overflow: hidden;
  position: relative;

  &:before {
    background: radial-gradient(circle, #FFFFFF, #E0F8F0);
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

  p {
    margin-left: 300px;
    margin-right: 300px;
    justify-content: true;
    font-size: 20px;
    line-height: 2.3;
    text-align: center;
  }

  ul {
    margin-left: 300px;
    margin-right: 300px;
    padding-left: 20px;
    text-align: center;
  }

  ul li b {
    margin-right: 5px;
  }

  b {
    color: #203F29;
    font-weight: bold;
  }
`
