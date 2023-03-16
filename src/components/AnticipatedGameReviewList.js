import React, { useState } from 'react'
import { Form, Button, Divider, Segment, Label, List, Icon } from 'semantic-ui-react'
import AnticipatedGameReview from './AnticipatedGameReview'
import NewAnticipatedGameReview from './NewAnticipatedGameReview'


function AnticipatedGameReviewList({ anticipatedGame, setIsSeeingReviews, isSeeingReviews, onAddReview, onDeleteReview }) {

    const { name, id, reviews } = anticipatedGame
    
    const [isAdding, setIsAdding] = useState(false)

    return (
    <Segment raised>
    <Label size="large" color="black" ribbon>{name} Reviews </Label>
    {reviews.map((review) => (
    <AnticipatedGameReview review={review} onDeleteReview={onDeleteReview}/>
    ))}
    
    <Button floated left onClick={() => setIsSeeingReviews((isSeeingReviews) => !isSeeingReviews)}>Hide Reviews</Button>
    {isAdding ? (<NewAnticipatedGameReview anticipatedGameId={id}setIsAdding={setIsAdding} onAddReview={onAddReview} />) : (
    <Button onClick={() => setIsAdding((isAdding) => !isAdding)} floated right>Add Review</Button>
    )}
    
    </Segment>
    )
}







export default AnticipatedGameReviewList