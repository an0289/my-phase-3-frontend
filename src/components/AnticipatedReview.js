import React, { useState } from 'react'
import { Form, Button, Divider, Segment, Label, List } from 'semantic-ui-react'

function AnticipatedReview({ anticipatedGame }) {
    const {name, reviews} = anticipatedGame

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
        </List>     
    </Segment>
    )
}







export default AnticipatedReview