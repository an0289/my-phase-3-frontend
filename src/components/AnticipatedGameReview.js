import React, {useEffect} from 'react'
import { List, Button, Icon } from 'semantic-ui-react'

function AnticipatedGameReview({ review, onDeleteReview }) {

    // useEffect(() => { // this hook will get called every time myArr has changed
    //     // perform some action every time myArr is updated
    //     onDeleteReview(review)
    //     console.log('Updated State', review)
    //  }, [review])

    const { id } = review 

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

    const { username, comment } = review
    return (
        <List key={id}>
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