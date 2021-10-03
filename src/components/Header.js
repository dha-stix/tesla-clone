import React, {useState} from 'react'
import styled from "styled-components"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {Fade} from "react-reveal"
const Header = () => {
    const [clicked, setClicked] = useState(false)
    return (
        <div>
            <Container>
            <img src="/images/logo.svg"  alt="Tesla" />

            <Menu>
                <li><a href="#">MODEL S</a></li>
                <li><a href="#">MODEL 3</a></li>
                <li><a href="#">MODEL X</a></li>
                <li><a href="#">MODEL Y</a></li>
            </Menu>
            <RightMenu>
                <li><a href="#">SHOP</a></li>
                <li><a href="#">TESLA ACCOUNT</a></li>
            </RightMenu>
            <Hamburger onClick={()=> setClicked(true)}/>
            {clicked && (
                <>
                <BurgerNav>
                    <li><a href="#">Model S</a></li>
                    <li><a href="#">Model 3</a></li>
                    <li><a href="#">Model X</a></li>
                    <li><a href="#">Model Y</a></li>
                    <li><a href="#">Existing Inventory</a></li>
                    <li><a href="#">Used Inventory</a></li>
                    <li><a href="#">Trade-in</a></li>
                    <li><a href="#">Cybertruck</a></li>
                    <li><a href="#">Roadaster</a></li>
                    <li><a href="#">Utitlities </a></li>
                    <li><a href="#">Test Drive</a></li>
                    <li><a href="#">Cargo Delivery</a></li>
                </BurgerNav>
            <CloseBtn onClick={()=>setClicked(false)}/>
            </>
            )}
            
            </Container>
        </div>
    )
}

export default Header
const Container = styled.div`
height: 10vh;
padding: 20px;
position: fixed;
top: 0;
left: 0;
right:0;
z-index: 1;
display: flex;
align-items: center;
justify-content: space-between;
`
const Menu =  styled.ul`
    display: flex;
    li {
        list-style-type : none;
        margin: 0px 10px
    }
    li a {
        text-decoration: none;
        font-weight: 600;
        font-size: 16px;
        cursor: pointer;
    }
    @media screen and (max-width:768px) {
        display:none
    }
`
const RightMenu = styled(Menu)`
`
const Hamburger = styled(MenuIcon)`
cursor: pointer;
`
const CloseBtn = styled(CloseIcon)`
cursor: pointer;
position: fixed;
top: 15px;
right: 15px;
z-index: 20
`
const BurgerNav = styled.ul`
    background-color: #fff;
    height: 100vh;
    position: fixed;
    top:0; 
    right: 0;
    bottom:0;
    z-index: 10;
    padding: 40px 20px;
    width: 300px;
    transform: translateX(0);
    transition: transform 0.2 ease-in-out; 
 li {
        list-style-type : none;
        padding: 15px 0;
        border-bottom: 1px solid rgba(0,0,0, .2)
    }
    li a {
        text-decoration: none;
        cursor: pointer;
        font-weight: 600
    }
`
