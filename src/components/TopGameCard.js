import React, { useState } from 'react'
import NewTopReview from './NewTopReview'
import { Card, Grid, Divider, Item, Button } from 'semantic-ui-react'

function TopGameCard({ topGame, setTopGames }) {
   
const { id, image, name, platforms, developers, genre, ranking } = topGame
const [isReview, setIsReview] = useState(false)



return (
    <>
    {isReview ? (
    <NewTopReview topGame={topGame} setIsReview={setIsReview}/>
    ) : (
    <Grid.Column>
        <Item.Group>
            <Item>
                <img height={250} width={300} style={{marginRight: '10px'}} src={image} />
                <Item.Content>
                    <Item.Header as='a'>{name}</Item.Header>
                    <Item.Meta>{developers}</Item.Meta>
                    <Item.Description>Brief Synopsis of Game</Item.Description>
                    <Item.Extra>
                    Platforms: <span style={{ fontWeight: 'bold' }}>{platforms}</span>
                    </Item.Extra>
                    <Item.Extra>
                    Genre: <span style={{ fontWeight: 'bold' }}>{genre}</span>
                    </Item.Extra>
                    <Item.Extra>
                    Rank: <span style={{ fontWeight: 'bold' }}>{ranking}</span>
                    </Item.Extra>
                    <Button onClick={() => setIsReview((isReview) => !isReview)}>Leave A Review</Button>
                </Item.Content>
            </Item>
        </Item.Group>
        <Divider />
    </Grid.Column>
     )}
    </>

    )
}

export default TopGameCard