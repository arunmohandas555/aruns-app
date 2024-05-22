import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function CountryListFunctionalComponent() {
    const [countryList, setCountryList] = useState(['in', 'US', 'RUS']);

    useEffect(() => {
        console.count('in use effect');

        setTimeout(() => {
            axios
                .get('https://api.first.org/data/v1/countries')

                .then(response => {
                    console.log('in sucees');

                    const { data } = (response && response.data) || {};

                    console.log('ONLY DATA', data);

                    const countryList = Object.keys(data);

                    console.log('countryList', countryList);

                    setCountryList(countryList);
                })
                .catch(error => {
                    console.log('in catch');
                    console.log('error', error);
                });
        }, 3000);
    }, []);

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
