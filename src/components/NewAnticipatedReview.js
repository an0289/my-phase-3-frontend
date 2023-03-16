import React, { useState } from 'react'
import { List, Form, Button } from 'semantic-ui-react'





function NewAnticipatedReview({ onAddReview, anticipatedGameId, isAdding, setIsAdding }) {

    const [comment, setComment] = useState("")
    const [score, setScore] = useState("")
    const [username, setUsername] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        setIsAdding(false)

        // console.log("are you updating in real time")

        fetch("http://localhost:9292/reviews", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                comment:comment,
                score: score, 
                username: username,
                anticipated_game_id: anticipatedGameId

            })
        })
            .then((r) => r.json())
            .then((newReview) =>  {
                onAddReview(newReview)
                setScore("")
                setComment("")
                setUsername("")
            })

               
    }


    return (
    <Form onSubmit={handleSubmit}>
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
                     onChange={(e) => setComment(e.target.value)}/>
                </List.Description>
            </List.Content>
        </List.Item>
        <Button type='submit'>Submit</Button>
    </Form>
    )

}

export default NewAnticipatedReview