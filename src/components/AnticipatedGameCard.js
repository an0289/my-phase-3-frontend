import React, { useState } from 'react'
import { Card, Grid, Divider, Button } from 'semantic-ui-react'
import NewAnticipatedReview from './NewAnticipatedReview'

function AnticipatedGameCard({ anticipatedGame, setAnticipatedGames }) {
    const { id, image, name, platforms, release_date: releaseDate } = anticipatedGame
    const [isAnticipatedReview, setIsAnticipatedReview] = useState(false)
    return (
        <>
        {isAnticipatedReview ? (
        <NewAnticipatedReview />
        ) : (
        <Grid.Column>
            <Card key={id} color="black">
                <img src={image} height={230} />
                <Card.Content>
                Release Date: <span style={{ fontWeight: 'bold' }}>{releaseDate}</span> 
                <Card.Header as='h1'>
                    {name}
                </Card.Header>
                <Card.Meta>
                <span style={{ fontWeight: 'bold' }}>Platforms:</span> {platforms}
                </Card.Meta>
                <Card.Description>
                    A brief synopsis about each game
                </Card.Description>
                </Card.Content>
                <Button onClick={() => setIsAnticipatedReview((isAnticipatedReview) => !isAnticipatedReview)}>Leave A Review</Button>
            </Card>
            <Divider />
        </Grid.Column>
         )}
        </>
    )
}

export default AnticipatedGameCard 