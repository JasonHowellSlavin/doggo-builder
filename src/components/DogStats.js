import React from 'react';

export default function DogStats({dog}) {
    const style = {
        fontSize: '10px',
        maxWidth: '100px',
        maxHeight: '200px',
        border: '1px dashed lightblue',
        margin: '0 10px'
    }

    return (
        <div key={`dog:${dog.id}`} style={style}>
           <h3>{dog.name}</h3>
            <p><b>{dog.type}</b></p>
            <p>{dog.age}</p>
            <ul>
                {Array.isArray(dog.tags) && dog.tags.map(tag => <li>{tag}</li>)}
                {typeof dog.tags === 'string' && <li>{dog.tags}</li>}
            </ul>
        </div>
    )
};