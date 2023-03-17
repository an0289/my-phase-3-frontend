import React from 'react'
import { Container, Header, Grid, Image, Search, Divider, Segment } from 'semantic-ui-react'
import TopGameCard from './TopGameCard'

function TopGames({ topGames, setTopGames, onAddDelete, onAddReview, onUpdateReview }) {
return (
    <div style={{ backgroundColor:"white" }}>
    <Divider hidden />
    <Container style={{ paddingLeft:430, paddingTop: 30}}>
        <Segment inverted raised circular  >
            <Header style={{ fontFamily:"Arial"}}as="h1">
                Top Games of 2022
            </Header>
        </Segment>
            <Divider hidden />
        </Container>
    <Divider hidden />
        <Container>
                {topGames.map((topGame) => (
                <TopGameCard key={topGame.id} topGame={topGame} setTopGames={setTopGames}
                onAddDelete={onAddDelete} onAddReview={onAddReview} onUpdateReview={onUpdateReview}
                />
                ))}    
        </Container>
    
    </div>
)
}

export default TopGames 