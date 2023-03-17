import React, {useState} from 'react'
import { List, Button, Icon, Label, Image, Form } from 'semantic-ui-react'

function AnticipatedGameReview({ review, onDeleteReview, onUpdateReview }) {

    const { id, username, avatar, comment, score, created_at: createdAt, updated_at: updatedAt } = review 

    const [isEditing, setIsEditing] = useState(false)

    const [reviewComment, setReviewComment] = useState("")
    const [reviewScore, setReviewScore] = useState("")

    const [imgSrc, setImgSrc] = useState(avatar)

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
                comment: reviewComment,
                score: reviewScore
            })
        })
            .then((r) => r.json())
            .then((updatedReview) => onUpdateReview(updatedReview))
        
    }

    return (
        < >
            {isEditing ? (
            <List.Item key={id}>
                {imgSrc ? (<Image avatar src={imgSrc}  />) : (<Image avatar src="https://p.kindpng.com/picc/s/22-223965_no-profile-picture-icon-circle-member-icon-png.png"  />)}
                <List.Content>
                <List.Header as='a'>{username}</List.Header>
                <Form onSubmit={handleEditReviewSubmit}>
                    <List.Description style={{ fontWeight: 'bold' }}>
                          <input 
                          onChange={(e) => setReviewScore(e.target.value)}
                          type="text"
                          name="score"
                          value={reviewScore.score}
                          placeholder={score}
                          />  
                    </List.Description>
                    <List.Description as='a'>
                          <input 
                          onChange={(e) => setReviewComment(e.target.value)}
                          type="text"
                          name="comment"
                          value={reviewComment.comment}
                          placeholder={comment}
                          />  
                    </List.Description>
                    <Button type='submit'>Save</Button>
                    </Form>
                </List.Content>
                <Button onClick={(e) => setIsEditing((isEditing) => !isEditing)} size='mini' icon floated="right">
                    <Icon name='edit' />
                </Button>
            </List.Item>
            ) : (
            <List.Item key={id}>
                 {imgSrc ? (<Image avatar src={imgSrc}  />) : (<Image avatar src="https://p.kindpng.com/picc/s/22-223965_no-profile-picture-icon-circle-member-icon-png.png"  />)}
                <List.Content>
                <List.Header as='a'>{username}</List.Header>
                    <List.Description style={{ fontWeight: 'bold' }} >
                        {score}
                    </List.Description>
                    <List.Description >{comment}</List.Description>
                </List.Content>
                <Button onClick={handleDeleteClick} size='mini' icon floated="right">
                    <Icon name='trash' />
                </Button>
                <Button onClick={(e) => setIsEditing((isEditing) => !isEditing)} size='mini' icon floated="right">
                    <Icon name='edit' />
                </Button>
            </List.Item>
            )}
        </>
    )     
}

export default AnticipatedGameReview