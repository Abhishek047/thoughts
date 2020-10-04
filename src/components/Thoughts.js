import React from 'react'
import useFriestore from '../useFirestore'
import ThoughtCard from './ThoughtCard';

function Thoughts() {
const { docs } = useFriestore('thoughts');


    return (
        <div
        className="grid" >
            {docs && docs.map((thought) => <ThoughtCard key={thought.id} thought={thought} />) }            
        </div>
    )
}


export default Thoughts
