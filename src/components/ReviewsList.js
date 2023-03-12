import React from 'react'
import Review from './Review'
import { Header, Container, Divider } from 'semantic-ui-react'

function ReviewsList() {
return (
    <div style={{ backgroundColor:"white" }}>
        <Divider hidden />
        <Header style={{ fontFamily:"Impact" }} as='h1' icon textAlign='center'>
            Reviews 
        </Header>
        <Divider hidden />
            <Container>
                {/* {reviews.map((review) => (
                <Review key={review.id} topGame={topGame} setTopGames={setTopGames}/>
                 ))}     */}
            </Container>
        
        </div>
 )
}

export default ReviewsList 