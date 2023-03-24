import React, { useState, useEffect } from 'react'
import { Container, Header, Grid, Image, Search, Divider, Segment, Button, Icon } from 'semantic-ui-react'
import AnticipatedGameCard from './AnticipatedGameCard'
import NewGame from './NewGame'




function AnticipatedGames({ anticipatedGames, setAnticipatedGames, onUpdateReleaseDate, onAddReview, onDeleteReview, searchWord, setSearchWord, onUpdateReview, onAddGame, onDeleteGame }) {

    const anticipatedGamesToDisplay = anticipatedGames.filter((anticipatedGame) => {
        if(searchWord === "") return true;
        return anticipatedGame.name.toLowerCase().includes(searchWord.toLowerCase())
    })

    const [isAdding, setIsAdding] = useState(false)


    return (
        <div style={{background: "white" }}>
        <Container fluid style={{ background: "black"}}>
            <Header textAlign="right" style={{ fontFamily: "Garamond", fontSize:"40px", color: "white", paddingRight:100, paddingBottom:50}}>
                Most Anticipated Games of 2023
            </Header>
            <Divider hidden />
        </Container>
        {isAdding ? (<NewGame onAddGame={onAddGame} setIsAdding={setIsAdding} isAdding={isAdding}/>) : (
        <Container fluid style={{ paddingLeft:600, paddingRight:50 }}>
            <Search
                size="large"
                type="text"
                placeholder="Search Games"
                value={searchWord}
                onSearchChange={(e) => setSearchWord(e.target.value)}
            />
            <Button size="large" onClick={() => setIsAdding((isAdding) => !isAdding)} floated="right" color="green">
            Add Game
        </Button>
        </Container>
        )}
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
                      onUpdateReview={onUpdateReview}
                      onDeleteGame={onDeleteGame}/>   
                     ))} 
                </Grid.Row>
            </Grid>
            </Container>
        
        </div>
    )
}

export default AnticipatedGames