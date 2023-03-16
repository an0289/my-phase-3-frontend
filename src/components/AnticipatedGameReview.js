import React, {useEffect} from 'react'
import { List, Button, Icon } from 'semantic-ui-react'

function AnticipatedGameReview({ review, onDeleteReview }) {



    const { id } = review 

    function handleDeleteClick() {
        fetch(`http://localhost:9292/reviews/${id}`, {
            method: "DELETE"
        })
            .then((r) => r.json())
            .then((deleteReview) => onDeleteReview(deleteReview))
    }

    const { username, comment } = review
    return (
        <List>
            <List.Item>
                <List.Icon name='github' size='large' verticalAlign='middle' />
                <List.Content>
                    <List.Header as='a'>
                        {username}
                    </List.Header>
                    <List.Description as='a'>{comment}</List.Description>
                </List.Content>
                <Button onClick={handleDeleteClick} size='mini' icon>
                    <Icon name='trash' />
                </Button>
            </List.Item>
        </List>
    )     
}

export default AnticipatedGameReview