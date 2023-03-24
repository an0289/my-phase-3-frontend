import React from 'react'
import {Container, Segment, Header, Grid, Image, Card, Button, Icon, Divider, Label, Form, TextArea } from 'semantic-ui-react'
import Background from "../assets/pexels-lucie-liz-3165335.jpg"

function Home() {

    return (
        <div style={{ backgroundColor:"black", backgroundImage: `url(${Background})`,backgroundSize:"cover", backgroundRepeat:"no-repeat", height:"89vh"}} >
            <Divider hidden />
            <Container style={{ paddingLeft:340, paddingTop: 150}}>
                <Segment  raised circular style={{ height:500, width: 500}}>
                    <Header style={{ fontFamily:"Lucida Handwriting"}}as="h1">
                        Hello, there!
                    </Header>
                    <Header as="h2">
                        Check out some of the most anticipated games set to come out this year in 2023! And, while you're at it, go take a peak at the top 10 games of 2022
                    </Header>
                    <Header style={{ fontStyle:"italic" }} as="h3">
                        Feel free to leave reviews on any of the games listed that you have played, or add a game you're super excited for
                    </Header>
                </Segment>
                
            </Container>
           
            
        
        </div>
        )

}

export default Home 