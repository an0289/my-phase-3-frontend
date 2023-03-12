import React, { useState } from 'react'
import { List, Form, Button } from 'semantic-ui-react'



function NewAnticipatedReview({ onAddReview, userId, anticipatedGameId}) {

    const [comment, setComment] = useState("")
    const [score, setScore] = useState("0")

    function handleSubmit(e) {
        e.preventDefault()
        fetch("http://localhost:9292/reviews", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                comment:comment,
                score: score, 
                used_id: userId,
                anticipated_game_id: anticipatedGameId

            })
        })
            .then((r) => r.json())
            .then((newReview) => onAddReview(newReview))
    }
    return (
    <Form>
        <List.Item>
            <List.Icon name='github' size='large' verticalAlign='middle' />
            <List.Content>
                <List.Header as='a'>user name</List.Header>
                <List.Description as='a'>comment</List.Description>
            </List.Content>
        </List.Item>
    </Form>
    )

}

export default NewAnticipatedReview