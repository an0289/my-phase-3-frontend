import React from 'react'
import { Container, Header, Grid, Image, Search, Divider, Segment } from 'semantic-ui-react'
import TopGameCard from './TopGameCard'

function TopGames({ topGames, setTopGames, onDeleteReview, onAddReview, onUpdateReview }) {
return (
    <div style={{ background:"white" }}>
     <Container fluid style={{ background: "black"}}>
            <Header textAlign="right" style={{ fontFamily: "Garamond", fontSize:"40px", color: "white", paddingRight:150, paddingBottom:50}}>
                Top Games of 2022
            </Header>
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