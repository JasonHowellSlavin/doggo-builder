import React from 'react';

export default function Picker({options, selected}) {
    return (
        <div>
            {options.map((item) => {
                return (
                <div key={item.id}>
                    <label style={{color: item.selected === true ? 'green' : 'black'}} htmlFor={item.name}>{item.name}</label>
                    <input type="checkbox" value={item.name} name={item.name} onChange={() => {selected(item.id)}}></input>
                </div>
                )
            })}
        </div>
    )
}
                

