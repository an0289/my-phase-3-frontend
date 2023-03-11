import React from 'react'
import { Container, Header, Grid, Image, Search, Divider } from 'semantic-ui-react'
import AnticipatedGameCard from './AnticipatedGameCard'

function AnticipatedGames() {
    return (
        <div style={{ backgroundColor:"white" }}>
        <Divider hidden />
        <Header style={{ fontFamily:"Impact" }} as='h1' icon textAlign='center'>
            Most Anticipated Games of 2023
        </Header>
        <Container style={{ paddingLeft:460}}>
            <Search
                size="medium"
                type="text"
                placeholder="Search Games"
            />
        </Container>
        <Divider hidden />
            <Container>
            <Grid center columns={3} divided>
                <Grid.Row>
                    <AnticipatedGameCard />
                </Grid.Row>
            </Grid>
            </Container>
        
        </div>
    )
}

export default AnticipatedGames