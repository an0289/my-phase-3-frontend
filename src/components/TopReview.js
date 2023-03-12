import React, { useState } from 'react'
import { Form, Button, Divider, Segment, Label, List } from 'semantic-ui-react'

function TopReview({ topGame, istopReview, setIsTopReview }) {
    const {name, reviews} = topGame

    return (
    <Segment raised>
    <Label size="large" color="black" ribbon>{name} Reviews </Label>
        <List divided relaxed>
        {reviews.map((review) => (
            <List.Item>
            <List.Icon name='github' size='large' verticalAlign='middle' />
            <List.Content>
                <List.Header as='a'>{review.user.name}</List.Header>
                <List.Description as='a'>{review.comment}</List.Description>
            </List.Content>
            </List.Item>
        ))}
        <Button onClick={() => setIsTopReview((isTopReview) => !isTopReview)}>Hide Reviews</Button>
        <Button floated right>Add Review</Button>
        </List>     
    </Segment>
    )
}







export default TopReview