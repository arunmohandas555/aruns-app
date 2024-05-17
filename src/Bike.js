import React from 'react';
import axios from 'axios';

export default class Bike extends React.Component {
    componentWillMount() {
        console.log('in componentWillMount');

        axios
            .get('https://api.first.org/data/v1/countries')

            .then(response => {
                console.log('in sucees');

                const { data } = (response && response.data) || {};

                console.log('ONLY DATA', data);

                const countryList = Object.keys(data);

                console.log('countryList', countryList);
            })
            .catch(error => {
                console.log('in catch');
                console.log('error', error);
            });
    }

    render() {
        const countryList = ['In', 'Pak', 'US'];

        return (
            <div>
                <div> hi from class component Bike </div>
                <div> country list</div>
                {countryList.map(c => (
                    <div> {c} </div>
                ))}
            </div>
        );
    }
}
