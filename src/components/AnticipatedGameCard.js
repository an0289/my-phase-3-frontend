import React, { useState, useEffect } from 'react'
import { Card, Grid, Divider, Button, Icon, Feed, List, Segment } from 'semantic-ui-react'
import AnticipatedGameReviewList from './AnticipatedGameReviewList'

function AnticipatedGameCard({ anticipatedGame, onUpdateReleaseDate, onAddReview, onDeleteReview, onUpdateReview }) {
    
    const { name, image, id, platforms, release_date: releaseDate, reviews } = anticipatedGame 
    const [isSeeingReviews, setIsSeeingReviews] = useState(false)
    const [isEdit, setIsEdit] = useState(false)
    const [changeDate, setChangeDate] = useState("")
    
    
    

   

    // useEffect(() =>{
    //     setChangeDate(anticipatedGame)
    //     // console.log(reviews)
    // }, [anticipatedGame])


    function handleEditDateSubmit(e) {
        e.preventDefault()
        setIsEdit(false)

        fetch(`http://localhost:9292/anticipated_games/${id}`, {
            method: "PATCH", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                release_date: changeDate})
        })
            .then((r) => r.json())
            .then((updatedAnticipatedGame) => onUpdateReleaseDate(updatedAnticipatedGame))
        
    }

    return (
        <>
        <Grid.Column>
            <Card key={id} color="black">
                <img src={image} height={230} />
                {isEdit ? (
                <Card.Content>
                <form onSubmit={handleEditDateSubmit}>
                Release Date: <span style={{ fontWeight: 'bold' }}>
                    <input 
                    onChange={(e) => setChangeDate(e.target.value)}
                    type="text"
                    name="releaseDate"
                    value={changeDate.releaseDate}
                    placeholder={releaseDate} />
                </span>
                <input type="submit" value="Save" />   
                </form>
                <Button size="tiny" icon floated="right"
                    circular basic color="grey" onClick={() => setIsEdit((isEdit) => !isEdit)}>
                        <Icon name="edit" />
                    </Button>
                <Card.Header as='h1'>
                    {name}
                </Card.Header>
                <Card.Meta>
                <span style={{ fontWeight: 'bold' }}>Platforms:</span> {platforms}
                </Card.Meta>
                <Card.Description>
                    A brief synopsis about each game
                </Card.Description>
                </Card.Content>
                ) : (
                <Card.Content>
                    Release Date: <span style={{ fontWeight: 'bold' }}>{releaseDate}</span> 
                    <Button size="tiny" icon floated="right"
                    circular basic color="grey" onClick={() => setIsEdit((isEdit) => !isEdit)}>
                        <Icon name="edit" />
                    </Button>  
                    <Card.Header as='h1'>
                        {name}
                    </Card.Header>
                    <Card.Meta>
                    <span style={{ fontWeight: 'bold' }}>Platforms:</span> {platforms}
                    </Card.Meta>
                    <Card.Description>
                        A brief synopsis about each game
                    </Card.Description>
                    </Card.Content>     
                )}
                {isSeeingReviews ? (
                <AnticipatedGameReviewList anticipatedGame={anticipatedGame} isSeeingReviews={isSeeingReviews} setIsSeeingReviews={setIsSeeingReviews} onAddReview={onAddReview} onDeleteReview={onDeleteReview} onUpdateReview={onUpdateReview} />) : (
                <Button onClick={() => setIsSeeingReviews((isSeeingReviews) => !isSeeingReviews)}>See Reviews</Button> )}
                {/* <Button onClick={() => console.log(reviews)}>Test</Button> */}
            </Card>
            <Divider />
        </Grid.Column>
        </>
    )
}

export default AnticipatedGameCard 