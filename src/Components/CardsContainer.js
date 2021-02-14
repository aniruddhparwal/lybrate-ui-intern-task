import React, { useEffect, useState } from 'react'
import IndividualCard from './IndividualCard'

function CardsContainer({ data, searchInput }) {
    const [searchInputArray, setSearchInputArray] = useState(data)
    useEffect(() => {
        if (searchInput.length == 0) {
            setSearchInputArray(data)
            // console.log("length :", searchInput.length)
            // console.log("length 0 ", searchInputArray.length, searchInputArray)
        }
        else {
            setSearchInputArray(data.filter(eachCard => eachCard.email.includes(searchInput)))
            // console.log("Searched:", searchInputArray)
            // console.log("Input Length:", searchInput.length)
        }
    }, [searchInput])
    return (
        <div className="cardscontainer">
            {searchInputArray.length != 0 ? searchInputArray.map(eachCard => (<IndividualCard key={eachCard.id} first_name={eachCard.first_name} last_name={eachCard.last_name} avatar={eachCard.avatar} email={eachCard.email} />)) : <h1>Not Result Found</h1>}
        </div>
    )
}

export default CardsContainer
