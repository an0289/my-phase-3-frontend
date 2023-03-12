import React, { useState, useEffect } from 'react'
import { Card, Grid, Divider, Button, Icon } from 'semantic-ui-react'
import AnticipatedReview from './AnticipatedReview'

function AnticipatedGameCard({ anticipatedGame, setAnticipatedGames, onUpdateReleaseDate }) {
    const { id, image, name, platforms, release_date: releaseDate, reviews } = anticipatedGame
    const [isAnticipatedReview, setIsAnticipatedReview] = useState(false)
    const [isEdit, setIsEdit] = useState(false)
    const [changeDate, setChangeDate] = useState("")

    useEffect(() =>{
        setChangeDate(anticipatedGame)
    }, [anticipatedGame])


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
                    placeholder="Release Date" />
                </span>
                <input type="submit" value="Save" />   
                </form>
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
                    <Button icon floated="right"
                    cicular basic color="grey" onClick={() => setIsEdit((isEdit) => !isEdit)}>
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
                {isAnticipatedReview ? (<AnticipatedReview anticipatedGame={anticipatedGame}/>) : (
                <Button onClick={() => setIsAnticipatedReview((isAnticipatedReview) => !isAnticipatedReview)}>Reviews</Button>
                )}      
            </Card>
            <Divider />
        </Grid.Column>
        </>
    )
}

export default AnticipatedGameCard 