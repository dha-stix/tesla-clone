import React from 'react'
import styled from "styled-components"
import CarsDisplay from './CarsDisplay'
import {cars} from "./cars"

const Home = () => {
    return (
       <Container>
        {cars.map(car => (
            <CarsDisplay car={car} key={car.id}/>
        ))}
       </Container>
    )
}

export default Home

const Container = styled.main`
    height: 100vh;

`
