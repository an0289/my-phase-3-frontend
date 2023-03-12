import React from 'react'
import { Card, Grid, Divider, Item, Container } from 'semantic-ui-react'

function TopGameCard({ topGame, setTopGames }) {
   
const { id, image, name, platforms, developers, genre, ranking } = topGame
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
                    <Item.Meta>Leave A Review</Item.Meta>
                </Item.Content>
            </Item>
        </Item.Group>
        {/* <Card key={id} color="black">
            <img src={image} height={300} />
            <Card.Content>
                {developers}
            <Card.Header as='h1'>
                {name}
            </Card.Header>
            <Card.Meta>
            <span style={{ fontWeight: 'bold' }}>Genre:</span> {genre}
            </Card.Meta>
            <Card.Meta>
            <span style={{ fontWeight: 'bold' }}>Platforms:</span> {platforms}
            </Card.Meta>
            <Card.Description>
                A brief synopsis about each game
            </Card.Description>
            <Card.Description>
                <span style={{ fontWeight: 'bold' }}>Rank:</span> {ranking}
            </Card.Description>
            </Card.Content>
            <Card.Content extra>
                Leave a Review 
            </Card.Content>
        </Card> */}
        <Divider />
    </Grid.Column>
    </>

    )
}

export default TopGameCard