import React, { useState } from 'react'
import { Form, Button, Divider, Segment, Label, List, Icon } from 'semantic-ui-react'
import AnticipatedGameReview from './AnticipatedGameReview'


function AnticipatedGameReviewList({ anticipatedGame, setIsSeeingReviews, isSeeingReviews }) {
    
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
    {reviews.map((review) => (
    <AnticipatedGameReview 
            review={review}/>
     ))}
    <Button onClick={() => setIsSeeingReviews((isSeeingReviews) => !isSeeingReviews)}>Hide Reviews</Button> 
    </Segment>
    )
}







export default AnticipatedGameReviewList