import React, { useState } from 'react'
import { Form, Button, Divider, Segment, Label } from 'semantic-ui-react'

function NewAnticipatedReview() {


const [formDate, setFormData] = useState({
    score: "score",
    comment: "comment",
    

})


return (
<>
<Segment raised>
    <Label size="large" color="black" ribbon>Leave A Review</Label>
    <Form>
        <Form.Field>
        <label>Game</label>
        <input placeholder='Game' />
        </Form.Field>
        <Form.Field>
        <label>User Name</label>
        <input placeholder='User Name' />
        </Form.Field>
        <Form.TextArea label='Review' placeholder='Leave your review'/>
        <Button type='submit'>Submit</Button>
    </Form>
</Segment>
<Divider />
</>
)
}

export default NewAnticipatedReview