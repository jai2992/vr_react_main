import React from 'react'
import styled from 'styled-components'
import { NavLink , Link} from 'react-router-dom'


function Header() {
  return (
    
    <Nav>
        <Logo><Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>MIND WAVE VR</Link></Logo>
        <NavMenu>
            <a>
                <img src="/images/home-icon.svg" alt=""></img>
                <Link to="/home" style={{ textDecoration: 'none', color: 'inherit' }}><span>HOME</span></Link>
            </a>
            <a>
                <img src="/images/search-icon.svg" alt=""></img>
                <Link to="/home" style={{ textDecoration: 'none', color: 'inherit' }}><span>SEARCH</span></Link>
            </a>
            <a>
                <img src="/images/watchlist-icon.svg" alt=""></img>
                <Link to="/about" style={{ textDecoration: 'none', color: 'inherit' }}><span>ABOUT</span></Link>
            </a>
            <a>
                <img src="/images/original-icon.svg" alt=""></img>
                <Link to="/pricing" style={{ textDecoration: 'none', color: 'inherit' }}><span>PRICING</span></Link>
            </a>
            <a>
                <img src="/images/movie-icon.svg" alt=""></img>
                <Link to="/signin" style={{ textDecoration: 'none', color: 'inherit' }}><span>SIGNIN</span></Link>
            </a>
            
            
        </NavMenu>
        <div>
            <UserImg src="/images/logo.svg"/>
            <div class="user">USER</div>
        </div>
        
    </Nav>
  )
}

export default Header
 
const Nav = styled.nav`
    height:70px;
    width:100vw;
    color:black;
    font-weight:bold;
    font-family:robots;
    display:flex;
    align-items:center;
    padding: 0 36px;
    div{
        display:flex;
        align-items:center;
        margin-right:40px;
    }
    .user{
        margin:0 10px;
    }
`
const Logo = styled.div`
    color: #203F29;
leading-trim: both;
text-edge: cap;
font-family: Alatsi;
font-size: 35.714px;
font-style: normal;
font-weight: 400;
line-height: 41.209px; /* 115.385% */
text-transform: uppercase;

`
const NavMenu =styled.div`
display:flex;
justify-content:flex-end;
flex:1;
margin-right:80px;
align-items:center;
position:relative;
float:right;

a{
    
    display:flex;
    align-items:center;
    padding:0 12px;
    cursor:pointer;
    img{
        height:20px;
    }
    span{
        font-size:16px;
        letter-spacing:1.42px;
        position : relative;
        &:after{
            content:" ";
            height:2px;
            background:#203F29;
            position:absolute;
            left:0;
            right:0;
            bottom :-6px;
            opacity:0;
            transform-origin:left center;
            transition: all 250ms cubic-bezier(0.25 , 0.46,0.50,0.94) 0s;
            transform:scaleX(0);
        }
    }
    &:hover{
        span:after{
            transform:scaleX(1);
            opacity:1;
        }
    }
}
`

const UserImg = styled.img`
    width:45px;
    height:45px;
    border-radius:50%;
    cursor :pointer;
`
