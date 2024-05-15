import React from 'react';

export default function Car(props) {
    const { speed, obj } = props || {};

    const { name } = obj || {};

    return (
        <div>
            <div> Car </div>
            <div> with color {props.color} </div>
            {props.isRaining ? 'wiper ON' : 'wiper OFF'}
            <div> speed: {speed} </div>
        </div>
    );
}

export function Car2(props) {
    return (
        <div>
            <div> Car 2 </div>
            <div> with color {props.color} </div>
        </div>
    );
}
