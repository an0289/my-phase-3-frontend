import React, { useState } from 'react'
import TopReview from './TopReview'
import { Card, Grid, Divider, Item, Button } from 'semantic-ui-react'

function TopGameCard({ topGame, setTopGames }) {
   
const { id, image, name, platforms, developers, genre, ranking } = topGame
const [isTopReview, setIsTopReview] = useState(false)



return (
    <>
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
                    {isTopReview ? (<TopReview topGame={topGame} isTopReview={isTopReview} setIsTopReview={setIsTopReview}/>) : (
                    <Button onClick={() => setIsTopReview((isTopReview) => !isTopReview)}>See Reviews</Button>
                )} 
                </Item.Content>
            </Item>
        </Item.Group>
        <Divider />
    </Grid.Column>
    </>

    )
}

export default TopGameCard