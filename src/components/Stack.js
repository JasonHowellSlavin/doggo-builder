import React from 'react';
import DogStats from './DogStats';

export default function Stack({groups, data}) {
    const wrapper = {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        maxWidth: '809px',
    };

    const stackStyle = {
        minHeight: '200px',
        minWidth: '400px',
        border: '2px solid black',
    };

    const dogWrapper = {
        display: 'flex',
        flexFlow: 'row wrap'
    };

    return (
        <div style={wrapper}>
            {groups.map((item) => {
                return (
                <div style={stackStyle} key={item}>
                    <h3>{item}</h3>
                    <div style={dogWrapper}>
                        {data.map((dog) => {
                            if (dog.group === item && dog.selected === true) {
                                return (
                                    <DogStats dog={dog}/>
                                )
                            }
                        })}
                    </div>
                </div>
                )
            })}
        </div>
    )
};