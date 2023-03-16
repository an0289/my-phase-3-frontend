import React, { useState } from 'react'
import { Form, Button, Divider, Segment, Label, List, Icon } from 'semantic-ui-react'
import NewAnticipatedReview from './NewAnticipatedReview'

function AnticipatedReview({ anticipatedGame, isAnticipatedReview, setIsAnticipatedReview, onAddReview, onDeleteReview }) {
    const [isAdding, setIsAdding] = useState(false)
    const {name, id, reviews } = anticipatedGame

    // function handleDeleteClick() {
    //     fetch(`http://localhost:9292/reviews/${id}`, {
    //         method: "DELETE"
    //     })

    //     onDeleteReview(id)
    // }

    return (
    <Segment raised>
    <Label size="large" color="black" ribbon>{name} Reviews </Label>
        <List divided relaxed>
        {reviews.map((review) => {

        
            <List.Item>
            <List.Icon name='github' size='large' verticalAlign='middle' />
            <List.Content>
                <List.Header as='a'>{review.username}</List.Header>
                <List.Description as='a'>{review.comment}</List.Description>
            </List.Content>
            <Button icon floated="right">
                <Icon name="trash" />
            </Button>
            </List.Item>  
         })}
        </List>    
        <Button onClick={() => setIsAnticipatedReview((isAnticipatedReview) => !isAnticipatedReview)}>Hide Reviews</Button>
        {isAdding ? (<NewAnticipatedReview onAddReview={onAddReview} anticipatedGameId={id} setIsAdding={setIsAdding} isAdding={isAdding} />) : (
        <Button onClick={() => setIsAdding((isAdding) => !isAdding)} floated right>Add Review</Button>
        )} 
    </Segment>
    )
}







export default AnticipatedReview