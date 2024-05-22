import React from 'react';
import axios from 'axios';

export default class CountryList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            countryList: ['In', 'Pak', 'US'],
        };
    }

    componentWillMount() {
        console.log('in componentWillMount');

        setTimeout(() => {
            axios
                .get('https://api.first.org/data/v1/countries')

                .then(response => {
                    console.log('in sucees');

                    const { data } = (response && response.data) || {};

                    console.log('ONLY DATA', data);

                    const countryList = Object.keys(data);

                    console.log('countryList', countryList);

                    this.setState({ countryList: countryList });
                })
                .catch(error => {
                    console.log('in catch');
                    console.log('error', error);
                });
        }, 3000);
    }

    render() {
        const { countryList } = this.state || {};

        return (
            <div>
                <div> hi from class component CountryList </div>
                <div> country list</div>
                {countryList.map(c => (
                    <div> {c} </div>
                ))}
            </div>
        );
    }
}
