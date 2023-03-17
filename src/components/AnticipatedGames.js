import React from 'react'
import { Container, Header, Grid, Image, Search, Divider, Segment } from 'semantic-ui-react'
import AnticipatedGameCard from './AnticipatedGameCard'




function AnticipatedGames({ anticipatedGames, setAnticipatedGames, onUpdateReleaseDate, onAddReview, onDeleteReview, searchWord, setSearchWord, onUpdateReview }) {
    const anticipatedGamesToDisplay = anticipatedGames.filter((anticipatedGame) => {
        if(searchWord === "") return true;
        return anticipatedGame.name.toLowerCase().includes(searchWord.toLowerCase())
    })

    return (
        <div style={{background: "white" }}>
        <Divider hidden />
        <Container style={{ paddingLeft:335, paddingTop: 30}}>
        <Segment  inverted raised circular  >
            <Header style={{ fontFamily:"Arial"}}as="h1">
                Most Anticipated Games of 2023
            </Header>
        </Segment>
            <Divider hidden />
        </Container>
        <Container style={{ paddingLeft:480}}>
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