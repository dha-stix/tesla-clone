import React from 'react'
import styled from "styled-components"
import Section from './Section'

const Home = () => {
    return (
       <Container>
           
           <Section 
                title="Model S"
                image="/model-s.jpg"
                text="Order Online for Touchless Delivery"
                leftBtn = "Custom order"
                rightBtn = "Existing Inventory"
            />
            <Section 
                title="Model X"
                image="/model-x.jpg"
                text="Order Online for Touchless Delivery"
                leftBtn = "Custom order"
                rightBtn = "Existing Inventory"
            />
             <Section 
                title="Model 3"
                image="/model-3.jpg"
                text="Order Online for Touchless Delivery"
                leftBtn = "Custom order"
                rightBtn = "Existing Inventory"
            />
            <Section 
                title="Model Y"
                image="/model-y.jpg"
                text="Order Online for Touchless Delivery"
                leftBtn = "Custom order"
                rightBtn = "Existing Inventory"
            />
            <Section 
                title="Lowest Cost Solar Panels in America"
                image="/solar-panel.jpg"
                text="Money back guarantee"
                leftBtn = "Order now"
                rightBtn = "Learn more"
            />
            <Section 
                title="Solar for New Roofs"
                image="/solar-roof.jpg"
                text="Solar Roof Costs Less Thana New Roof Plus Solar Panels"
                leftBtn = "Order now"
                rightBtn = "Learn more"
            />
            <Section 
                title="Accessories"
                image="/accessories.jpg"
                text=""
                leftBtn = "Shop now"
            />
       </Container>
    )
}

export default Home

const Container = styled.main`
    height: 100vh;

`
