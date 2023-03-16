import React, { useState } from 'react'
import { List, Form, Button } from 'semantic-ui-react'

function NewAnticipatedGameReview({ anticipatedGameId, onAddReview, setIsAdding }) {

    const [username, setUsername] = useState("")
    const [comment, setComment] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        setIsAdding(false)

        fetch("http://localhost:9292/reviews", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: username,
                comment: comment,
                anticipated_game_id: anticipatedGameId
            }),
        })
          .then((r) => r.json())
          .then((newReview) => {
            onAddReview(newReview)
            setUsername("")
            setComment("")
          })
    }

    return (
    <>
    <Form onSubmit={handleSubmit}>
    <List>
        <List.Item>
            <List.Icon name='github' size='large' verticalAlign='middle' />
            <List.Content>
                <List.Header as='a'>
                    <input
                        type="text"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                     />
                </List.Header>
                <List.Description as='a'>
                    <input 
                        type="text"
                        name="comment"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    />
                </List.Description>
            </List.Content>
            </List.Item>
            <Button type="submit">Submit</Button>
        </List>
    </Form>
    </>
    
    )     
}

export default NewAnticipatedGameReview