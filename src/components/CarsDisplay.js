import React from 'react'
import styled from "styled-components"
import arrow from "../images/down-arrow.svg"
import {Fade} from "react-reveal"

const CarsDisplay = ({car}) => {
    return (
        <Wrap bgImage={car.image}>
        <Fade bottom>
            <ItemText>
                <h1>{car.title}</h1>
                <p>{car.text}</p>
            </ItemText> 
        </Fade>
        <Buttons>
            <Fade bottom>
                <ButtonGroup>
                
                    <LeftButton>
                        {car.leftBtn}
                    </LeftButton>
                    {car.rightBtn &&
                    (
                        <RightButton>
                        {car.rightBtn}
                    </RightButton>
                    )}
                </ButtonGroup>
            </Fade>

            <DownArrow src={arrow} alt="Tesla Clone"/>

        </Buttons>
    </Wrap>
    )
}

export default CarsDisplay

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: ${props => `url("${props.bgImage}")`};
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
`
const ItemText = styled.div`
    padding-top : 16vh;
    text-align: center;
    h1 {
        margin-bottom: 15px
    }
`
const ButtonGroup = styled.div`
display: flex;
align-items: center;
    @media screen and (max-width: 768px) {
        flex-direction: column
    }
`
const LeftButton = styled.button`
    background-color:  rgba(23,26,32,0.8);
    height: 40px;
    width: 256px;
    border-radius: 100px;
    color: #fff;
    text-align: center;
    opacity: 0.85;
    text-transform : uppercase;
    font-size: 12px;
    margin: 8px;
    cursor: pointer;
    border: none;
    outline: none;
    margin-bottom: 20px
`
const RightButton = styled(LeftButton)`
    background-color: white;
    color: #000;
    opacity: 0.65
`
const DownArrow = styled.img`
margin: 10px 0px 10px 0px;
height: 40px;
cursor: pointer;
animation: animateBtn infinite 1.5s
`
const Buttons = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center

`