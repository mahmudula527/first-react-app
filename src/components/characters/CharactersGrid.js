import React from 'react'
import CharaterItem from './CharaterItem'
import Spinner from '../ui/Spinner'

const CharactersGrid = ({ items, isloading }) => {
    return isloading ? (
    <Spinner />
        ) : (
    <section className="cards">
        {items.map((item) => (
            <CharaterItem key={item.char_id} item={item}></CharaterItem>
        ))}
    </section>)
}

export default CharactersGrid
