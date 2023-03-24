import React from 'react'
import { Container, Header, Grid, Image, Search, Divider, Segment } from 'semantic-ui-react'
import TopGameCard from './TopGameCard'

function TopGames({ topGames, setTopGames, onDeleteReview, onAddReview, onUpdateReview }) {
return (
    <div style={{ background:"linear-gradient(to left, #FFFFFF, #7B45E7)" }}>
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
                onDeleteReview={onDeleteReview} onAddReview={onAddReview} onUpdateReview={onUpdateReview}
                />
                ))}    
        </Container>
    
    </div>
)
}

export default TopGames 