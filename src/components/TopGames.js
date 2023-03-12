import React from 'react'
import { Container, Header, Grid, Image, Search, Divider } from 'semantic-ui-react'
import TopGameCard from './TopGameCard'

function TopGames({ topGames, setTopGames }) {
return (
    <div style={{ backgroundColor:"white" }}>
    <Divider hidden />
    <Header style={{ fontFamily:"Impact" }} as='h1' icon textAlign='center'>
        Top Games of 2022
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
        {/* <Grid center rows divided>
            <Grid.Row> */}
                {topGames.map((topGame) => (
                <TopGameCard key={topGames.id} topGame={topGame} setTopGames={setTopGames}/>
                ))}    
            {/* </Grid.Row>
        </Grid> */}
        </Container>
    
    </div>
)
}

export default TopGames 