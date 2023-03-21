import React, { useState } from 'react'
import { Button, Segment, List } from 'semantic-ui-react'
import AnticipatedGameReview from './AnticipatedGameReview'
import NewAnticipatedGameReview from './NewAnticipatedGameReview'


function AnticipatedGameReviewList({ anticipatedGame, setIsSeeingReviews, isSeeingReviews, onAddReview, onDeleteReview, onUpdateReview }) {

    const { id, reviews } = anticipatedGame
    
    const [isAdding, setIsAdding] = useState(false)

    return (
    <Segment raised>
    <List divided relaxed>
    {reviews.map((review) => (
    <AnticipatedGameReview review={review} onDeleteReview={onDeleteReview} onUpdateReview={onUpdateReview}/>
    ))}
    </List>
    <Button floated="left" onClick={() => setIsSeeingReviews((isSeeingReviews) => !isSeeingReviews)}>Hide Reviews</Button>
    {isAdding ? (<NewAnticipatedGameReview anticipatedGameId={id}setIsAdding={setIsAdding} onAddReview={onAddReview} />) : (
    <Button onClick={() => setIsAdding((isAdding) => !isAdding)} floated="right">Add Review</Button>
    )}
    
    </Segment>
    )
}







export default AnticipatedGameReviewList