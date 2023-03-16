import React, {useState} from 'react'
import { List, Button, Icon } from 'semantic-ui-react'

function AnticipatedGameReview({ review, onDeleteReview, onUpdateReview }) {

    const { id, username, comment, score, created_at: createdAt, updated_at: updatedAt } = review 
    const [isEditing, setIsEditing] = useState(false)
    const [reviewComment, setReviewComment] = useState("")

    function handleDeleteClick() {
        console.log('clicked')
        fetch(`http://localhost:9292/reviews/${id}`, {
            method: "DELETE"
        })
        .then((r) => r.json())
        .then((deletedReview) => {
            onDeleteReview(deletedReview, console.log('not sure if Im working'))
            console.log(deletedReview)
        })
        
    }

    function handleEditReviewSubmit(e) {
        e.preventDefault()
        setIsEditing(false)

        fetch(`http://localhost:9292/reviews/${id}`, {
            method: "PATCH", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                comment: reviewComment})
        })
            .then((r) => r.json())
            .then((updatedReview) => onUpdateReview(updatedReview))
        
    }

    return (
        <List key={id} divided relaxed>
            {isEditing ? (
            <List.Item>
                <List.Icon name='github' size='large' verticalAlign='middle' />
                <List.Content>
                    <List.Header as='a'>
                        {username}
                    </List.Header>
                    <List.Description as='a'>
                        <form onSubmit={handleEditReviewSubmit}>
                          <input 
                          onChange={(e) => setReviewComment(e.target.value)}
                          type="text"
                          name="comment"
                          value={reviewComment.comment}
                          placeholder="comment"
                          />  
                          <input type="submit" value="Save" /> 
                        </form>
                    </List.Description>
                </List.Content>
            </List.Item>
            ) : (
            <List.Item>
                <List.Icon name='github' size='large' verticalAlign='middle' />
                <List.Content>
                    <List.Header as='a'>
                        {username}
                    </List.Header>
                    <List.Description as='a'>{comment}</List.Description>
                </List.Content>
                <Button onClick={handleDeleteClick} size='mini' icon floated="right">
                    <Icon name='trash' />
                </Button>
                <Button onClick={(e) => setIsEditing((isEditing) => !isEditing)} size='mini' icon floated="right">
                    <Icon name='edit' />
                </Button>
            </List.Item>
            )}
        </List>
    )     
}

export default AnticipatedGameReview