import React, { useEffect, useState } from "react"
import { Route, Switch } from "react-router-dom"
import { Header } from 'semantic-ui-react'
import NavBar from './NavBar'
import TopGames from './TopGames'
import AnticipatedGames from './AnticipatedGames'
import Home from './Home'


function App() {
    const [topGames, setTopGames] = useState([])
    const [anticipatedGames, setAnticipatedGames] = useState([])
    const [reviews, setReviews] = useState([])
    
    
    useEffect(() => {
        fetch("http://localhost:9292/top_games")
        .then((r) => r.json())
        .then((topGames) => setTopGames(topGames))
    }, [])

    useEffect(() => {
        fetch("http://localhost:9292/anticipated_games")
        .then((r) => r.json())
        .then((anticipatedGames) => setAnticipatedGames(anticipatedGames))
    }, [])

    useEffect(() => {
        fetch("http://localhost:9292/reviews")
        .then((r) => r.json())
        .then((reviews) => setReviews(reviews))
    }, [])

    function handleUpdateReleaseDate(updatedAnticipatedGame) {
        const updatedAnticipatedGames = anticipatedGames.map((anticipatedGame) => {
            if(anticipatedGame.id === updatedAnticipatedGame.id) {
                return updatedAnticipatedGame
            }
            return anticipatedGame
        })
        setAnticipatedGames(updatedAnticipatedGames)
    }

    function handleAddReview(newReview) {
        setReviews([...reviews, newReview])
    }

    function handleDeleteReview(id) {
        const updatedReviews = reviews.map((review) => {
            setReviews(updatedReviews)
        })
    }


  return (
    <div style={{ backgroundColor: "black" }}>
        <Header style={{ backgroundColor: "black" }} >
        <NavBar />
        </Header>
        <div>
        <Switch>
            <Route exact path="/anticipated_games">
                <AnticipatedGames  anticipatedGames={anticipatedGames} 
                onUpdateReleaseDate={handleUpdateReleaseDate}
                onAddReview={handleAddReview}
                onDeleteReview={handleDeleteReview}
                 />
            </Route>
            <Route exact path="/top_games">
                <TopGames  topGames={topGames} setTopGames={setTopGames}
                onAddReview={handleAddReview}/>
            </Route>
            <Route exact path="/">
                <Home />
            </Route>
        </Switch>
        </div>
    </div>
   
  )
}

export default App;
