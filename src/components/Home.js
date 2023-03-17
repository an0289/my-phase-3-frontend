import React from 'react'
import {Container, Segment, Header, Grid, Image, Card, Button, Icon, Divider, Label, Form, TextArea } from 'semantic-ui-react'

function Home() {

    return (
        <div style={{ backgroundColor:"white", backgroundImage: `url(${Bar})`,backgroundSize:"cover", backgroundRepeat:"no-repeat", height:"100vh"}} >
            <Divider hidden />
            <Container style={{ paddingLeft:300, paddingTop: 150}}>
                <Segment raised circular style={{ height:500, width: 500}}>
                    <Header style={{ fontFamily:"Lucida Handwriting"}}as="h1">
                        Welcome!
                    </Header>
                    <Header as="h2">
                        Click on the "Bars" or "Breweries" button to browse some of Austin's most popular bars and breweries
                    </Header>
                    <Header style={{ fontStyle:"italic" }} as="h4">
                        Pssst: Do you have an honorable mention that you feel should be included? Feel free to add it on the "Add New" page
                    </Header>
                </Segment>
                
            </Container>
           
            
        
        </div>
        )

}

export default Home 