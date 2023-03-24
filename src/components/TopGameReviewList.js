import React, { useState } from 'react'
import { Form, Button, Divider, Segment, Label, List } from 'semantic-ui-react'
import TopGameReview from './TopGameReview'
import NewTopGameReview from './NewTopGameReview'

function TopGameReviewList({ topGame, onAddReview, onDeleteReview, onUpdateReview, setIsSeeingReviews, isSeeingReviews }) {
    
    const { name, id, reviews } = topGame
    
    const [isAdding, setIsAdding] = useState(false)

    return (
    <Segment raised>
    <List divided relaxed>
    {reviews.map((review) => (
    <TopGameReview review={review} onDeleteReview={onDeleteReview} onUpdateReview={onUpdateReview}/>
    ))}
    </List>
    <Button floated left onClick={() => setIsSeeingReviews((isSeeingReviews) => !isSeeingReviews)}>Hide Reviews</Button>
    {isAdding ? (<NewTopGameReview topGameId={id} setIsAdding={setIsAdding} onAddReview={onAddReview} />) : (
    <Button onClick={() => setIsAdding((isAdding) => !isAdding)} floated right>Add Review</Button>
    )}
    
    </Segment>
    )
}







export default TopGameReviewList