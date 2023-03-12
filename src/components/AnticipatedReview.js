import React, { useState } from 'react'
import { Form, Button, Divider, Segment, Label, List } from 'semantic-ui-react'
import NewAnticipatedReview from './NewAnticipatedReview'

function AnticipatedReview({ anticipatedGame, isAnticipatedReview, setIsAnticipatedReview, onAddReview }) {
    const {name, reviews, id, user_id: userId } = anticipatedGame
    const [isAdding, setIsAdding] = useState(false)

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
        <Button onClick={() => setIsAnticipatedReview((isAnticipatedReview) => !isAnticipatedReview)}>Hide Reviews</Button>
        {isAdding ? (<NewAnticipatedReview onAddReview={onAddReview} anticipatedGameId={id} userId={userdId}/>) : (
        <Button onClick={() => setIsAdding((isAdding) => !isAdding)} floated right>Add Review</Button>
        )}
        
        </List>     
    </Segment>
    )
}







export default AnticipatedReview