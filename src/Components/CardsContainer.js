import React, { useEffect, useState } from 'react'

function CardsContainer({ data, searchInput }) {
    const [searchInputArray, setSearchInputArray] = useState(data)
    useEffect(() => {
        if (searchInput.length == 0) {
            setSearchInputArray(data)
            console.log("length :", searchInput.length)
            console.log("length 0 ", searchInputArray.length, searchInputArray)
        }
        else {
            setSearchInputArray(data.filter(eachCard => eachCard.email.includes(searchInput)))
            console.log("Searched:", searchInputArray)
            console.log("Input Length:", searchInput.length)
        }
    }, [searchInput])
    return (
        <div className="cardscontainer">
            {searchInputArray.length != 0 ? searchInputArray.map(eachCard => (<h1>{eachCard.email} {searchInput}</h1>)) : <h1>Not Found</h1>}
        </div>
    )
}

export default CardsContainer
