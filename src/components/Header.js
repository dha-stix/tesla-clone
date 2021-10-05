import React, {useState} from 'react'
import styled from "styled-components"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Header = () => {
    const [clicked, setClicked] = useState(false)
    return (
        <div>
            <Container>
            <img src="/images/logo.svg"  alt="Tesla" />

            <Menu>
                <li>MODEL S</li>
                <li>MODEL 3  </li>
                <li> MODEL X  </li>
                <li> MODEL Y  </li>
            </Menu>
            <RightMenu>
                <li> SHOP  </li>
                <li> TESLA ACCOUNT  </li>
            </RightMenu>
            <Hamburger onClick={()=> setClicked(true)}/>
            {clicked && (
                <>
                <BurgerNav>
                    <li> Model S  </li>
                    <li> Model 3  </li>
                    <li> Model X  </li>
                    <li> Model Y  </li>
                    <li> Existing Inventory  </li>
                    <li> Used Inventory  </li>
                    <li> Trade-in  </li>
                    <li> Cybertruck  </li>
                    <li> Roadaster  </li>
                    <li> Utitlities   </li>
                    <li> Test Drive  </li>
                    <li> Cargo Delivery  </li>
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
        margin: 0px 10px;
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
    transition: all 20s ease-in;
    transform: translateX(0%);
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
