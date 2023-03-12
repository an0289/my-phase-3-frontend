import React from 'react'
import { Button, Icon, Image, Item, Label, Divider } from 'semantic-ui-react'

function Review({ review, setReviews }) {

    const { comment, top_game_id: topGameId, anticipated_game_id: anticipatedGameId, user_id: userId, anticipated_game: anticipatedGame, top_game: topGame, user } = review
return (

 <Item.Group divided>
    <Item>
      <Item.Content>
        {topGameId ? ( <Item.Header as='a'>{topGame.name}</Item.Header>) : (<Item.Header>{anticipatedGameId}</Item.Header>)}
        <Item.Meta>
          <span >{userId}</span>
        </Item.Meta>
        <Item.Description>{comment}</Item.Description>
      </Item.Content>
    </Item>
    <Divider fitted />
</Item.Group>
 )
}

export default Review 