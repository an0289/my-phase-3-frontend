import React, { useState } from 'react'
import { List, Form, Button } from 'semantic-ui-react'


function NewTopGameReview({ setIsAdding, onAddReview, topGameId }) {
    const [username, setUsername] = useState("")
    const [comment, setComment] = useState("")
    const [avatar, setAvatar] = useState("")
    const [score, setScore] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        setIsAdding(false)
        console.log('submitted')

        fetch("http://localhost:9292/reviews", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: username,
                comment: comment,
                avatar: avatar,
                score: score,
                top_game_id: topGameId
            }),
        })
          .then((r) => r.json())
          .then((newReview) => {
            onAddReview(newReview, console.log('am I working?'))
            console.log(newReview)
          })
    }

    return (
    <>
    <Form onSubmit={handleSubmit}>
    <List>
        <List.Item>
            <List.Content>
                <List.Header>
                    <input 
                    onChange={(e) => setAvatar(e.target.value)}
                    type="text"
                    name="avatar"
                    value={avatar}
                    placeholder="avatar"
                    />
                </List.Header>
                <List.Header as='a'><input 
                    onChange={(e) => setUsername(e.target.value)}
                    type="text"
                    name="username"
                    value={username}
                    placeholder="Username" /></List.Header>
                <List.Description style={{ fontWeight: 'bold' }} >
                <input 
                    onChange={(e) => setScore(e.target.value)}
                    type="text"
                    name="score"
                    value={score}
                    placeholder="score" />
                </List.Description>
                <List.Description ><input 
                    onChange={(e) => setComment(e.target.value)}
                    type="text"
                    name="comment"
                    value={comment}
                    placeholder="comment" /></List.Description>
            </List.Content>
        </List.Item>
        <Button type="submit">Submit</Button>
        </List>
    </Form>
    </>
    
    )     
}

export default NewTopGameReview