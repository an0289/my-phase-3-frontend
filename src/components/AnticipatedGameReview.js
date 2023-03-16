import React from 'react'
import { List } from 'semantic-ui-react'

function AnticipatedGameReview({ review }) {

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
            </List.Item>
        </List>
    )     
}

export default AnticipatedGameReview