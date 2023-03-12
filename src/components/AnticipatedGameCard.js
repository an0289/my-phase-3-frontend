import React, { useState } from 'react'
import { Card, Grid, Divider } from 'semantic-ui-react'

function AnticipatedGameCard({ anticipatedGame, setAnticipatedGames}) {
    const { id, image, name, platforms, release_date: releaseDate } = anticipatedGame
    return (
        <>
        <Grid.Column>
            <Card key={id} color="black">
                <img src={image} height={300} />
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
                <Card.Content extra>
                    Leave a Review 
                </Card.Content>
            </Card>
            <Divider />
        </Grid.Column>
        </>
    )
}

export default AnticipatedGameCard 