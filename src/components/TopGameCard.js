import React, { useState } from 'react'
import TopGameReviewList from './TopGameReviewList'
import { Card, Grid, Divider, Item, Button } from 'semantic-ui-react'

function TopGameCard({ topGame, onAddReview, onDeleteReview, onUpdateReview }) {
   
    const { name, image, id, platforms, developers, genre, ranking, website } = topGame 
    const [isSeeingReviews, setIsSeeingReviews] = useState(false)
    const [changeDate, setChangeDate] = useState("")



return (
    <>
    <Grid.Column>
        <Item.Group>
            <Item>
                <img height={250} width={300} style={{marginRight: '10px'}} src={image} />
                <Item.Content>
                    <Item.Header as='a'>{name}</Item.Header>
                    <Item.Meta>{developers}</Item.Meta>
                    <Item.Description style={{ fontWeight: 'bold' }} as='a' href={website}>Click here to learn more about this game</Item.Description>
                    <Item.Extra>
                    Platforms: <span style={{ fontWeight: 'bold' }}>{platforms}</span>
                    </Item.Extra>
                    <Item.Extra>
                    Genre: <span style={{ fontWeight: 'bold' }}>{genre}</span>
                    </Item.Extra>
                    <Item.Extra>
                    Rank: <span style={{ fontWeight: 'bold' }}>{ranking}</span>
                    </Item.Extra>
                    <Divider hidden />
                    {isSeeingReviews ? (<TopGameReviewList topGame={topGame} 
                    onAddReview={onAddReview} onUpdateReview={onUpdateReview} onDeleteReview={onDeleteReview}
                    isSeeingReviews={isSeeingReviews} setIsSeeingReviews={setIsSeeingReviews}/>) : (
                    <Button color="black" onClick={() => setIsSeeingReviews((isSeeingReviews) => !isSeeingReviews)}>See Reviews</Button>
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