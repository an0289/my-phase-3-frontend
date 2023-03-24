import React, { useState, useEffect } from 'react'
import { Container, Header, Grid, Image, Search, Divider, Segment, Button, Icon } from 'semantic-ui-react'
import AnticipatedGameCard from './AnticipatedGameCard'




function AnticipatedGames({ anticipatedGames, setAnticipatedGames, onUpdateReleaseDate, onAddReview, onDeleteReview, searchWord, setSearchWord, onUpdateReview }) {
    console.log('what is anticipatedgames', anticipatedGames)
    const anticipatedGamesToDisplay = anticipatedGames.filter((anticipatedGame) => {
        if(searchWord === "") return true;
        return anticipatedGame.name.toLowerCase().includes(searchWord.toLowerCase())
    })

    


    return (
        <div style={{background: "linear-gradient(to left, #FFFFFF, #7B45E7)" }}>
        <Container fluid style={{ background: "black"}}>
            <Header textAlign="right" style={{ fontFamily: "Garamond", fontSize:"40px", color: "white", paddingRight:150, paddingBottom:50}}>
                Most Anticipated Games of 2023
            </Header>
            <Divider hidden />
        </Container>
        <Container fluid style={{ paddingLeft:600, paddingRight:50 }}>
        <Button color="green"  size="large" floated="right">
                    Add Game
                </Button>
            <Search
                size="large"
                type="text"
                placeholder="Search Games"
                value={searchWord}
                onSearchChange={(e) => setSearchWord(e.target.value)}
            />
        </Container>
        <Divider hidden />
            <Container>
            <Grid center columns={3} divided>
                <Grid.Row>
                    {anticipatedGamesToDisplay.map((anticipatedGame) => (
                     <AnticipatedGameCard 
                     key={anticipatedGame.id}
                     anticipatedGame={anticipatedGame}
                     setAntcipatedGames={setAnticipatedGames}
                     onUpdateReleaseDate={onUpdateReleaseDate}
                     onAddReview={onAddReview}
                     onDeleteReview={onDeleteReview}
                      onUpdateReview={onUpdateReview}/>   
                     ))} 
                </Grid.Row>
            </Grid>
            </Container>
        
        </div>
    )
}

export default AnticipatedGames